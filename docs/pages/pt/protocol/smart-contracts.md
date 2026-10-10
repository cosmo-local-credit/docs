# Contratos inteligentes

Esta página descreve os principais contratos de Fundo e vale no protocolo v1.1.0. O comportamento do contrato fornece uma mecânica de liquidação; Não substitui as divulgações do emissor, as regras do Fundo ou outros termos de transação aplicáveis a um determinado uso.

Utilização [Conceitos e vocabulário](/pt/introduction/concepts) para distinguir o Fundo de Compromissos regido do `SwapPool`, e a liquidação de swap da apresentação, realização e quitação do resgate.


## vale (`GiftableToken`)

`GiftableToken` é um token ERC20 com mecânica que um emissor pode usar para um vale:

- **Mineração autorizada** O proprietário pode designar escritores que podem emitir tokens com `mintTo`.
- **A expiração facultativa** Uma expiração de `0` significa que não há expiração a nível do contrato. Caso contrário, as transferências, a moagem e a queima revertem-se no ou após o timestamp configurado. Qualquer pessoa pode persistir no estado do terminal `expired` chamando `applyExpiry` diretamente.
- **Contabilidade do fornecimento** `totalMinted` e `totalBurned` expõem a actividade de abastecimento acumulada. A função `burn` só proprietário queima tokens detidos pelo endereço do proprietário.

O contrato simbólico faz **Não** Identificar os bens ou serviços do emissor, estabelecer um valor de resgate, comprovar a capacidade ou prometer conversão de caixa. Um `GiftableToken` só se torna um compromisso reembolsável através dos termos e dos comportamentos publicados separadamente pelo emissor. As emissoras continuam a ser responsáveis por descrever e respeitar com precisão esses termos.


## Fundo de Compromissos (`SwapPool`)

`SwapPool` é um token vault e swap-settlement engine. Apesar de expor os metadados ERC20 para o nome, símbolo e decimais do Fundo, o contrato v1.1.0 não acuenta tokens do Fundo-share. A liquidez é fornecida através da transferência de tokens para o Fundo, e o titular do contrato pode retirar a liquidez disponível.

### Composição e dependências opcionais

| Configuração | Quando desestabelecido | Espaço de endereço selado |
| --- | --- | --- |
| `tokenRegistry` | Qualquer token pode passar o cheque de cura do Fundo. | Sim, sim. |
| `tokenLimiter` | Os depósitos não possuem limite máximo de saldo a nível do contrato | Sim, sim. |
| `quoter` | A quantidade de entrada bruta é tratada como a quantidade de saída bruta cotada | Sim, sim. |
| `feePolicy` | A taxa do Fundo é zero . | Sim, sim. |
| `feeAddress` | As taxas do Fundo não se acumulam como taxas retiráveis para um destinatário designado | Sim, sim. |
| `protocolFeeController` | Não são cobradas taxas de protocolo | Não , não . |

Os cinco bits de vedação bloqueiam permanentemente os endereços atuais `feePolicy`, `feeAddress`, `quoter`, `tokenRegistry` e `tokenLimiter` contra os seus definidores correspondentes. `protocolFeeController` e `feesDecoupled` são valores de inicialização e não estão entre esses cinco bits.

O selamento de um espaço de endereço não congela o contrato nesse endereço. Um registo selado, um limitador, uma política de cotação ou de taxas e um controlador de taxas de protocolo configurados podem ainda mudar se a sua própria governação o permitir. O administrador de proxy ERC-1967 também pode atualizar a implementação do Fundo. Uma alegação de imutabilidade significativa depende, portanto, da governação do proprietário do Fundo, do administrador proxy e de cada dependência configurada.

### Swap settlement

Para uma troca, `SwapPool`:

1. Verifica se os tokens de entrada e saída passam pelo registo opcional e testa a entrada solicitada contra o limite opcional de balanço de fundo.
2. Retira o token de entrada do chamador e mede o montante realmente recebido. Os preços utilizam este montante medido, inclusive para os tokens de transferência.
3. Obter uma cotação bruta do cotador configurado, ou utilizar o montante bruto recebido quando nenhum cotador está definido.
4. Calcula a taxa do Fundo e quaisquer taxas adicionais de protocolo, em seguida, verifica a liquidez disponível dos tokens de saída.
5. Envia a taxa do protocolo diretamente ao destinatário do protocolo configurado, transfere a saída líquida nominal ao destinatário e registra a taxa do Fundo quando um endereço de taxa é configurado.
6. Emite o evento legado `Swap` e o evento mais detalhado `SwapSettlement`.

O `SwapSettlement` registra o iniciador, os dois tokens, a entrada medida, a saída bruta cotada, a saída nominal enviada, a saída realmente observada no destinatário, a taxa de fundo e a taxa de protocolo. As saídas nominais e observadas podem diferir quando o próprio token de saída cobra uma taxa de transferência. O campo `fee` no evento legado `Swap` é apenas a taxa do Fundo.

