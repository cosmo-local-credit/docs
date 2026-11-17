## C. Propostas definições de KPI

Estes KPIs constituem uma especificação de medição proposta, não uma declaração de que a aplicação ou protocolo atual registra todos os eventos necessários.

Todos os KPI publicados devem incluir:

- O editor responsável e a fonte de dados;
- Definição de evento ou estado;
- período de coorte ou de medição;
- unidade e método de avaliação;
- O timestamp de avaliação;
- Regras de inclusão e exclusão;
- Tratamento de registos parciais, contestados, expirados, inacessíveis e corrigidos;
- A prova ou a certificação exigida fora da cadeia;
- História de revisão e limitações da qualidade dos dados; e
- Se o resultado for on-chain, relatado, atestado, verificado de forma independente ou estimado.

| KPI | Definição proposta | Evidências necessárias e exclusões |
| --- | --- | --- |
| **Presentações válidas** | Contas ou unidades aceites no processo de resgate do emissor durante um período | Identificador de apresentação, emissor, autorização do titular, montante, horário, status; excluir duplicados e pedidos inválidos |
| **Taxa de realização** | Presentações válidas preenchidas divididas por apresentações válidas para a mesma coorte madura | Evidências separadas de desempenho do emissor; Relatório de casos abertos, rejeitados, contestados, parciais e corrigidos |
| **Completidade da quitação** | Presentações preenchidas com registo de quitação dividido por apresentações preenchidas | Combustão, cancelamento, registro de desativação ou outras provas de não reutilização ligadas à realização |
| **Latência de execução** | Mediana e 90o percentil de tempo de apresentação até realização | Não substitua o tempo de retenção da emissão à apresentação ou da aquisição à apresentação |
| **Duração da retenção** | Mediana e distribuição do tempo entre aquisição e apresentação | Identificar o evento de aquisição e excluir tempos de aquisição desconhecidos |
| **Compromissos elegíveis pendentes** | Compromissos de terceiros elegíveis restantes após exclusões definidas | Identidade e condições do emissor; Excluir o inventário aplicável de emissores, a expiração, a queima, a quitação, os testes e os tokens de não compromisso |
| **Volume de trocas diretas de Fundo** | Valor das trocas concluídas que começaram como trocas num único Fundo, segundo um método de avaliação divulgado | Eventos de liquidação na cadeia, unidades de token, fonte da taxa e momento; não classificar como cumprimento pelo emissor |
| **Tentativas de descoberta de rotas** | Pedidos válidos para encontrar vales acessíveis ou caminhos candidatos durante um período | Versão do grafo, bloco indexado, atualidade, âmbito da carteira, profundidade solicitada, número de candidatos, estado de omissão ou orçamento de pesquisa; não é uma cotação autorizada |
| **Rotas candidatas disponíveis** | Caminhos candidatos devolvidos pela descoberta para a coorte definida de pedidos | Contar cada caminho ordenado e distinto de Fundos e tokens; indicar profundidade e exclusões da rota; não classificar como executável ou liquidado |
| **Taxa de aprovação das cotações de rota** | Cotações autorizadas devolvidas, divididas pelas tentativas válidas de cotação | Bloco fixado, caminho, modo de montante, prazo, resultado ou motivo da recusa; manter separada do sucesso da descoberta e da execução |
| **Taxa de execução da rota** | Transações encaminhadas confirmadas, divididas pelas tentativas válidas de execução assinadas para a mesma coorte madura | Identificador de acompanhamento, hash da transação, estado do envio, confirmação ou reversão, profundidade e motivo da falha; excluir cotações não assinadas |
| **Volume da rota completa** | Valor de entrada e saída das trocas encaminhadas confirmadas, contado uma vez por rota | Utilizar a entrada liquidada do primeiro passo e a saída liquidada do último segundo um único método de avaliação; não somar o valor de todos os passos como volumes económicos independentes |
| **Liquidação por passo** | Entrada liquidada, saída bruta, comissão do Fundo, comissão do protocolo e saída líquida de cada passo numa rota confirmada | Identificadores ordenados de Fundos e tokens, eventos de liquidação, hash da transação, bloco, índice do registo e qualquer saldo intermédio restante |
| **Comissões da rota** | Comissões atuais dos Fundos e do protocolo efetivamente liquidadas em toda a rota | Apresentar cada passo e o total por tipo de comissão; não as classificar como percentagem de rede proposta nem como comissão de serviço não implementada |
| **Restrições da rota** | Número e proporção de recusas de rota ou cotação por causa identificada | Admissão, limite de depósito, liquidez, domínio de comissões, token ou cotador não suportado, saldo ou tipo de carteira, gás, orçamento de pesquisa, prazo, incompatibilidade ou provas de simulação |
| **Estado da reconciliação de rotas** | Atualidade e fiabilidade do grafo indexado e dos registos agrupados de liquidação | Versão e idade do grafo, profundidade da fila de itens pendentes, duração da reconciliação, correções, falhas, membros desconhecidos e recibos não resolvidos |
| **Inventário de Fundos** | Ativos apoiados medidos detidos por um Fundo em um momento determinado | Saldos contratuais, reservas de taxas, ativos inacessíveis, método de avaliação e poderes de retirada do titular |
| **Adequação das reservas** | Ativos de reserva disponíveis elegíveis divididos por exposição expressamente coberta | Política de cobertura, elegibilidade dos ativos, custódia/controle, passivos, exclusões e avaliação; Não fornecimento total de tokens por padrão |
| **Utilização de limite** | Balanço de tokens do Fundo medido dividido pelo seu limite atual configurado | Limiter endereço, token, fundo, timestamp, alterações e períodos sem limite |
| **Recuperação do garante** | Recuperação elegível recebida dividida por créditos cobertos pagos | Garante identificado, política de crédito, calendário, custos, litígios e amortizações |
| **Receita proposta da rede** | comissão de rede proposto recebido mais taxas de roteamento/serviço separadas recebidas | Excluir as taxas brutas dos Fundos retidas pelas Fundos e evitar a contagem do rake duas vezes |
| **Terminalidade da governação** | Tempo para detectar, decidir, pausar, reparar e fechar um incidente | Horários definidos, órgãos responsáveis, poderes de emergência, recursos e eventos perdidos |

As alegações de impacto social requerem uma metodologia separada. A atividade Blockchain sozinha não estabelece identidade, desempenho do emissor, satisfação, saúde da comunidade, causalidade ou impacto.
