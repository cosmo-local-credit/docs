## **10. Quadro abrangente de riscos**

Este quadro proposto separa dez categorias de risco. Para cada categoria, identifica possíveis indicadores, controles, testes de stress e um apetite indicativo de risco. Estas são recomendações de projeto, não afirmações de que todos os controles são implantados, eficazes ou suficientes. Os limites, as reservas, as garantias, o acompanhamento, a cobertura e a governação não podem eliminar as perdas.

### **10.1 Protocolo e risco de contratos inteligentes**

- **Ameaças:** erros de contrato, erros de atualização, falhas de dependência e limites ou taxas mal configurados.
- **Indicadores:** Resultados de auditoria, movimentos de inventário inexplicados, falhas invariáveis e reversões incomuns.
- **Possibilidades de controlo:** Auditores independentes; Funções privilegiadas mínimas; Controladores de proxy e de dependência divulgados; atualizações marcadas em tempo; Monitoramento na cadeia; Pausas de incidente com autoridade e critérios publicados; e um caminho de migração testado.
- **Testes de estresse:** dependências de quotas ou limites indisponíveis, deficiências de estoque, contratos interrompidos e rádio de tráfego.
- **O apetite pelo risco:** Baixo antes de escalar as obrigações pendentes ou o volume de swap.

### **10.2 Riscos económicos e de mercado**

- **Ameaças:** Inventário fino, fluxos unilaterais, retiradas rápidas e referências de preços manipuladas ou obsoletas.
- **Indicadores:** Uma utilização elevada do balanço de tokens, aumento das diferenças de cotações, rejeição frequente dos limites e inventário concentrado.
- **Possibilidades de controlo:** Capas atuais do saldo de tokens do Fundo; Propostos limites de rotação ou de contabilidade; Reservas adotadas separadamente; Referências de preços protegidas; Exclusões de rotas; e taxas ou limites de incidentes limitados em tempo.
- **Testes de estresse:** Grandes movimentos de preços de referência, aumentos de apresentação, pedidos de retirada e interrupções de fontes de dados.
- **O apetite pelo risco:** moderar apenas dentro dos parâmetros publicados e da capacidade de suportar perdas financiada.

### **10.3 Risco do emissor e do vale**

- **Ameaças:** Emissão fora da capacidade de cumprimento, incumprimento do emissor, termos enganosos e janelas de disponibilidade ou apresentação mal especificadas.
- **Indicadores:** a diminuição das taxas de cumprimento confirmadas, o envelhecimento dos vales pendentes, as queixas não resolvidas e a exposição concentrada a um emissor.
- **Possibilidades de controlo:** A devida diligência do emissor; vale claro e condições da oferta; Limites de emissão ou de admissão; obrigações ou garantias financiadas de forma independente; Relatórios de coorte; e revisão responsável do registo.
- **Testes de estresse:** Insolvência do emissor, choques regionais da produção, reclamações falsificadas e atrasos prolongados no cumprimento.
- **O apetite pelo risco:** A concentração do emissor ou da oferta aumenta.

### **10.4 Risco de apresentação de resgate e cumprimento**

- **Ameaças:** apresentação inválida ou duplicada, capacidade insuficiente da emissora, estoques, falhas logísticas e falta de registos de quitação.
- **Indicadores:** Latência no cumprimento dos pedidos, apresentações falhadas ou contestadas, estoques, atrasos de bilhetes e unidades cumpridas sem quitação.
- **Possibilidades de controlo:** Procedimentos de apresentação e cumprimento publicados; Informações sobre a capacidade; locais de realização múltiplos, se for lícito; padrões de prova; Caminhos de reclamação e recurso; e registos que separam a apresentação, o cumprimento e a quitação.
- **Testes de estresse:** volume de apresentação de duas a quatro vezes, interrupções das instalações, falhas dos fornecedores e tentativas de utilização duplicadas.
- **O apetite pelo risco:** Em caso de produtos essenciais, participantes vulneráveis ou longas janelas de realização.

### **10.5 Risco de governação**

- **Ameaças:** Captura de administrador ou controlador, mudanças de parâmetros apressadas, conflitos de interesses, poderes técnicos ocultos e apelos fracos.
- **Indicadores:** Autoridade concentrada, ações de emergência frequentes, mudanças inexplicáveis de política e repetidas reincidências.
- **Possibilidades de controlo:** Informações sobre o papel e o poder; Os limites de aprovação proporcionais; Horários; Conflitos e regras de recusa; registos públicos de alterações; Recursos; Sunsets automáticos de energia de emergência; e forcabilidade.
- **Testes de estresse:** Propostas adversárias, perda de assinantes, tentativas de suborno e captura por acumulação ou controlo delegado.
- **O apetite pelo risco:** baixo para ações que afetem métodos de valor, retiradas, raízes do registo, cobertura ou poderes de emergência.

Para uma futura implementação do token de governação CLC proposto, o teste de captura incluiria acumulação seguida de tentativas de redirecionamento de orçamentos, enfraquecimento dos padrões de registo, aprovação de mandatos de partes relacionadas ou esgotamento da cobertura financiada. As possibilidades de salvaguarda incluem bloqueios de governação, limiares mais elevados para ações críticas, atraso na execução, monitorização transparente das delegações e concentrações, um processo de incidente e um procedimento credível de saída e saída. Nenhum deles é representado como implantado simplesmente aparecendo aqui.

### **10.6 Riscos legais e de conformidade**

