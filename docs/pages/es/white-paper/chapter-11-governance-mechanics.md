## **11. Mecanismos de gobernanza**

Este capítulo propone una plantilla de gobernanza. No representa que el actual CLC App utilice la votación de tokens de gobernanza, los plazos, el seguro compartido, un proceso de reclamaciones o cualquier control descrito a continuación. Cada despliegue tendría que identificar a sus tomadores de decisiones, autoridades, contratos, procesos y políticas reales.

- **Valores constitucionales:** la protección de las personas, el cuidado del medio ambiente, la equidad, la reciprocidad, la no dominación y la resiliencia.
- **Tipos de propuestas:** cambios en las tarifas, límites y índices; mandatos de liquidez; Las inscripciones y las retiradas de los Fondos; las decisiones de cobertura opcional; y barandillas de parámetros.
- **Proceso responsable:** ingesta → evaluación → revisión del riesgo → aprobación → plazos cuando proceda → ejecución. La aprobación puede provenir de administradores, cooperativas, agencias públicas, federaciones, multisigas, votación en cadena u otra estructura divulgada y responsable.
- **Los umbrales de aprobación:** Parámetros por clase de acción, con umbrales más altos para cambios en el índice de valor, poderes de emergencia y otras acciones críticas.
- **Delegación:** la delegación facultativa con mandatos públicos, la divulgación de conflictos y la retirada.
- **Los interruptores de circuito:** Pausas de emergencia con criterios establecidos, operadores autorizados, condiciones de reanudación y post mortem requeridos.
- **Transparencia:** los cambios y flujos publicados, con pruebas separadas para la liquidación de swaps, el cumplimiento de los emisores, las reservas, la utilización de límites, el enrutamiento y los garantes.

**Gestión del registro.** Una implementación compatible con CPP- puede mantener registros de descubrimiento de vales, tokens y Fondos. Los controles autorizados pueden agregar, actualizar, suspender o eliminar las entradas del registro a través del proceso de gobernanza revelado de la implementación. La eliminación del registro afectará el descubrimiento y el enrutamiento a través de dicho registro; no borrará por sí mismo un token, no alterará el saldo de un titular, no cumplirá la obligación de un emisor ni deshabilitará un contrato de otra manera funcional.

Las normas de registro publicadas deben hacer que el estado sea condicional y pueden identificar repetidas incumplimientos, fraude o tergiversación, comportamiento contractual inseguro o violación persistente de los principios publicados como motivos para la suspensión o eliminación. Cuando sea factible, el proceso debe proporcionar un aviso, una oportunidad de recurso y una vía de recurso. La remoción de emergencia debe requerir un informe público de incidente y una revisión automática o la puesta de sol.

**Las listas están prohibidas.** En este modelo, un registro no admitiría:

1. instrumentos que financien o incentiven directamente la destrucción ecológica más allá de los límites acordados, la violencia o la utilización de armas, la extracción coercitiva o el abuso sistémico; o
2. una clase de vales que carece de términos claros de presentación y cumplimiento, responsabilidad y vías de reparación.

La lista prohibida sería versionada, auditable al público y cambiable únicamente a través del umbral de acción crítica adoptado y del bloqueo temporal, ilustrado como Q3 + T3 en el apéndice D.

### **11.1 Gestión de los tipos de cambio y de los límites**

**Cambios bloqueados en el tiempo.** Una implementación siguiendo esta plantilla cambiaría los métodos de tipos de cambio y los parámetros límite implementados por separado solo después de un bloqueo de tiempo público. Un camino de emergencia utilizaría un proceso de autorización revelado por separado e incluiría una puesta de sol automática o una revisión.

**Los umbrales de aprobación.** La plantilla propone umbrales de aprobación más elevados para los cambios en la base del índice de valor y los cambios globales en el nivel límite, umbrales intermedios para los cambios de terceros específicos del grupo y umbrales estándar para los cambios rutinarios en las tarifas.

**Feeds publicados.** Una implementación participante publicaría, para cada grupo, las variables del índice en cadena, las fuentes o medianas del oráculo, la cadencia de actualización, las ventanas y tapas límite y los modos de falla o constantes seguras.

**Criterio de pausa de emergencia.** Un despliegue participante declararía de antemano condiciones tales como una interrupción del oráculo, una utilización de alto límite combinada con fallos de cumplimiento o un fallo invariante, junto con controles de currículum y requisitos de revisión posterior al incidente.

**Ejemplo de alimentación pública de índices para un Fondo y un vale**

- **Símbolo:** por ejemplo, `Maize_50kg@IssuerY`.
- **Unidad de referencia:** Unidad de índice (IUX).
- **Valor publicado:** 30.000 IUX.
- **Fuente:** Mediano de fuentes identificadas, como una encuesta de mercado local, boletín del ministerio y línea de base de despliegue.
- **Cadencia de actualización:** Diariamente a las 18:00 horas EAT, con un bloqueo horario de 24 horas.
- **Modo de falla:** congelar en el último valor válido, aplicar una política de límite revelada y hacer una pausa después de una interrupción de 72 horas.
- **Racionalización:** las notas publicadas y un registro de los cambios de la actualización anterior.
- **Los firmantes:** las direcciones multisig y el umbral de aprobación reveladas.

