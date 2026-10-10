## **5. De Fundos isolados a uma rede federada**

O Protocol v1.1.0 atual suporta a execução direta através de um `SwapPool` e fornece uma citação apenas `SwapRouter`. Não executa rotas multi-hop, HTLCs, rotas de custódia, rede de lotes ou compensação transnacional.

Este capítulo propõe como as Fundos governados independentemente poderiam coordenar sem renunciar às suas próprias regras de admissão, avaliação, limite, taxa, inventário, autorização e governação.

### **5.1 Medidas separadas de intercâmbio e de cumprimento**

A Federação pode melhorar o acesso ao inventário, mas não irá fundir o vale e trocar ciclos de vida. Qualquer aplicação mediria estes acontecimentos separadamente:

1. é indicada uma rota;
2. um ou mais swaps de fundo executar e liquidar na cadeia;
3. Um titular apresenta unidades de vale ao emissor;
4. O emissor cumpre o compromisso; e
5. As unidades satisfeitas são descarregadas.

Mais rotas citadas ou executadas não provam mais cumprimento. Os relatórios indicarão a coorte, o período, os ativos, o método de avaliação e o timestamp, as exclusões, as correções e as provas fora da cadeia exigidas no apêndice C.

**Rota ilustrativa:** Uma escola tem vales de milho mas precisa de vales de transporte. Um serviço de rota identifica os inventários do Fundo compatíveis. A execução seria bem-sucedida somente se cada salto autorizado separadamente permanecesse dentro de seus limites de citação, limites, taxas, inventário e política. Os swaps resultantes não provariam que qualquer um dos emissores cumprisse posteriormente os seus compromissos em matéria de vales.

### **5.2 Serviços de roteamento e reequilíbrio propostos**

Um futuro serviço de rotas poderia apoiar duas actividades distintas.

**Execução iniciada pelo participante.** Tendo em conta os recursos de entrada e saída, uma quantidade e as restrições dos utilizadores, o serviço poderia identificar um caminho e preparar a execução. Cada salto teria sua própria Fundo responsável, cotação, autorização, taxas, limites, inventário e recibo. Batches atômicos, HTLCs e custódia são possíveis opções futuras de execução, não o comportamento atual do Protocolo.

**Opt-in Fundo reequilíbrio.** O Gestores de Fundos poderia publicar metas de inventário, contrapartes autorizadas, classes de ativos, limites de desvio de cotações e limites por período. Um serviço responsável poderia procurar ciclos ou cadeias compatíveis e executar apenas as intenções autorizadas.

O reequilíbrio seria uma opção. Um fundo pode permitir rotas de participantes ao mesmo tempo em que recusa um reequilíbrio de saída, ou pode permitir apenas ativos, contrapartes e montantes selecionados. Cada salto executado produziria um recibo, e quaisquer taxas de serviço seriam divulgadas separadamente das taxas de Fundo e protocolo.

#### **5.2.1 Confederação e interoperabilidade**

As implementações independentes poderiam operar os seus próprios registros, interfaces, serviços de rotas e perfis de políticas, ao mesmo tempo em que escolhessem padrões de dados e recepção compatíveis. A execução transversal continuaria a depender da implementação.

Um perfil compatível:

- Identificar as suas raízes de registo, os operadores de serviços, os responsáveis pelo tratamento e os termos aplicáveis;
- divulgar as contrapartes, activos, adaptadores e rotas autorizadas e negadas;
- aplicar as autorizações, limites, taxas e restrições de inventário de cada Fundo participante;
- Preservar provas de cotação a recepção per-hop; e
- Permitir que as Fundos de outra forma funcionais deixem ou selecionem outro registo sem eliminar os saldos ou as obrigações do emissor.

A compatibilidade pode aumentar os caminhos de intercâmbio disponíveis e reduzir a dependência de um registo ou operador. Não responsabiliza a rede, a CLC App, a GEF ou outro Fundo pelo cumprimento de um emissor.

### **5.3 Modelo proposto de rede e taxas de serviço**

A Protocol v1.1.0 atual cobra uma taxa de fundo e, quando configurada, uma taxa adicional de protocolo em uma troca direta de fundo. As taxas atuais continuam a ser distintas.

Um programa futuro pode receber separadamente:

