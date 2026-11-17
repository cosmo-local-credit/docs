# 5. De Fondos aislados a una red federada

Protocol v1.1.0 admite la ejecución directa mediante un `SwapPool` y proporciona un `SwapRouter` Solidity que solo calcula cotizaciones. La CLC App y CLC Core de producción coordinan rutas en la misma cadena iniciadas por los participantes y formadas por hasta tres Fondos, preparando un solo lote firmado para la billetera Calibur. Los contratos no ejecutan por sí mismos una ruta de varios pasos y el flujo actual de la CLC App y CLC Core no proporciona HTLC intercadena, rutas de depósito en garantía, reequilibrio automático de Fondos, compensación por lotes ni compensación entre redes.

Este capítulo explica la ruta actual de los participantes y la distingue de la coordinación propuesta que requeriría nueva autoridad sobre los Fondos. En ambos casos, los Fondos independientes conservan sus propias reglas de admisión, valoración, límites, comisiones, inventario, autorización y gobernanza.

## **5.1 Medidas separadas de intercambio y cumplimiento**

El enrutamiento puede mejorar el acceso al inventario, pero no fusiona los ciclos de vida del vale y del intercambio. Las mediciones deben mantener estos eventos separados:

1. se menciona una ruta;
2. una o más operaciones de swap de fondo se ejecutarán y se liquidarán en cadena;
3. un titular presente a la emisora unidades de vale;
4. el emisor cumple el compromiso; y
5. las unidades cumplidas se descargan.

Más rutas citadas o ejecutadas no demuestran mayor cumplimiento. Los informes indicarían la cohorte, el período, los activos, el método de valoración y el sello de tiempo, las exclusiones, las correcciones y las pruebas fuera de la cadena requeridas en el apéndice C.

**Ruta ilustrativa:** Una escuela tiene vales de maíz, pero necesita vales de transporte. CLC Core puede identificar inventarios compatibles de los Fondos, cotizar el camino seleccionado en un bloque fijado y preparar los llamados limitados para la billetera de la escuela. La ejecución solo tiene éxito si cada paso respeta los límites de su cotización, sus límites, comisiones, inventario, comportamientos admitidos y política. Los intercambios resultantes no prueban que ninguno de los emisores haya cumplido después sus compromisos relativos a los vales.

## **5.2 Enrutamiento actual de los participantes y reequilibrio propuesto**

Dos actividades requieren autoridad diferente.

**Ejecución actual iniciada por el participante.** Dados unos vales de entrada y salida y un importe, CLC Core estima los caminos a partir de los activos admisibles del participante. Para la ruta seleccionada, lee los Fondos en un mismo bloque fijado, produce una cotización autorizada, simula el lote completo y prepara tres llamados por paso: poner a cero la autorización, conceder la autorización y llamar de forma limitada a `SwapPool.withdraw`. El participante firma y el relé envía una sola transacción Calibur en la misma cadena con `revertOnFailure` activado. Si falla un llamado, se revierten todos los llamados de la ruta. La CLC App agrupa la transacción y la liquidación de cada paso en un solo recibo.

Cada paso conserva su propio Fondo responsable, datos de cotización, autorización, comisiones, límites, inventario y evento de liquidación. La CLC App actual no añade una comisión independiente por el servicio de enrutamiento. El flujo actual admite billeteras EOA o Calibur compatibles con la CLC App, pero no billeteras Safe ni otras billeteras de contrato.

**Reequilibrio voluntario de Fondos.** Los Responsables de Fondos podrían publicar objetivos de inventario, contrapartes permitidas, clases de activos, límites de desviación de cotizaciones y límites por periodo. Un servicio responsable podría buscar ciclos o cadenas compatibles y ejecutar solo las intenciones autorizadas.

El reequilibrio sería voluntario. Un Fondo puede permitir rutas ordinarias de participantes sin autorizar a un servicio a mover inventario para reequilibrarlo. Un mandato futuro podría autorizar solo determinados activos, contrapartes e importes. Cada paso ejecutado produciría un recibo y cualquier comisión de servicio se publicaría por separado de las comisiones del Fondo y del protocolo.

La ejecución intercadena mediante HTLC o depósito en garantía también es distinta del lote atómico actual en la misma cadena. Requeriría adoptar reglas sobre plazos, cancelación, controladores, recuperación y riesgo residual.

### **5.2.1 Confederación y interoperabilidad**

Las implementaciones independientes pueden operar sus propios registros, interfaces, servicios de rutas y perfiles de políticas mientras eligen datos compatibles y estándares de recepción. La aplicación pública actual utiliza su perfil de servicio y registro configurado. La ejecución de perfiles cruzados sigue dependiendo del despliegue.

Un perfil compatible:

- identificar sus raíces de registro, operadores de servicios, responsables del tratamiento y términos aplicables;
- divulgar las contrapartes, activos, adaptadores y rutas permitidas y rechazadas;
- aplicar las autorizaciones, límites, tarifas y restricciones de inventario de cada grupo participante;
- preservar las pruebas de cotización a recepción por punto; y
- permitir que los grupos funcionales de otra manera abandonen o seleccionen otro registro sin borrar los saldos o las obligaciones del emisor.