### **11.2 Libro de trabajo de los fondos de seguros propuesto**

**Sólo diseño opcional.** El presente manual se aplica únicamente a un despliegue que haya adoptado y financiado expresamente un fondo de seguros y haya publicado los eventos cubiertos, los solicitantes elegibles, la entidad responsable, los activos, los límites, las exclusiones, los requisitos de evidencia, el proceso y los términos de gobierno. Ni la actual CLC App ni la GEF proporcionan cobertura simplemente porque este diseño figura en el Libro Blanco.

**Posibles desencadenantes.** Una política adoptada podría cubrir la falta de cumplimiento de un emisor definido, un déficit de reserva del grupo o una pérdida de puente o garantía. Un incidente técnico no se califica automáticamente; la política aplicable controlaría.

**La evaluación.** El organismo responsable conciliaría los recibos de transacciones, los saldos de inventario, los bonos de garantía, los registros de presentación de la redención, las respuestas de los emisores y otras pruebas requeridas, y luego publicaría un registro de incidentes coherente con la privacidad y la ley.

**Una cascada de pérdida ilustrativa.** Cuando cada capa exista y se aplique legalmente, una póliza podría utilizar: (1) bonos de emisor responsable o participaciones de garantía → (2) reservas a nivel de fondo → (3) un fondo de seguro de red propuesto → (4) una reducción temporal a un reclamo de cobertura opcional, solo cuando las condiciones preexistentes y la ley aplicable lo autoricen expresamente → (5) recuperación legal por fraude o abuso comprobado.

Un ajuste de cobertura no reducirá el compromiso subyacente de un emisor con el vale ni alterará un saldo en cadena a menos que las condiciones preexistentes válidas y la legislación aplicable lo permitan expresamente y que se obtenga el consentimiento del titular requerido.

**Los límites y las exclusiones.** La cobertura publicada definiría límites máximos, presentaciones elegibles, pruebas, ventanas de reclamación, rutas o eventos excluidos, restricciones geográficas y el tratamiento de las reservas agotadas. Un pago podría ser cero después de que se alcancen los límites aplicables.

**Un calendario de recuperación ilustrativo.** Si se adopta y se publica:

1. los créditos se obtendrían primero del emisor o garantía responsable, luego de las reservas del grupo aplicables, y luego del fondo de seguros de red propuesto;
2. cualquier reducción a una reclamación de cobertura opcional se limitaría a lo que permitan las condiciones de cobertura preexistentes y la legislación aplicable, hasta el límite máximo de incidencia publicado;
3. un plan de recuperación podría aplicar una proporción declarada del valor recuperado durante un período determinado, después de lo cual cualquier déficit cubierto restante se convertiría en una pérdida registrada con una post mortem pública; y
4. cada decisión presentaría un recibo con el incidente ID, las reclamaciones y vales afectados, la decisión, el plan de recuperación y la ventana de recurso.

### **11.3 Marco de garantía**

En esta sección se distingue la responsabilidad del emisor, las protecciones opcionales del grupo y las garantías de terceros. los Fondos pueden competir en la curación, los términos y las protecciones expresamente ofrecidas sin implicar que el CLC App, CPP, GEF o cualquier red más amplia garantice automáticamente un vale.

**Responsabilidad del emisor de referencia**

- Cada vale es, ante todo, responsabilidad de su emisor. El emisor se compromete a proporcionar el bien, servicio o equivalente en efectivo legal declarado en sus términos publicados.
- Los emisores publicarían quién puede presentar el vale, qué significa cumplimiento, dónde y cuándo está disponible, qué pruebas se requieren y qué remedios se aplican.
- Si un emisor no cumple, el emisor es el principal responsable. Las protecciones del Fondo o de la red solo se aplicarán cuando se adopten, financien y divulguen por separado.

**Protecciones opcionales de los Fondos**

Un Responsable del Fondo podrá optar por añadir una protección estrechamente definida a los vales admitidos. No es automático y necesitaría identificar a la parte responsable, la financiación, los eventos elegibles, los límites máximos, las ventanas, la evidencia, las exclusiones y los recursos en los metadatos del grupo y en los términos aplicables.

Los tipos de protección ilustrativos incluyen:

