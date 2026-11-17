## **8. Ámbito de aplicação técnico e crescimento**

Este capítulo separa o serviço atual de encaminhamento em produção do crescimento opcional ou proposto. Uma capacidade atual aqui descrita continua específica da implementação pública da CLC App e do CLC Core; não é automaticamente uma característica dos contratos do Protocol v1.1.0 nem de outra implementação.

A implantação pública atual inclui:

- descoberta, através de um grafo, dos vales acessíveis por meio de Fundos compatíveis;
- cotações autorizadas num bloco fixado para rotas selecionadas na mesma cadeia;
- cálculo das comissões do Fundo e do protocolo em cada passo, das saídas mínimas e dos prazos;
- simulação do lote completo, assinatura pelo participante e execução Calibur retransmitida;
- uma transação na mesma cadeia que reverte todas as chamadas da rota em caso de falha; e
- recibos agrupados e reconciliação dos eventos de liquidação de cada passo.

As áreas de crescimento possíveis incluem:

- Adaptadores de garantia ou de HTLC em tempo bloqueado para execução transnacional em caso de liquidação atômica não disponível;
- Perfis adicionais de registo ou política e encaminhamento entre perfis;
- Reequilíbrio de estoque do Fundo opcional e compensação por lotes;
- Interfaces e ferramentas políticas para Fundos pequenas ou pessoais;
- Registros auditáveis de vales, fundos, métodos de taxa de câmbio, limites, controladores e taxas;
- Conectores de fornecedores de pagamentos específicos de implementação, fluxos de caixa e controles de elegibilidade;
- Conexões de ativos fungíveis a locais externos de liquidez para reequilíbrio e liquidez de pagamento; e
- Conversão do tesouro coberta por políticas para a cobertura adotada, os custos operacionais ou os mandatos de liquidez.

Os preços do mercado externo não determinariam o que o emissor deve sob condições de vale. Um Fundo poderia utilizar uma referência externa protegida para um ativo fungível, mas o seu método de taxa de câmbio publicado, limites, taxas e inventário governariam as suas cotações.

### **8.1 Serviço de rota actual e normas mais gerais**

**Descoberta.** O CLC Core mantém um grafo reconciliado a partir dos catálogos configurados, das relações de registo, dos parâmetros dos Fundos, das comissões, dos limites, dos saldos e dos eventos da cadeia. Estima o que a carteira da sessão pode alcançar e assinala dados desatualizados. A configuração pública procura rotas de até três passos. A descoberta não é uma promessa executável.

**Cotação autorizada.** Para uma rota selecionada, o CLC Core lê os Fundos participantes num mesmo bloco fixado e reproduz a aritmética suportada por `SwapPool`. Discrimina as comissões do Fundo e do protocolo, define saídas mínimas em cada passo e um prazo, prepara as chamadas para a carteira e simula o lote completo. Tokens, cotadores, carteiras ou condições do Fundo não suportados são recusados.

**Execução atual.** O participante assina um lote Calibur que contém a reposição da autorização, a concessão da autorização e um levantamento limitado em cada passo. Um relayer envia uma transação na mesma cadeia com `revertOnFailure` ativo. Isto proporciona um comportamento de tudo ou nada, ao nível da transação, para a rota atual. Não é atomicidade entre cadeias, encaminhamento por HTLC ou depósito em garantia, reequilíbrio automático nem compensação por lotes.

**Recibos e operações.** A CLC App agrupa a rota sob um identificador de acompanhamento e regista o estado da transação, a ordem dos passos, os Fundos, os pares de tokens, os montantes cotados e liquidados, as comissões dos Fundos, as comissões do protocolo e os saldos intermédios restantes. O serviço acompanha a atualidade do grafo, os resultados da enumeração e cotação das rotas, as falhas de simulação, a duração e as correções da reconciliação e os membros indexados não resolvidos ou desconhecidos. A telemetria operacional não prova o cumprimento pelo emissor.

**Perfis de rede.** Um cliente pode suportar mais do que um perfil raiz de registo ou de política. Indicaria ao participante o perfil, as contrapartes, os adaptadores, as restrições e os operadores de serviços responsáveis utilizados numa cotação. Uma rota entre perfis teria de satisfazer todas as condições aplicáveis em cada passo.

**Política do percurso.** Um operador responsável poderia excluir dependências ou contrapartes inseguras e aplicar limites máximos ao nível da rota, requisitos de frescura e critérios de saúde. Estes sinais apoiariam uma decisão; não garantiriam o cumprimento ou a proteção contra perdas.

