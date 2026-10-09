## **5. De Fondos aislados a una red federada**

El Protocol v1.1.0 actual admite la ejecución directa a través de un `SwapPool` y proporciona una cita sólo `SwapRouter`. No ejecuta rutas multi-hop, HTLC, rutas de depósito de garantía, compensación por lotes o compensación entre redes.

Este capítulo propone cómo las Fondos gobernadas de forma independiente podrían coordinarse sin renunciar a sus propias reglas de admisión, valoración, límite, tarifa, inventario, autorización y gobernanza.

### **5.1 Medidas separadas de intercambio y cumplimiento**

La Federación podría mejorar el acceso al inventario, pero no fusionaría los vales y intercambiaría ciclos de vida. Cualquier aplicación mediría estos acontecimientos por separado:

1. se menciona una ruta;
2. una o más operaciones de swap de fondo se ejecutarán y se liquidarán en cadena;
3. un titular presente a la emisora unidades de vale;
4. el emisor cumple el compromiso; y
5. las unidades cumplidas se descargan.

Más rutas citadas o ejecutadas no demuestran mayor cumplimiento. Los informes indicarían la cohorte, el período, los activos, el método de valoración y el sello de tiempo, las exclusiones, las correcciones y las pruebas fuera de la cadena requeridas en el apéndice C.

**Rutas ilustrativas:** Una escuela tiene vales de maíz pero necesita vales de transporte. Un servicio de rutas identifica los inventarios del Fondo compatibles. La ejecución sólo tendría éxito si cada salto autorizado por separado permaneciera dentro de sus límites de cotización, límites, tarifas, inventario y política. Los swaps resultantes no demostrarían que ninguno de los emisores cumpliera posteriormente sus compromisos en materia de vales.

### **5.2 Servicios de enrutamiento y reequilibrio propuestos**

Un futuro servicio de rutas podría apoyar dos actividades distintas.

**La ejecución iniciada por el participante.** Teniendo en cuenta los activos de entrada y salida, una cantidad y las restricciones del usuario, el servicio podría identificar un camino y preparar la ejecución. Cada salto tendría su propia Fondo responsable, cotización, autorización, tarifas, límites, inventario y recibo. Los lotes atómicos, los HTLC y la custodia son posibles opciones de ejecución futuras, no el comportamiento actual del Protocolo.

**El reequilibrio del Fondo.** Responsables de Fondos podría publicar objetivos de inventario, contrapartes permitidas, clases de activos, límites de desviación de cotizaciones y límites por período. Un servicio responsable podría buscar ciclos o cadenas compatibles y ejecutar solo las intenciones autorizadas.

El reequilibrio sería opt-in. Un grupo podría permitir rutas a los participantes mientras se niega el reequilibrio de salida, o podría permitir solo activos seleccionados, contrapartes y cantidades. Cada salto ejecutado produciría un recibo, y cualquier tarifa de servicio se revelaría por separado de las tarifas de Fondo y protocolo.

#### **5.2.1 Confederación y interoperabilidad**

Las implementaciones independientes podrían operar sus propios registros, interfaces, servicios de rutas y perfiles de políticas al mismo tiempo que escogieran estándares de datos y recepción compatibles. La ejecución transversal seguiría dependiendo del despliegue.

Un perfil compatible:

- identificar sus raíces de registro, operadores de servicios, responsables del tratamiento y términos aplicables;
- divulgar las contrapartes, activos, adaptadores y rutas permitidas y rechazadas;
- aplicar las autorizaciones, límites, tarifas y restricciones de inventario de cada grupo participante;
- preservar las pruebas de cotización a recepción por punto; y
- permitir que los grupos funcionales de otra manera abandonen o seleccionen otro registro sin borrar los saldos o las obligaciones del emisor.

La compatibilidad puede aumentar las vías de intercambio disponibles y reducir la dependencia de un registro o operador. No responsabiliza a la red, CLC App, GEF ni a otro grupo por el cumplimiento de un emisor.

### **5.3 Modelo propuesto de red y tarifa de servicio**

La Protocol v1.1.0 actual cobra una cuota de fondo y, cuando se configura, una cuota adicional de protocolo en un swap directo de fondo. Las tasas actuales siguen siendo distintas.

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

#### **5.3.1 Recibos en efectivo elegibles y en especie**

Las tarifas pueden llegar en activos fúngicos elegibles en efectivo o en vales y otros activos en especie. Los recibos en especie no pueden pagar automáticamente los gastos en efectivo o los reclamos de cobertura. Cualquier intercambio o conversión requeriría autoridad, inventario disponible, lugares revelados, límites y ejecución real.

Que `χ` sea la parte realzada de los ingresos por honorarios que sea admisible en efectivo después de las restricciones de las políticas, las conversiones fallidas y el deslizamiento. Los recibos en efectivo son:

F_cash ≈ χ · F

El análisis presupuestario y de equilibrio de ruptura utilizarían `F_cash` realizado, no las tarifas brutas cotizadas ni el valor nominal del inventario en especie. Un futuro programa informaría por separado de los honorarios brutos del grupo, de los ingresos de la red, de los honorarios de servicios, de la composición de los activos, de los resultados de la conversión y de los ingresos utilizables en efectivo.

### **5.4 Programas de liquidez propuestos**

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