1. **Cobertura de activos de reserva:** Tras la no cumplimiento verificado por el emisor, la entidad responsable del grupo pagará un importe definido en un activo de reserva designado, sujeto a su límite máximo publicado y a las reservas financiadas disponibles.
2. **Ventana de cambio hacia atrás:** Después de un evento de calificación, el grupo ofrece una vía de swap limitada en el tiempo hacia el activo previo o otro activo aprobado, sujeto a límites máximos e inventario. Esta es una protección de liquidez dependiente del inventario, no una promesa de que cada swap es reversible.
3. **Cumplimiento alternativo** la parte responsable organizará un proveedor de sustituto autorizado dentro de un límite de cantidad o valor publicado.
4. **Protección por banda de cambio:** En el caso de las categorías de vales seleccionadas, un grupo solo ofrece el ajuste de cobertura o el remedio de swap-back indicado en sus términos preexistentes. Esto no reduce la obligación subyacente del emisor de vales.

**Fuentes de financiación posibles**

- **Obligación del emisor:** las garantías depositadas por el emisor o mantenidas en una reserva divulgada y disponibles después de un evento cubierto verificado.
- **Reserva del Fondo:** activos controlados por la entidad responsable del grupo y asignados a las protecciones que anuncia.
- **Obligaciones de garantía de terceros:** garantía depositada por un garante externo identificado para emisores, clases de vales o eventos declarados.

La participación del garante seguiría los criterios publicados de elegibilidad, el tamaño de los bonos, los límites de concentración, la autoridad de decisión y las normas de aplicación legal.

**Proceso de reclamaciones**

Una política adoptada definiría los factores desencadenantes auditables, como un plazo de cumplimiento que no se cumpla después de la presentación de la redención válida, la insolvencia verificada del emisor, un puente cubierto o un incumplimiento de las garantías o un estado de incidencia declarado formalmente. También definiría:

- la forma en que un participante abre un reclamo y proporciona las pruebas de presentación y cumplimiento requeridas;
- que verifique los términos de los bonos, las respuestas de los emisores y los registros técnicos;
- las ventanas de decisión y recurso; y
- el camino de pago autorizado, los activos, los límites máximos y el recibo.

Los ingresos de la recuperación de los emisores, el arbitraje o la aplicación de la ley reponerían los bonos o reservas aplicables de acuerdo con la política publicada antes de ser utilizados para el acceso de intercambio de la red CLC.

**Las divulgaciones necesarias**

Para cada clase de Fondos y vales cubiertos, la parte responsable publicaría:

- si un garante está ausente, facultativo o requerido;
- el tamaño de los bonos o las reservas y los límites máximos de concentración;
- los tipos de protección, los activos, los límites, las ventanas y las exclusiones;
- los plazos de presentación, cumplimiento, reclamación y recurso; y
- Una declaración en lenguaje sencillo de quién garantiza qué y qué no está garantizado.

**Principio de curación.** Responsables de Fondos y las estructuras jurídicas o de gobernanza responsables son responsables de las protecciones que anuncian. Una implementación compatible con CPP- puede proporcionar estándares, registros o políticas compartidas opcionales, pero ni CLC ni GEF garantizan automáticamente vales o Fondos.

### **11.4 Barreras de protección contra capturas**

En el marco de esta plantilla, las siguientes acciones críticas requerirían el nivel de aprobación más alto adoptado y un largo plazo:

1. modificar la cascada de honorarios propuesta, incluida su cobertura y las prioridades de las operaciones centrales;
2. cambios en las raíces del registro canónico;
3. cambios en el alcance de la cobertura, en los límites máximos de las reclamaciones o en la autoridad de decisión;
4. ampliar las facultades de pausa de emergencia; o
5. debilitar la forcabilidad, la transparencia o los compromisos de soberanía de la Comunidad establecidos en el presente documento.

### **11.5 Procedimiento de forja y salida**

Si se captura la gobernanza o los valores se derivan sustancialmente, las comunidades, Responsables de Fondos, y los operadores podrían buscar salir forjando la capa de gobernanza de red. La continuidad de los fondos y vales subyacentes dependería de los contratos, claves, interfaces, infraestructura, servicios de terceros y obligaciones aplicables.

Un proceso de salida podría:

1. **Publicar una instantánea:** exportar los registros, vales, valores, límites y políticas de tarifas seleccionados, y luego publicar un hash de instantánea firmado.
2. **Redistribución de servicios de gobernanza:** desplegar nuevas raíces de registro, servicios de rutas y cualquier módulo de tarifas o cobertura adoptado en virtud de una nueva estructura responsable.
3. **Registro de nuevo:** permitir que Responsables de Fondos se inscriba registrando sus direcciones de grupo bajo la nueva raíz sin exigir que los titulares migren vales funcionales de otro modo.
4. **Clientes de nueva designación:** añadir la nueva raíz como perfil de red seleccionable en SDKs e interfaces, con cualquier cambio predeterminado realizado a través del proceso de gobernanza divulgado.
5. **Gestionar un período de puente:** mantener rutas compatibles cuando sean seguras y negar rutas que violan las reglas del nuevo perfil.

El objetivo del diseño es que dejar un registro canónico no deshabilite los Fondos locales de otra manera funcionales. La continuidad real sigue dependiendo del despliegue; La federación es una capa de descubrimiento y coordinación opt-in.