A sobrecarga de seis argumentos `withdraw(tokenOut, tokenIn, value, recipient, minAmountOut, deadline)` é o caminho de execução limitado. Reverte-se após o prazo ou quando o aumento observado do saldo do beneficiário for inferior a `minAmountOut`. Os integradores devem preferir porque uma cotação exibida é temporária: o estado da cotação, a política de taxas, a liquidez, os limites e os dados do oráculo podem mudar antes da execução. As mais antigas sobrecargas de três e quatro argumentos não fornecem esses limites de nível Fundo.

### Calculo da taxa aditiva

As taxas de base e de protocolo são deduzidas da produção bruta cotada. A taxa do protocolo é **Não excluído da taxa do Fundo**, e o Fundo mantém a sua taxa total calculada.

Por exemplo, numa cotação bruta de 100 unidades:

- Uma taxa de 2% para o Fundo é de 2 unidades para o Fundo;
- Uma taxa de protocolo de 10% aplicada a essa taxa de Fundo envia outras unidades 0.2 diretamente ao destinatário do protocolo; e
- O utilizador recebe unidades 97.8.

O cálculo do protocolo utiliza a maior das taxas do Fundo calculadas e uma base de taxas suposta de 1%. Isto impede que uma taxa de Fundo muito pequena reduza o cálculo do protocolo para quase zero. As taxas combinadas inválidas revertem com `FeeTooHigh`, e uma cotação que se liquidaria a zero reverte com `InsufficientOutput`.

### Poderes de proprietário e de atualização

O titular do contrato pode cobrar taxas acumuladas do Fundo e pode ligar para `withdrawLiquidity` para transferir qualquer token do Fundo disponível para um endereço não zero escolhido. Quando as taxas são desacopladas, as taxas acumuladas são reservadas a partir deste caminho de retirada de liquidez; Caso contrário, continuam a fazer parte do saldo do Fundo. Os participantes do Fundo não devem interpretar a liquidez depositada como permanentemente bloqueada, a menos que os controlos de governação adicionais e verificáveis estabeleçam esse resultado.

O selo de configuração não elimina este poder de retirada de liquidez. Também não remove o poder de atualização do administrador de proxy separado ERC-1967.


## Modulos de avaliação

Todos os três cotadores implementam as funções de cotar para frente e para trás utilizadas por `SwapPool` e `SwapRouter`:

- **`DecimalQuoter`** Normalização decimal sem estado sob uma suposição de paridade de valor de 1:1.
- **`RelativeQuoter`** Normalização decimal mais índices de preços relativos geridos pelos proprietários. Um índice de token não definido é padrão para paridade.
- **`OracleQuoter`** Avaliar cada token através de um oráculo configurado, com um limite de estabilidade global ou por token e um multiplicador de saída opcional 0.9-to-1.0.

Um `OracleQuoter` é tão confiável quanto a sua selecção e administração de alimentos para animais. A denominação e a direcção dos alimentos para animais devem ser consistentes, os decimais devem ser corretos, as atualizações devem ser positivas e frescas, e a governação pode substituir os alimentos para animais ou alterar as configurações de frescura. Manipulação da fonte, atualizações atrasadas, interrupções de rede, configuração incorreta de pares ou perda da chave do proprietário do oráculo podem causar baixas cotações ou fazer com que os swaps revertam.

O `OracleRelay` é um relevo opcional de última rodada compatível com a interface do oráculo. Um autor designado republica os valores de origem; Não há provas de cadeia cruzada e não há histórias armazenadas. O relevo aceita os valores do escritor apenas com uma verificação de tempo futuro. O `OracleQuoter` rejeita independentemente as respostas não positivas ou obsoletas, enquanto o proprietário do relevo pode girar o roteiro ou invalidar a rodada atual. Os utilizadores devem, por conseguinte, avaliar a fonte de alimentação, o escritor do relé, o proprietário do relé e o processo de monitorização.


## Política de tarifas e limites

O `FeePolicy` armazena uma taxa padrão em partes por milhão e o par direcional opcional excede. O seu proprietário pode alterar essas taxas, a menos que a governação fora do contrato restrinja esse poder.

O `Limiter` armazena um saldo máximo para um token num determinado endereço do Fundo. O proprietário ou um escritor autorizado pode alterar esse limite. Um limite zero bloqueia os depósitos quando o limitador estiver ativo; um limitador não definido deixa os depósitos sem limite.

Estes limites descrevem a configuração **Exposição de tokens** numa Fundo. Não classificam, por si só, um saldo simbólico como um empréstimo ou dívida legal, não comprovam a capacidade de um emissor ou não garantem o cumprimento. Essas questões dependem dos termos do emissor, das regras do Fundo, da transação apresentada ao utilizador e da legislação aplicável.


## Controlador de taxas de protocolo

O `ProtocolFeeController` é um componente opcional de taxas de implementação. O seu proprietário pode alterar a taxa de protocolo e o destinatário ou desativar a taxa. Um único controlador pode ser compartilhado por vários Fundos, mas o protocolo não requer um controlador por rede.

Quando ativo e configurado, o destinatário é pago diretamente no token de saída durante cada troca bem-sucedida. A forma como o destinatário utiliza os fundos, por exemplo, para operações, acompanhamento, apoio à liquidez ou outro propósito publicado, é uma questão de governação e não uma garantia do contrato.
