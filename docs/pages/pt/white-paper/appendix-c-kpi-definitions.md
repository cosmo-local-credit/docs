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
| **Volume de troca de Fundo** | Valor dos swaps diretos concluídos no âmbito de um método de avaliação divulgado | Eventos de liquidação na cadeia, unidades de tokens, fonte de taxa, tempo; não são classificados como cumprimento do emissor |
| **Inventário de Fundos** | Ativos apoiados medidos detidos por um Fundo em um momento determinado | Saldos contratuais, reservas de taxas, ativos inacessíveis, método de avaliação e poderes de retirada do titular |
| **Adequação das reservas** | Ativos de reserva disponíveis elegíveis divididos por exposição expressamente coberta | Política de cobertura, elegibilidade dos ativos, custódia/controle, passivos, exclusões e avaliação; Não fornecimento total de tokens por padrão |
| **Utilização de limite** | Balanço de tokens do Fundo medido dividido pelo seu limite atual configurado | Limiter endereço, token, fundo, timestamp, alterações e períodos sem limite |
| **Taxa de passagem de citações** | Respostas de citação bem sucedidas divididas por tentativas de citação válidas | Resultado apenas de citação; Não execução de rota |
| **Taxa de execução da rota** | Execuções multi-hop completadas divididas por tentativas de execução válidas | Aplicável apenas a um sistema de execução implementado; Relatório de regras de per-hop e de atomicidade |
| **Recuperação do garante** | Recuperação elegível recebida dividida por créditos cobertos pagos | Garante identificado, política de crédito, calendário, custos, litígios e amortizações |
| **Receita proposta da rede** | comissão de rede proposto recebido mais taxas de roteamento/serviço separadas recebidas | Excluir as taxas brutas dos Fundos retidas pelas Fundos e evitar a contagem do rake duas vezes |
| **Terminalidade da governação** | Tempo para detectar, decidir, pausar, reparar e fechar um incidente | Horários definidos, órgãos responsáveis, poderes de emergência, recursos e eventos perdidos |

As alegações de impacto social requerem uma metodologia separada. A atividade Blockchain sozinha não estabelece identidade, desempenho do emissor, satisfação, saúde da comunidade, causalidade ou impacto.
