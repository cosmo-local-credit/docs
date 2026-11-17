# Protocolo

Os contratos Protocol v1.1.0 fornecem os blocos de construção na cadeia para a **Protocolo de Partilha de Compromissos (CPP)** descrito em [Capítulo 1](/pt/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) do Livro Branco. Esta referência segue o seguinte: [`v1.1.0` liberação](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Utilização [Conceitos e vocabulário](/pt/introduction/concepts) para as camadas de produtos, funções responsáveis, ciclo de vida da ação, valores, limites, taxas e termos de status utilizados aqui.

Grassroots Economics Foundation (GEF) opera o Progressive Web aplicação em [cosmolocal.credit](https://cosmolocal.credit), que oferece uma forma de interagir com estes contratos. A aplicação e os contratos são distintos. A operação da interface não faz da GEF, por si só, um emissor de vale, Gestor do Fundo, guardião, garante ou contraparte de uma transação de utilizador. Essas funções dependem da implementação relevante, dos endereços do controlador e dos termos publicados do emissor ou do Fundo. Veja o [Termos de Serviço](/pt/governance/terms).


## Padrão de implementação

A maioria dos módulos com estado é iniciada como **Exemplos de proxy ERC-1967** através do Solady's `ERC1967Factory`. Múltiples instâncias podem compartilhar uma implementação mantendo proprietários, configuração e armazenamento separados. Uma implementação também pode usar sais deterministas para que os endereços possam ser previstos antes da implementação.

Nem todos os contratos são procurados. O `DecimalQuoter` e o `SwapRouter` são implementações directas sem Estado; O `RescueVault` e o `ERC1967Factory` também são implantados diretamente. Os restantes módulos de estado listados abaixo são concebidos para implementação proxy.

Cada proxy tem um administrador que pode substituir a sua implementação. A administração por procuração é separada da propriedade do contrato e deve ser atribuída a um endereço adequadamente regido. Uma atualização pode alterar o comportamento mesmo depois de um Fundo ter selado a configuração, por isso os usuários devem avaliar tanto o proprietário do Fundo quanto o administrador proxy.

O apoio EIP-165 é também específico do contrato e não universal. É exposta por `GiftableToken`, os três indicadores, `OracleRelay`, `Limiter`, vários registros e índices, `Splitter`, `EthFaucet`, `PeriodSimple` e `RescueVault`. `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` e `CAT` não expõem `supportsInterface` no v1.1.0.


## Mapa de componentes

- **GiftableToken** ERC20 fornecimento, moagem, queimação e mecânica de expiração opcional. Um emissor pode usar uma instância como um vale, mas o contrato por si só não define o que pode ser redimido, por quem, onde ou em quais condições.
- **SwapPool** Motor de coleta de tokens e de liquidação de swaps. Uma implementação pode anexar componentes de curadoria, avaliação, taxa, limite e taxa de protocolo ou deixar dependências suportadas não definidas.
- **DecimalQuoter, RelativeQuoter e OracleQuoter** Modulos de avaliação intercâmbios para paridade decimal, taxas relativas geridas pelos proprietários ou taxas derivadas de oracles. O `OracleRelay` pode transmitir uma alimentação externa para utilização por um `OracleQuoter`.
- **Política de tarifas e Limiter** Regras opcionais de taxa de par e limites de saldo de fundo por token.
- **ProtocoloFeeController** Opcional, taxa de taxa de protocolo mutável, destinatário e estado ativo que um Fundo pode consultar durante a liquidação.
- **TokenUniqueSymbolIndex, AccountsIndex e ContractRegistry** Componentes de identificação de tokens, contas e endereços. `CAT` registra as preferências de tokens de liquidação ordenadas de uma conta.
- **SwapRouter** Calculações exatas de entrada e saída exatas sobre um caminho multi-Fundo proposto. Não custodiam tokens nem executam swaps.
- **Splitter, EthFaucet, PeriodSimple e RescueVault** Apoio à distribuição, ao financiamento do gás, ao limite de taxas e aos serviços públicos de recuperação de ativos.

Os contratos podem ser combinados de diferentes formas. Uma listagem de registro, citação ou caminho gráfico não é uma garantia de que uma transação será executada: liquidez atual, limites de tokens, taxas, estado do oráculo, autorização, prazos, condições de rede e a configuração de cada Fundo ainda se aplica.


## Intercâmbio encaminhado a nível de aplicação

A CLC App em produção faz mais do que chamar o `SwapRouter` Solidity. O CLC Core mantém um grafo reconciliado das relações elegíveis entre Fundos, estima os vales acessíveis, lê os Fundos selecionados num mesmo bloco fixado para produzir uma cotação autorizada, simula a rota completa e prepara um lote para a carteira Calibur. O utilizador assina esse lote e um relayer envia-o como uma transação na mesma cadeia.

Cada passo chama diretamente um `SwapPool`. O lote repõe a autorização do token, define a autorização necessária e, em seguida, chama a sobrecarga limitada de `SwapPool.withdraw` com uma saída mínima e um prazo. A opção `revertOnFailure` está ativa, pelo que uma chamada falhada reverte toda a transação encaminhada. A aplicação apresenta depois um recibo agrupado com os dados de liquidação e as comissões de cada passo.

Este fluxo de encaminhamento é uma capacidade da CLC App e do CLC Core construída acima do Protocol v1.1.0. Não transforma o `SwapRouter` Solidity num contrato de execução, não altera o proprietário nem o administrador de um Fundo e não torna um Fundo responsável pelas regras de outro Fundo ou pelo cumprimento de um emissor. Consulte a [arquitetura da rede do protocolo](/pt/protocol/network) para ver o fluxo completo.