La compatibilidad puede aumentar las vías de intercambio disponibles y reducir la dependencia de un registro o operador. No responsabiliza a la red, CLC App, GEF ni a otro grupo por el cumplimiento de un emisor.

## **5.3 Modelo propuesto de red y tarifa de servicio**

La Protocol v1.1.0 actual cobra una cuota de fondo y, cuando se configura, una cuota adicional de protocolo en un swap directo de fondo. Las tasas actuales siguen siendo distintas.

El intercambio enrutado de producción aplica esas comisiones actuales de forma independiente en cada paso y las detalla en la cotización y el recibo. Actualmente no añade una comisión independiente por el servicio de enrutamiento.

Un programa futuro podría recibir por separado:

1. de un **comisión de red**, definido como una cuota declarada de las tasas del grupo cobradas por los grupos participantes; y
2. de un **tarifas de enrutamiento o servicio**, cobrado por un servicio futuro identificado.

El pago de red propuesto no es un porcentaje adicional aplicado al importe total del swap después de haber contado ya la cuota del grupo. Para el grupo `p`:

τ_p = f_p · r_p

donde `f_p` es la tasa de la cuota de fondo y `r_p` es la proporción propuesta de dicha cuota de fondo asignada al programa de red.

Para un período medido:

- **Comisiones brutas del Fondo** son la suma de las tasas reales recogidas por cada grupo;
- **recibos de reloj de red** son las cuotas declaradas de las tasas cobradas;
- **recibos de honorarios de servicio** se cobran por separado las tarifas de enrutamiento o de servicio; y
- **recibos de los honorarios del programa** recibos iguales de reloj de red más recibos de honorarios de servicio.

Ninguna categoría se cuenta dos veces. Las tarifas actuales del Protocolo no se incluyen a menos que una política adoptada por separado redirige legalmente los recibos reales de las tarifas del Protocolo al programa futuro.

Para una aproximación agregada, permita:

- `Q_swap` será el valor de los swaps de grupo ejecutados para la cohorte y el período definidos; y
- `τ` será la tasa efectiva de la cuota de red propuesta y las tarifas de servicio separadamente identificadas sobre ese valor de swap ejecutado.

Entonces:

F ≈ τ · Q_swap

Esta es una aproximación analítica, no una promesa de ingresos. Cada entrada requiere una cohorte, período, unidad, sello de tiempo de valoración, exclusiones y políticas de corrección establecidas.

### **5.3.1 Recibos en efectivo elegibles y en especie**

Las tarifas pueden llegar en activos fúngicos elegibles en efectivo o en vales y otros activos en especie. Los recibos en especie no pueden pagar automáticamente los gastos en efectivo o los reclamos de cobertura. Cualquier intercambio o conversión requeriría autoridad, inventario disponible, lugares revelados, límites y ejecución real.

Que `χ` sea la parte realzada de los ingresos por honorarios que sea admisible en efectivo después de las restricciones de las políticas, las conversiones fallidas y el deslizamiento. Los recibos en efectivo son:

F_cash ≈ χ · F

El análisis presupuestario y de equilibrio de ruptura utilizarían `F_cash` realizado, no las tarifas brutas cotizadas ni el valor nominal del inventario en especie. Un futuro programa informaría por separado de los honorarios brutos del grupo, de los ingresos de la red, de los honorarios de servicios, de la composición de los activos, de los resultados de la conversión y de los ingresos utilizables en efectivo.

## **5.4 Programas de liquidez propuestos**

Un futuro programa de liquidez, documentado por separado, podría asignar activos a Fondos designados o servicios de enrutamiento. Los contratos actuales de `SwapPool` no acuñan acciones de Fondo ni crean automáticamente derechos de reembolso, retiro, recompensa, gobernanza o beneficio.

Cualquier programa publicaría:

- la entidad responsable y el participante Responsables de Fondos;
- los activos aportados y si la transferencia es reembolsable, retribuible, donada o dotada;
- los acuerdos de custodia y control técnico;
- los usos permitidos, los límites, los bloqueos, las puertas de retiro y la asignación de pérdidas;
- la elegibilidad de las tarifas o incentivos y si el importe puede ser cero;
- la presentación de informes, los conflictos, las quejas y los recursos; y
- la migración, la terminación y el tratamiento de los activos y obligaciones restantes.

Los riesgos materiales incluyen inventarios que son difíciles de intercambiar o cumplir, baja elegibilidad en efectivo, incumplimiento del emisor, fallas de contratos o proveedores, cambios en la gobernanza y restricciones a la salida. Los límites, las reservas, los recibos y los paneles de control pueden reducir o revelar algunos riesgos; no eliminan las pérdidas.

Para una métrica analítica ex-post, permita:

- `ϕ` será la fracción realizada de los ingresos por honorarios del programa asignados en virtud de los términos adoptados por el programa; y
- `K` será el valor medido de los activos cubiertos por el programa según un método indicado.

Entonces:

FeeFlow_LP ≈ (ϕ · F) / K = (ϕ · τ · Q_swap) / K

Esta métrica describe el flujo de honorarios realizado por activo del programa medido. No es APY, un pronóstico, un dividendo o un rendimiento garantizado. Los informes mantendrían separados el volumen de swap, la presentación de la redención, el cumplimiento del emisor, la descarga, la duración del mantenimiento, las pérdidas, los retiros y los recibos de tarifas.