1. a) **comissão de rede**, definido como uma parte declarada das taxas cobradas pelas Fundos participantes; e
2. a) **Taxa de roteamento ou de serviço**, cobrado por um serviço futuro identificado.

A taxa de rede proposta não é uma percentagem adicional aplicada ao montante total do swap depois de já ter sido calculada a taxa do Fundo. Para Fundo `p`:

τ_p = f_p · r_p

onde `f_p` é a taxa da taxa de fundo e `r_p` é a parte proposta dessa taxa de fundo atribuída ao programa de rede.

Para um período medido:

- **Taxas brutas do Fundo** são a soma das taxas efetivas cobradas por cada Fundo;
- **Receitas de rádio de rede** São as participações declaradas dessas taxas cobradas;
- **Receitas das taxas de serviço** As taxas de roteamento ou de serviço são cobradas separadamente; e
- **receitas das taxas do programa** receitas de rede iguais mais receitas de taxas de serviço.

Nenhuma categoria é contada duas vezes. As taxas actuais do protocolo não são incluídas, a menos que uma política adoptada separadamente redirecione legalmente as receitas reais das taxas do protocolo para o futuro programa.

Para uma aproximação agregada, deixe:

- `Q_swap` é o valor dos swaps de fundo executados para a coorte e período definidos; e
- `τ` é a taxa efetiva do rake de rede proposto e as taxas de serviço identificadas separadamente sobre o valor do swap executado.

Então:

F ≈ τ · Q_swap

Esta é uma aproximação analítica, não uma promessa de receita. Cada entrada requer uma coorte, período, unidade, marca de tempo de avaliação, exclusões e política de correcção especificadas.

#### **5.3.1 Receitas em dinheiro elegíveis e em espécie**

As taxas podem chegar em ativos funcionais elegíveis para liquidação ou em vales e outros ativos em espécie. Os recibos em espécie não podem pagar automaticamente as despesas em dinheiro ou os créditos de cobertura. Qualquer troca ou conversão exigiria autoridade, inventário disponível, locais divulgados, limites e execução real.

Deixe `χ` ser a parte realçada das receitas de taxas que é elegível em dinheiro após restrições de política, conversões falhadas e deslizamento. Os recibos utilizáveis em dinheiro são:

F_cash ≈ χ · F

O orçamento e a análise de equilíbrio utilizariam o `F_cash` realizado, e não as taxas brutas cotadas ou o valor nominal do inventário em espécie. Um programa futuro relataria as taxas brutas do Fundo, as receitas da rede, as taxas de serviço, a composição dos ativos, os resultados da conversão e as receitas utilizáveis em dinheiro separadamente.

### **5.4 Programas de liquidez propostos**

Um futuro programa de liquidez documentado separadamente poderá atribuir ativos a Fundos designados ou serviços de roteamento. Os contratos `SwapPool` atuais não emitem ações do Fundo nem criam automaticamente direitos de reembolso, retirada, recompensa, governação ou lucro.

Qualquer programa publicaria:

- A entidade responsável e a entidade participante Gestores de Fundos;
- Ativos contribuídos e se a transferência é reembolsável, retirável, doada ou dotada;
- Disposições de custódia e controlo técnico;
- Utilizações permitidas, limites, bloqueios, portas de retirada e atribuição de perdas;
- A elegibilidade das taxas ou dos incentivos e se o montante pode ser zero;
- Relatórios, conflitos, reclamações e recursos; e
- Migração, terminação e tratamento dos activos e obrigações restantes.

Os riscos materiais incluem inventários difíceis de trocar ou de cumprir, baixa elegibilidade de caixa, incumprimento do emissor, falhas de contrato ou de fornecedor, alterações de governação e restrições à saída. Os limites, as reservas, os recibos e os painéis de controlo podem reduzir ou revelar certos riscos; Não eliminam as perdas.

Para uma métrica analítica ex-post, deixe:

- `ϕ` é a fração realçada das receitas das taxas do programa atribuídas nos termos adoptados pelo programa; e
- `K` é o valor medido dos ativos abrangidos pelo programa de acordo com um método indicado.

Então:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Esta métrica descreve o fluxo de taxas realizado por ativo do programa medido. Não é um APY, uma previsão, um dividendo ou um retorno garantido. Os relatórios manterão separados o volume de troca, a apresentação da resgate, o cumprimento do emissor, a quitação, a duração da detenção, as perdas, as retiradas e os recibos de taxas.
