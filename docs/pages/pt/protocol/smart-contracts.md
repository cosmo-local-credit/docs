# Contratos inteligentes

Os contratos registam saldos de tokens e executam trocas de Fundos. A [documentação do software CLC](https://software.cosmolocal.credit/contracts/) é a referência definitiva de implementação, atualmente em inglês. Esta página explica o que os participantes devem compreender antes de utilizar esses contratos.

Consulte [Conceitos e vocabulário](/pt/introduction/concepts) para distinguir um Fundo de Compromissos governado do seu contrato `SwapPool`, e a troca do cumprimento da promessa pelo Emissor.

## vale (`GiftableToken`)

Um Vale combina um saldo digital com a promessa publicada de um Emissor. As suas condições explicam para que serve, onde e quando é aceite e quem é responsável. Criar um token não prova que o Emissor pode fornecer os bens ou serviços prometidos.

Para conhecer os mecanismos de criação, emissão, destruição e validade, consulte [Vales](https://software.cosmolocal.credit/contracts/vouchers).

## Fundo de Compromissos (`SwapPool`)

Um Fundo de Compromissos reúne Vales selecionados segundo regras publicadas. O seu contrato mantém inventário e troca ativos suportados. Um depósito não concede automaticamente ao depositante participações no Fundo nem direitos de reembolso, levantamento, recompensa ou governação; esses direitos exigem condições divulgadas separadamente.

### Composição e dependências opcionais

Verifique quais os Vales que o Fundo aceita, como define as taxas de câmbio, os seus limites e comissões, e quem pode alterá-los. A referência do software descreve a [configuração e o bloqueio dos parâmetros do Fundo](https://software.cosmolocal.credit/contracts/pools).

### Swap settlement

Uma troca bem-sucedida altera os saldos correspondentes. Não prova que um Emissor entregou bens ou serviços. Antes de confirmar, verifique o que entrega e recebe, o destinatário, o mínimo recebido e o prazo da cotação.

Para os métodos de execução e os registos de liquidação, consulte [Cotação e liquidação de trocas](https://software.cosmolocal.credit/contracts/swaps).

### Calculo da taxa aditiva

Uma troca pode incluir uma comissão do Fundo e uma comissão adicional do protocolo. Verifique o total apresentado na cotação; uma rota através de vários Fundos pode ter comissões em cada etapa. A [referência das trocas](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) mantém o cálculo e um exemplo numérico.

### Poderes de proprietário e de atualização

O proprietário do Fundo pode levantar o inventário disponível. Outras autoridades podem controlar atualizações ou parâmetros. Analise esses poderes juntamente com as regras publicadas do Gestor antes de depositar ativos ou de depender de um Fundo. O bloqueio de parâmetros, por si só, não prova que o inventário esteja permanentemente imobilizado.

Consulte [Fundos](https://software.cosmolocal.credit/contracts/pools) e [Verificar uma instância](https://software.cosmolocal.credit/contracts/deployments#verify-an-instance) para conhecer as verificações técnicas.

## Modulos de avaliação

A taxa de câmbio de um Fundo é distinta do valor declarado de um Vale e das condições de resgate do Emissor. Analise o método escolhido pelo Fundo e quem pode alterar os seus dados. A referência do software explica os [módulos de cotação (Quoter)](https://software.cosmolocal.credit/contracts/quoters) disponíveis.

## Política de tarifas e limites

O **«Limite de crédito»** da aplicação é o saldo máximo de um Vale específico que o Fundo pode manter. Descreve capacidade de troca, não endividamento pessoal nem uma garantia de cumprimento. Consulte as [regras e a configuração do Fundo](https://software.cosmolocal.credit/contracts/pools) para saber como se aplicam os limites e as comissões.

## Controlador de taxas de protocolo

Uma comissão do protocolo tem um destinatário configurado. Receber essa comissão não torna automaticamente o destinatário Gestor do Fundo nem garante. Consulte a [referência das comissões](https://software.cosmolocal.credit/contracts/swaps#account-for-fees-and-settlement) para os mecanismos atuais e os [mecanismos de governação](/pt/governance/mechanics) para as responsabilidades e as informações a divulgar.