**Comissões e limites.** A cotação atual discrimina as comissões do Fundo e qualquer comissão adicional do protocolo em cada passo. A CLC App pública não acrescenta atualmente uma comissão separada pelo serviço de encaminhamento. Qualquer futura comissão de serviço seria divulgada separadamente. A execução rejeita cotações expiradas ou limites ultrapassados.

**Atomicidade e recuperação entre domínios.** Quando uma futura rota não puder utilizar o lote atómico atual na mesma cadeia e recorrer a HTLCs ou depósito em garantia, o serviço divulgaria os prazos, os caminhos de cancelamento, os controladores responsáveis, os procedimentos para incidentes e os riscos residuais.

**Compensação por lotes e reequilíbrio propostos.** Um serviço voluntário poderia recolher intenções de reequilíbrio e procurar ciclos ou cadeias compatíveis. Esse serviço iria:

1. Publica um recibo de leitura automática que identifique os ciclos executados, os ativos, os montantes, as datas da avaliação e as comissões;
2. Reforçar os limites máximos por período e as políticas de contraparte adotadas;
3. Rejeitar qualquer atividade que viole a autorização, os limites ou o inventário disponível de um Fundo participante; e
4. Preservar as entradas e recebimentos determinísticos para efeitos de revisão e resolução de litígios.

**Requisitos do SDK e da interface.** Uma integração reutilizável de rotas deve fornecer um mapeamento determinístico entre cotação e recibo, verificações de invariantes em cada passo, códigos de falha compreensíveis e registos adequados para auditoria. A implementação atual da CLC App e do CLC Core fornece essas funções para o seu próprio perfil. O `SwapRouter` Solidity do Protocol v1.1.0 continua limitado a cotações e não executa a rota.

#### **8.1.1 Especificação mínima de compatibilidade com a confederação**

Um ecossistema Fundo que procure roteamento transversal publicaria informações legíveis por máquina para:

1. **Raízes do registo:** Identificadores de ativos, fundos, métodos de taxa de câmbio, limites e políticas de taxas, ou uma raiz que os resolva deterministicamente.
2. **Receitas:** O perfil, os ativos de entrada e saída, os montantes, a fonte de cotações e a marca de tempo, a imagem de limite, as taxas, o resultado do inventário e o resultado da execução de cada salto.
3. **Sinais operacionais:** Informações limitadas à frescura sobre o inventário, a utilização limitada, os incidentes e qualquer cumprimento separadamente comprovado ou proteção financiada.
4. **Restrições políticas:** contrapartes autorizadas ou negadas, classes de ativos, adaptadores e quaisquer requisitos de garantia.
5. **Códigos de falha:** Explicações deterministas de rejeição, expiração, limite, inventário, política, dependência ou falhas incidentais.

Um perfil pode adicionar cobertura, conformidade, arbitragem ou outros serviços sem torná-los requisitos para a compatibilidade básica de CPP. Cada serviço opcional identificaria a parte responsável, a autoridade, o âmbito e os termos.

### **8.2 Licenciamento, verificação e saída**

Os contratos Protocol v1.1.0 são EVM-compatíveis. Os contratos no diretório `src` do repositório do Protocolo são publicados sob o título AGPL-3.0, exceto os componentes de terceiros não modificados identificados que conservam os seus próprios termos. As instruções de origem, de ABI e de implementação publicadas apoiam uma revisão independente, mas não provam por si só uma auditoria, uma implementação segura ou conformidade legal.

Cada implementação divulgaria separadamente a sua versão de código, a origem da construção, endereços, poderes de controle e atualização, status de auditoria, espelhos de registo e quaisquer proteções de bloqueio temporário ou pausa.

Uma proposta **Kit de garfo** poderiam incluir:

1. Scripts de implementação determinista;
2. Impressão do registo e ferramentas de exportação;
3. Um processo documentado para redirecionar os serviços de rota, os SDK e as interfaces para uma nova raiz de registo;
4. Uma lista de verificação Gestor do Fundo para a saída segura de um registo compartilhado; e
5. Uma lista de verificação de migração dos vales em circulação, incluindo os avisos do emissor, os prazos de apresentação e cumprimento, o acesso contínuo aos registos e as medidas correctivas.

As forças compatíveis podem melhorar a resiliência quando comunidades, cooperativas, agências públicas, federações, multissociações ou operadores de serviços precisam de governação diferente. A continuidade real ainda depende da propriedade do contrato, das chaves, das dependências, das interfaces, das infraestruturas, das obrigações legais e dos serviços prestados por terceiros.
