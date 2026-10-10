## **11. Mecanismos de governação**

Este capítulo propõe um modelo de governação. Não representa que o CLC App atual use a votação de tokens de governação, bloqueio de tempo, seguro compartilhado, um processo de reclamações ou qualquer controlo descrito abaixo. Cada implementação teria de identificar os seus tomadores de decisão, autoridades, contratos, processos e políticas reais.

- **Valores constitucionais:** O Parlamento Europeu e o Conselho, em nome do Parlamento Europeu e do Conselho, aprovaram a proposta de regulamento (CE) do Conselho, de 22 de Dezembro de 1999, que altera o Regulamento (CE) n.o 218/97 do Parlamento Europeu e do Conselho.
- **Tipos de propostas:** alterações de taxas, limites e índices; Mandatos de liquidez; Listagem e remoção dos Fundos; As decisões de cobertura opcional; e barragens de parâmetros.
- **Processo responsável:** ingestão → avaliação → revisão do risco → aprovação → bloqueio de tempo quando apropriado → execução. A aprovação pode ser concedida por administradores, cooperativas, agências públicas, federações, multissigas, votação em cadeia ou por outra estrutura divulgada e responsável.
- **Prazos de aprovação:** Parametrizados por classe de ação, com limiares mais elevados para alterações no índice de valor, poderes de emergência e outras ações críticas.
- **Delegação:** a delegação facultativa com mandatos públicos, a divulgação de conflitos e a retirada.
- **Interruptores de circuito:** Pausas de emergência com critérios estabelecidos, operadores autorizados, condições de retomada e pós-mortem necessárias.
- **Transparência:** as alterações e fluxos publicados, com provas separadas de liquidação de swaps, cumprimento do emissor, reservas, utilização limite, roteamento e garantidores.

**governação do Registo.** Uma implementação compatível com CPP pode manter registros de descoberta de vales, tokens e fundos. Os controles autorizados podem adicionar, atualizar, suspender ou remover entradas de registro através do processo de governação divulgado da implementação. A remoção do registo afeta a descoberta e o encaminhamento através desse registo; Não exclui por si só um token, altera o saldo de um titular, cumpre a obrigação do emissor ou invalida um contrato de outra forma funcional.

As regras de registo publicadas devem tornar o estatuto condicional e podem identificar repetidas incumprimentos, fraudes ou falsas declarações, comportamentos contratuais inseguros ou violações persistentes de princípios publicados como motivos para a suspensão ou remoção. Sempre que possível, o processo deve fornecer um aviso, uma oportunidade de recurso e um caminho de recurso. A remoção de emergência deverá exigir um relatório público de incidente e uma revisão automática ou o pôr do sol.

**Listagens proibidas.** No âmbito deste modelo, um registo não admite:

1. Instrumentos que financiem ou incentivem diretamente a destruição ecológica além dos limites acordados, violência ou armazenamento, extração coercitiva ou abuso sistémico; ou
2. Uma classe de vales que carece de termos claros de apresentação e cumprimento, responsabilidade e caminhos de remédio.

A lista proibida seria versionada, publicamente auditável e modificável somente através do limiar de ação crítica e do bloqueio de tempo adotados, ilustrado como Q3 + T3 no apêndice D.

### **11.1 governação das taxas de câmbio e dos limites**

**Mudanças marcadas no tempo.** Uma implementação a seguir a este modelo alteraria os métodos de taxa de câmbio e implementaria separadamente os parâmetros limite somente após um bloqueio de tempo público. Um caminho de emergência usaria um processo de autorização divulgado separadamente e incluiria um pôr do sol automático ou uma revisão.

**Prazos de aprovação.** O modelo propõe limiares de aprovação mais elevados para mudanças na base do índice de valor e mudanças globais de nível limite, limiares intermédios para mudanças de terceiros específicas do Fundo e limiares padrão para mudanças de taxa de rotina.

**Feeds publicados.** Uma implementação participante publicaria, para cada Fundo, as variáveis do índice na cadeia, as fontes ou médias do oráculo, a cadência de atualização, as janelas e limites limitados e os modos de falha ou as constantes seguras.

**Critérios de pausa de emergência.** Uma implementação participante declararia antecipadamente condições como uma interrupção do oráculo, alta utilização limite combinada com falhas de cumprimento, ou uma falha invariante, juntamente com verificações de currículo e requisitos de revisão pós-incidente.

**Exemplo de alimentação pública de índices para um Fundo e vale**

- **Símbolo:** Por exemplo, `Maize_50kg@IssuerY`.
- **Unidade de referência:** Uma unidade de índice (IUX).
- **Valor publicado:** 30.000 IUX.
- **Fonte:** mediana de fontes identificadas, tais como uma pesquisa de mercado local, boletim do ministério e linha de base de implementação.
- **Cadência de atualização:** Diariamente às 18:00 horas EAT, com bloqueio horário de 24 horas.
- **Modo de falha:** congelar no último valor válido, aplicar uma política de limite divulgada e fazer uma pausa após uma interrupção de 72 horas.
- **Racionalização:** Notas publicadas e um registo de alterações da atualização anterior.
- **Assinadores:** Endereços multisig divulgados e limiar de aprovação.