- **Ameaças:** um vale, um serviço, uma promoção ou um ativo de governação que receba um tratamento regulamentar inesperado; falhas na proteção dos consumidores; lavagem de dinheiro ou exposição a sanções; e restrições transfronteiriças.
- **Indicadores:** Flags de jurisdição, inquéritos do regulador, reclamações, partidas restritas e divergência entre o comportamento anunciado e o comportamento real.
- **Possibilidades de controlo:** Revisão por classe e jurisdição; Informações precisas; Interfaces geofundadas; Verificações proporcionais de elegibilidade ou de certificação; controlos de promoção; registos de autoridade e de aceitação; E as partes responsáveis claras.
- **Testes de estresse:** Uma restrição jurisdicional, a terminação do prestador, a reclassificação obrigatória e uma ordem de pausa de um recurso ou classe de ativos.
- **O apetite pelo risco:** Baixo; restringir ou suspender a atividade não apoiada.

#### 10.6.1 Posicionamento jurídico e tratamento dos tokens propostos

1. **Infraestrutura verificável:** Os contratos Protocol v1.1.0 são compatíveis com EVM- e a sua origem é publicada nos termos das licenças e das exceções de terceiros identificadas no repositório do Protocolo. A publicação permite uma revisão, mas não prova por si só uma auditoria, uma implementação segura ou a conformidade legal. Cada implementação deve divulgar a sua versão de código, a proveniência da construção, os endereços, os poderes do controlador e o status da auditoria.
2. **Posição do símbolo proposto:** Neste projeto, o token de governação CLC proposto coordenaria a governação e o acesso à política. Não criaria dividendos, partilha de lucros, direitos residuais ou garantia de valor ou liquidez.
3. **Ativos propostos relacionados:** Uma política implementada separadamente poderá permitir o bloqueio do token de governação CLC proposto para a moeda stCLC e poderá autorizar o sCLC de escala de época. Os termos adotados teriam de definir exatamente os seus direitos, limites, expiração, transferência e tratamento.
4. **Comunicações:** Os materiais para qualquer implementação proposta de tokens de governação CLC, stCLC ou sCLC não devem prometer lucro, valorização, rendimento passivo ou acesso garantido.
5. **Controlos de competência:** Uma implementação pode exigir geofencing de interface, certificações para classes restritas, limites de promoção, revisão específica de ativos ou controles que interrompam um recurso proposto.
6. **Aviso do participante:** Os termos adoptados explicariam quando o acesso pode ser reduzido ou desativado por razões legais, operacionais ou de risco e se aplica qualquer compensação ou recurso.

### **10.7 Riscos de encaminhamento e de cross-domain**

- **Ameaças:** Execução parcial, saltos obstruídos, explorações de ponta ou escrow, cotações obsoletas, inflação de caminho e execução antecipada das alterações de valor anunciadas.
- **Indicadores:** Taxas de expiração de rotas, atrasos de créditos, diferenças de cotação para execução, saltos desnecessários repetidos e incidentes de ponte.
- **Possibilidades de controlo:** Execução atômica, quando disponível; conservadoraHTLCou temporadas de depósito; políticas de rota e contraparte; limites de nível de rota; mapeamento determinista de cotações a receitas; e operadores de serviços responsáveis.
- **Testes de estresse:** uma parada de ponte, reorganização de cadeia, interrupção de dependência e um salto falhado numa rota multi-hop proposta.
- **O apetite pelo risco:** de baixa a moderada apenas para dependências identificadas e monitoradas.

### **10.8 Risco de custódia e gestão de chaves**

- **Ameaças:** Chaves perdidas ou comprometidas, conluio de assinantes, recuperação não clara ou autoridade do administrador.
- **Indicadores:** As assinaturas anómalas, as alterações do controlador, as rotações falhadas e as retiradas incomuns.
- **Possibilidades de controlo:** Autorização de múltiplos signos ou limiares; Chaves suportadas por hardware; separação de funções; rotação de sinais; Inventários dos controladores públicos; limites de retirada monitorizados; e procedimentos de recuperação testados.
- **O apetite pelo risco:** Baixo.

### **10.9 Reputação e risco social**

- **Ameaças:** Reclamações enganosas, incentivos prejudiciais, queixas inacessíveis, experiências de preenchimento pobres, falhas de privacidade e proteções que favorecem os insiders.
- **Indicadores:** Reclamações por coorte, litígios não resolvidos, tendências de desempenho dos emissores, concentração de benefícios ou perdas e feedback da comunidade.
- **Possibilidades de controlo:** Divulgação em linguagem simples; Caminhos de reclamação e correção; Evidências acessíveis; Relatórios transparentes; Revisão dos incidentes; e sanções proporcionais por falsas declarações.
- **O apetite pelo risco:** - a redução das taxas de incidência, com especial atenção para as comunidades afectadas e os participantes vulneráveis.

### **10.10 Risco de concentração e fragmentação**

- **Ameaças:** Dependência de um pequeno número de emissores, fundos, controladores, fornecedores, redes ou forças incompatíveis.
- **Indicadores:** Medidas de concentração por emissor, Fundo, inventário, controlador ou prestador de serviços; Falhas de rota entre aglomerados; e dependências individuais críticas.
- **Possibilidades de controlo:** Os limiares de concentração publicados; múltiplos operadores responsáveis; normas compatíveis; Registros independentes; Procedimentos de saída testados; e interoperabilidade segura.
- **Testes de estresse:** Perda da maior emissora, Fundo, operador, fornecedor ou raiz de registro.
- **O apetite pelo risco:** Específicos para a implementação e divulgados, com limites mais rígidos para os serviços essenciais ou dependências insubstituíveis.
