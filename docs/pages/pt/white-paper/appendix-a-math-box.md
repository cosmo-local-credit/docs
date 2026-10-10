## A. A. Modelo de medição e taxa proposto

Este apêndice define um quadro de medição proposto. Protocol v1.1.0 não registra o cumprimento do emissor, a quitação no mundo real ou todos os campos de dados exigidos abaixo.

### Definições de evento e estoque

Para a classe de vales *j*, coorte ou período *t*, e um método de avaliação divulgado *m*:

- `O_{j,t,m}`: valor dos compromissos em circulação elegíveis no limite de medição.
- `X_{j,t,m}`: valor dos swaps do fundo concluídos durante o período.
- `P_{j,t}`: unidades apresentadas válidamente ao emissor para resgate.
- `F_{j,t}`: unidades apresentadas com satisfação separadamente comprovada pelo emissor.
- `G_{j,t}`: unidades preenchidas com um registro de quitação que impede a reutilização.

O `O` não pode ser deduzido apenas da oferta de tokens. Uma política de medição deve identificar o emissor responsável e excluir, conforme aplicável, o inventário detido pelo emissor, as unidades queimadas, as unidades expiradas, as unidades descarregadas, os saldos de ensaio, os saldos inacessíveis e os tokens cujas condições não criam um compromisso pendente de terceiros.

Cada medida valorizada deve publicar a unidade, a fonte, o método de avaliação, o timestamp e o tratamento das taxas de câmbio divergentes do Fundo. Uma transferência na cadeia pode apoiar o `X` ou a apresentação de provas; Não estabelece por si só `F` ou `G`.

### Medidas de cumprimento baseadas em coorte

Para uma coorte de apresentações de resgate válidas:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Use a mesma coorte fechada ou madura em cada numerador e denominador. Relatório rejeitado, retirado, expirado, contestado, parcialmente cumprido, corrigido e apresentações ainda abertas separadamente.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

As medidas de latência do cumprimento são o serviço do emissor após a apresentação. A duração da retenção é uma medida separada e não deve ser rotulada como latência de resgate.

### Medidas de velocidade distintas

Uma velocidade de quitação de compromissos proposta só pode ser calculada se o `O` e o valor cumprido utilizarem o mesmo método de avaliação:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Uma medida de atividade de swap de fundo é separada:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Nenhum dos dois valores demonstra o impacto social, a capacidade do emissor, a rentabilidade ou a convertibilidade de caixa.

### Receita proposta da rede

Deixe:

- `PF_t` são as taxas brutas do Fundo geradas durante o período;
- `NR_t` é o rake de rede proposto realmente recebido como parte divulgada dessas taxas do Fundo;
- `RF_t` serão recebidas taxas de roteamento ou de serviço propostas separadamente; e
- `χ_t` é a parte medida das receitas recebidas que é elegível e conversível para uma utilização denominada em dinheiro declarada após custos e restrições políticas.

A partir da perspectiva do orçamento da rede proposta:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

Não adicionar `PF_t` ao `NR_t`: o rake é uma transferência das taxas brutas do Fundo e, caso contrário, seria contado duas vezes. Em vez disso, o atual Protocol v1.1.0 suporta uma taxa adicional de protocolo; As suas receitas devem ser comunicadas separadamente deste modelo de rake proposto.