### **11.2 Manual de execução dos fundos de seguros proposto**

**Apenas design opcional.** O presente manual só se aplica a uma implementação que tenha expressamente adotado e financiado um fundo de seguros e publicado os eventos cobertos, os requerentes elegíveis, a entidade responsável, os ativos, os limites, as exclusões, os requisitos de evidência, o processo e os termos de regulamentação. Nem o actual CLC App nem o GEF fornecem cobertura simplesmente porque este desenho aparece no Livro Branco.

**Possíveis gatilhos.** Uma política adotada pode cobrir o incumprimento do emissor definido, um défice de reserva do Fundo ou uma perda de ponta ou de garantia. Um incidente técnico não se qualifica automaticamente; a política aplicável controlaria.

**Avaliação.** O órgão responsável reconciliaria os recibos de transações, os saldos de estoque, os títulos de garantia, os registos de apresentação de resíduos, as respostas dos emissores e outras provas necessárias, e depois publicaria um registro de incidentes em conformidade com a privacidade e a lei.

**Cascata de perdas ilustrativa.** Sempre que cada camada exista e se aplique legalmente, uma política pode utilizar: (1) títulos de emissores responsáveis ou participações de garantias → (2) reservas de nível de fundo → (3) um fundo de seguro de rede proposto → (4) uma redução temporária a uma reivindicação de cobertura opcional, somente quando os termos pré-existentes e a lei aplicável o autorizarem expressamente → (5) recuperação legal por fraude ou abuso comprovados.

Um ajustamento da cobertura não reduz o compromisso subjacente de um emissor com o vale ou altera um saldo na cadeia, a menos que as condições pré-existentes e a legislação aplicável válidas permitam expressamente esse resultado e que seja obtido o consentimento do titular requerido.

**Limites e exclusões.** A cobertura publicada definiria limites máximos, apresentações elegíveis, evidências, janelas de reivindicações, rotas ou eventos excluídos, restrições geográficas e o tratamento das reservas esgotadas. O pagamento pode ser igual a zero depois de atingidos os limites aplicáveis.

**Calendário de recuperação ilustrativo.** Se adotadas e publicadas:

1. Os créditos beneficiariam, em primeiro lugar, da obrigação emissor ou garante responsável, em seguida, das reservas de fundo aplicáveis e, em seguida, do fundo de seguro de rede proposto;
2. Qualquer redução a uma reivindicação de cobertura opcional seria limitada às condições de cobertura pré-existentes e à legislação aplicável autorizadas, até ao limite máximo de incidência publicado;
3. Um plano de recuperação poderia aplicar uma parte declarada do valor recuperado durante um período declarado, após o qual qualquer falha coberta restante se tornaria uma perda registada com um pós-mortem público; e
4. Cada decisão produziria um recibo com o incidente ID, os pedidos e vales afetados, a decisão, o plano de recuperação e a janela de recurso.

### **11.3 Quadro de garantia**

Esta secção distingue a responsabilidade do emissor, as proteções opcionais do Fundo e as garantias de terceiros. os Fundos podem competir em curadoria, termos e proteções expressamente oferecidas sem implicar que o CLC App, CPP, GEF ou qualquer rede mais ampla garanta automaticamente um vale.

**Responsabilidade do emissor de base**

- Cada vale é, em primeiro lugar, da responsabilidade do seu emissor. O emissor compromete-se a fornecer o bem, serviço ou equivalente em dinheiro legal declarado nos termos publicados.
- Os emissores publicariam quem pode apresentar o vale, o que significa o cumprimento, onde e quando está disponível, quais provas são necessárias e quais recursos são aplicáveis.
- Se um emissor não cumprir, o emissor é o principal responsável. As proteções de Fundo ou de rede só se aplicam quando adotadas, financiadas e divulgadas separadamente.

**Proteções opcionais para Fundos**

Um Gestor do Fundo pode optar por adicionar uma proteção estreitamente definida aos vales admitidos. Não é automático e precisaria identificar a parte responsável, o financiamento, os eventos elegíveis, os limites, as janelas, as evidências, as exclusões e as medidas correctivas nos metadados do Fundo e nos termos aplicáveis.

Os tipos de protecção ilustrativos incluem:

