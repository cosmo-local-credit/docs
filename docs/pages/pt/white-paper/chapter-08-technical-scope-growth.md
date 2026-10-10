## **8. Ámbito de aplicação técnico e crescimento**

Este capítulo descreve o trabalho opcional ou proposto. Não se trata de uma lista de características garantidas de estar presente no atual CLC App ou Protocol v1.1.0.

Os domínios de trabalho possíveis incluem:

- Roteamento de execução através de Fundos compatíveis, com registro, cotação, limite, taxa e descoberta de inventário;
- Adaptadores de garantia ou de HTLC em tempo bloqueado para execução transnacional em caso de liquidação atômica não disponível;
- Interfaces e ferramentas políticas para Fundos pequenas ou pessoais;
- Registros auditáveis de vales, fundos, métodos de taxa de câmbio, limites, controladores e taxas;
- Conectores de fornecedores de pagamentos específicos de implementação, fluxos de caixa e controles de elegibilidade;
- Conexões de ativos fungíveis a locais externos de liquidez para reequilíbrio e liquidez de pagamento; e
- Conversão do tesouro coberta por políticas para a cobertura adotada, os custos operacionais ou os mandatos de liquidez.

Os preços do mercado externo não determinariam o que o emissor deve sob condições de vale. Um Fundo poderia utilizar uma referência externa protegida para um ativo fungível, mas o seu método de taxa de câmbio publicado, limites, taxas e inventário governariam as suas cotações.

### **8.1 Normas propostas de serviço de rota e SDK**

**Descoberta.** Um serviço de rota proposto iria consultar registros identificados para admissão de ativos, métodos de taxa de câmbio, limites, taxas, inventário, incidentes e informações do controlador. Os registos em cache incluem limites de frescura e identificadores de fonte.

**Perfis de rede.** Um cliente pode suportar mais de um perfil de raiz de registo ou de política. Indica ao participante que perfil, contrapartes, adaptadores, restrições e operadores de serviços responsáveis utilizam uma cotação. Uma rota transversal deverá satisfazer todas as condições aplicáveis.

**Políticas de caminhos.** Um operador responsável pode excluir dependências ou contrapartes inseguras e aplicar limites de nível de rota, requisitos de frescura e critérios de saúde. Estes sinais apoiariam uma decisão; Não garantiriam a realização nem a proteção contra a perda.

**Tarifas e limites.** Uma cotação incluiria as taxas do Fundo, quaisquer taxas adicionais atuais do Protocolo e quaisquer taxas de encaminhamento ou de serviço propostas separadamente. A execução rejeitaria as cotas expiradas ou os limites violados.

**Atomicidade e recuperação.** A execução multi-hop seria atômica sempre que possível. Em caso de utilização de HTLCs ou depósitos, o serviço divulgaria temporadas, rotas de interrupção, controladores responsáveis, procedimentos de incidente e riscos residuais.

**Proposta de rede de lote e de reequilíbrio.** Um serviço de opt-in pode recolher intenções de reequilíbrio e procurar ciclos ou cadeias compatíveis. Isso seria:

1. Publicar um recibo legível por máquina que identifique os ciclos executados, os ativos, os montantes, os timestamps de avaliação e as taxas;
2. Implementar os limites máximos por período e as políticas de contraparte adotadas;
3. Rejeitar atividades que violem a autorização, os limites ou o inventário disponível do Fundo participante; e
4. Preservar as entradas e receitas deterministas para análise e tratamento de litígios.

**Requisitos do SDK.** Um SDK para rotas executadas forneceria um mapeamento determinista de cotações a receitas, verificações de invariantes por espera, códigos de falhas compreensíveis e registos favoráveis à auditoria. O actual Protocol v1.1.0 `SwapRouter` fornece apenas citações; não executar estas rotas propostas.

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
