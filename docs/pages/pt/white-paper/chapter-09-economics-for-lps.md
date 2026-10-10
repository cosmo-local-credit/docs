## **9. Proposta de economia para programas de liquidez**

Este capítulo descreve um modelo futuro, adotado separadamente. Não é um recurso da aplicação atual, uma oferta, uma devolução prometida ou um direito criado por depósito no `SwapPool`.

### **9.1 Fontes de receita propostas**

Um futuro orçamento da rede poderá receber:

1. a divulgada **comissão de rede** Tomada como parte das taxas cobradas pelas Polas participantes;
2. Tarifas de roteamento ou de serviço separadas dos serviços compartilhados implementados; e
3. Outras receitas expressamente adotadas.

As taxas brutas do Fundo retidas pelos Fundos não são receitas da rede. A atual Protocol v1.1.0 utiliza um modelo diferente: uma taxa de protocolo opcional é adicional à taxa do Fundo e é enviada diretamente ao destinatário configurado.

### **9.2 Matemática de rake ilustrativa**

Se um Fundo participante cobrar uma taxa de fundo de 2.00% e um rake de rede adotado receber 20% dessa taxa de fundo, a taxa efetiva proposta de rake de rede sobre o valor rotado é:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Se 25% dos activos recebidos de rake e taxas de serviço forem elegíveis e convertíveis para uma utilização denominada em dinheiro declarada após os custos, a parcela usável em dinheiro do rake de 40 bps é de aproximadamente 10 bps.

As receitas da rede propostas são:

`network_rake_received + routing_or_service_fees_received`

Não adicionar taxas brutas do Fundo ao comissão de rede: o rake é uma transferência dessas taxas e, caso contrário, seria contado duas vezes.

### **9.3 Direitos do programa de liquidez**

Um programa separadamente adotado pode financiar o inventário do Fundo, os serviços de encaminhamento, a monitorização ou outros mandatos. Os seus termos deverão revelar:

- Se uma transferência é um presente, uma doação, um empréstimo, uma contribuição ou uma compra recuperáveis;
- a custódia e o controlo;
- Regras de retirada, reembolso, perda e prioridade;
- A elegibilidade das taxas e das recompensas;
- Direitos de governação;
- Métodos de avaliação e comunicação de informações; e
- Suspensão, rescisão e recursos.

A atual `SwapPool` não cria nenhum token de fundo-share ou direito de contribuinte automático. Qualquer métrica ex-post deve basear-se em receitas e perdas realizadas, não deve ser apresentada como rendimento prometido e pode ser zero ou negativo.