1. **Cobertura dos activos de reserva:** Após o não cumprimento verificado pelo emissor, a entidade responsável do Fundo paga um montante definido num ativo de reserva designado, sujeito ao seu limite máximo publicado e às reservas financiadas disponíveis.
2. **Janela de reversão:** Após um evento de qualificação, o Fundo oferece um caminho de swap limitado em tempo para o ativo aprovado anterior ou outro, sujeito a limites máximos e inventário. Esta é uma proteção de liquidez dependente do inventário, não uma promessa de que cada troca é reversível.
3. **Realização alternativa:** A parte responsável organiza um fornecedor de substituição aprovado dentro de um limite máximo de quantidade ou valor publicado.
4. **Proteção da banda de câmbio:** No caso de categorias de vales selecionadas, um Fundo oferece apenas o ajustamento de cobertura ou o recurso de reversão de swap indicado nos seus termos pré-existentes. Isto não reduz a obrigação subjacente do emissor de vale.

**Fontes de financiamento possíveis**

- **Obrigação do emissor:** Garantia depositada pelo emissor ou detida numa reserva divulgada e disponível após um evento coberto verificado.
- **Reserva de Fundo:** ativos controlados pela entidade responsável do Fundo e atribuídos às proteções que anuncia.
- **Obrigações de garantia de terceiros:** Garantia depositada por um garante externo identificado para emitentes, classes de vales ou eventos declarados.

A participação do garante seguiria os critérios de elegibilidade publicados, o tamanho das obrigações, os limites de concentração, a autoridade de decisão e as regras legais de execução.

**Processo de reclamações**

Uma política adotada definiria os factores desencadeáveis auditáveis, tais como um prazo de cumprimento não cumprido após a apresentação válida da resgate, a insolvência verificada do emissor, uma falha coberta ou de garantia, ou um estado de incidente formalmente declarado. Também se definiria:

- A forma como um participante abre uma reivindicação e fornece as provas de apresentação e cumprimento necessárias;
- que verifica os termos dos vales, as respostas dos emissores e os registos técnicos;
- A decisão e as janelas de recurso; e
- O caminho de pagamento autorizado, os ativos, os limites máximos e o recibo.

As receitas de recuperação provenientes de emissores, arbitragem ou aplicação da lei reabasteceriam as obrigações ou reservas aplicáveis de acordo com a política publicada antes de serem utilizadas para o acesso proposto à rede CLC.

**Requisitos de divulgação**

Para cada classe de Fundos e vales cobertos, a parte responsável publicaria:

- Se um garante estiver ausente, opcional ou exigido;
- Os limites máximos de quantidade e concentração das obrigações ou das reservas;
- Os tipos de proteção, os ativos, os limites, as janelas e as exclusões;
- Termos de apresentação, cumprimento, reclamação e recurso; e
- Uma declaração em linguagem simples de quem garante o que e o que não é garantido.

**Princípio de cura.** A Gestores de Fundos e as estruturas jurídicas ou de governação responsáveis são responsáveis pelas proteções que anunciam. Uma implementação compatível com o CPP pode fornecer padrões, registros ou políticas compartilhadas opcionais, mas nem o CLC nem o GEF garantem automaticamente vales ou Fundos.

### **11.4 Ferraduras anti-captura**

No âmbito do presente modelo, as seguintes ações críticas exigem o nível de aprovação mais elevado adotado e um longo prazo:

1. alteração da proposição de taxas, incluindo a sua cobertura e as prioridades das operações principais;
2. A alteração das raízes do registo canónico;
3. Mudanças no âmbito da cobertura, nos limites máximos dos créditos ou na autoridade de decisão;
4. A expansão dos poderes de pausa de emergência; ou
5. debilitar a forcabilidade, a transparência ou os compromissos sobre a soberania do Fundo estabelecidos neste documento.

### **11.5 Procedimento de bifurcação e saída**

Se a governação fosse capturada ou os valores se desviassem substancialmente, as comunidades, Gestores de Fundos e os operadores poderiam procurar sair forjando a camada de governação da rede. A continuidade dos Fundos e vales subjacentes dependeria dos contratos, chaves, interfaces, infraestrutura, serviços de terceiros e obrigações aplicáveis.

Um processo de saída pode:

1. **Publicar um instantâneo:** exportar os registos, vales, valores, limites e políticas de taxas selecionados, e depois publicar um hash de instantâneo assinado.
2. **Redistribuir os serviços de governação:** Implementar novas funções de registo, serviços de rotas e quaisquer módulos de taxas ou cobertura adotados sob uma nova estrutura responsável.
3. **Reinscrição:** permitir que a Gestores de Fundos se inscreva registrando os seus endereços do Fundo sob a nova raiz sem exigir que os titulares migrem vales funcionais.
4. **Clientes reconduzidos:** adicionar a nova raiz como um perfil de rede selecionável em SDKs e interfaces, com qualquer alteração padrão feita através do processo de governação divulgado.
5. **Gerenciamento de um período de ponte:** Manter rotas compatíveis onde são seguras e negar rotas que violem as regras do novo perfil.

O objetivo do projeto é que deixar um registo canônico não desative Fundos locais de outra forma funcionais. A continuidade real continua a depender da implementação; A federação é uma camada de descoberta e coordenação opt-in.
