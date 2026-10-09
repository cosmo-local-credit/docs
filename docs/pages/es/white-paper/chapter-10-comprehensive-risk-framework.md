## **10. Marco integral de riesgos**

Este marco propuesto separa diez categorías de riesgo. Para cada categoría se identifican posibles indicadores, controles, pruebas de estrés y un apetito indicativo por el riesgo. Estas son recomendaciones de diseño, no afirmaciones de que todos los controles están desplegados, efectivos o suficientes. Los límites, las reservas, las garantías, el seguimiento, la cobertura y la gobernanza no pueden eliminar las pérdidas.

### **10.1 Protocolo y riesgo de contratos inteligentes**

- **Las amenazas:** los errores de contratación, los errores de actualización, las fallas de dependencia y los límites o tarifas mal configurados.
- **Indicadores:** resultados de auditoría, movimientos de inventario inexplicables, fallas invariantes y retrocesos inusuales.
- **Posibles controles:** auditorías independientes; roles privilegiados mínimos; los controladores de proxy y de dependencia divulgados; actualizaciones marcadas en el tiempo; el seguimiento en cadena; las pausas de incidentes con autoridad y criterios publicados; y un camino de migración probado.
- **Pruebas de estrés:** las dependencias de cotizaciones o límites no disponibles, las carencias de inventario, los contratos interrumpidos y el tráfico estallado.
- **El apetito por el riesgo:** bajo antes de escalar las obligaciones pendientes o el volumen de swap.

### **10.2 Riesgo económico y de mercado**

- **Las amenazas:** el inventario delgado, los flujos unilaterales, las retiradas rápidas y las referencias de precios manipuladas o obsoletas.
- **Indicadores:** La utilización de los tokens en el balance de la bolsa es elevada, las diferencias de cotizaciones se amplían, los límites se rechazan con frecuencia y el inventario se concentra.
- **Posibles controles:** los límites máximos actuales del saldo de tokens del grupo; los límites de circulación o de cuenta propuestos; las reservas adoptadas por separado; las referencias de precios protegidas; exclusiones de rutas; tarifas o límites por incidentes limitados en el tiempo.
- **Pruebas de estrés:** grandes movimientos de precios de referencia, aumentos de la presentación, solicitudes de retirada y interrupciones de las fuentes de datos.
- **El apetito por el riesgo:** moderarse únicamente dentro de los parámetros publicados y de la capacidad de soporte de pérdidas financiada.

### **10.3 Riesgo del emisor y del vale**

- **Las amenazas:** la emisión que exceda la capacidad de cumplimiento, el incumplimiento del emisor, los términos engañosos y las ventanas de disponibilidad o presentación poco especificadas.
- **Indicadores:** la disminución de las tasas de cumplimiento confirmadas, el envejecimiento de los vales pendientes, las quejas no resueltas y la exposición concentrada a un emisor.
- **Posibles controles:** la debida diligencia del emisor; comprobantes claros y condiciones de la oferta; límites de emisión o admisión; los bonos o garantías financiados de forma independiente; la presentación de informes de cohortes; y una revisión responsable del registro.
- **Pruebas de estrés:** insolvencia del emisor, choques regionales de producción, reclamaciones falsificadas y retrasos prolongados en el cumplimiento.
- **El apetito por el riesgo:** A medida que aumenta la concentración del emisor o de la oferta.

### **10.4 El riesgo de presentación y cumplimiento de la redención**

- **Las amenazas:** la presentación no válida o duplicada, la capacidad insuficiente de los emisores, las existencias, las fallas logísticas y la falta de registros de descarga.
- **Indicadores:** retraso en el cumplimiento de las solicitudes, presentaciones fallidas o controvertidas, existencias, atrasos de boletos y unidades cumplidas sin descarga.
- **Posibles controles:** los procedimientos de presentación y cumplimiento publicados; divulgación de la capacidad; los lugares de cumplimiento múltiple cuando sea lícito; normas de pruebas; las vías de reclamación y recurso; y registros que separan la presentación, el cumplimiento y la descarga.
- **Pruebas de estrés:** dos a cuatro veces el volumen de presentación, las interrupciones de las instalaciones, las fallas de los proveedores y los intentos de uso duplicado.
- **El apetito por el riesgo:** bajo cuando se trate de bienes esenciales, participantes vulnerables o ventanas de cumplimiento largas.

### **10.5 Riesgo de gobernanza**

- **Las amenazas:** Captura de administrador o controlador, cambios de parámetros apresurados, conflictos de intereses, poderes técnicos ocultos y llamadas débiles.
- **Indicadores:** la autoridad concentrada, las acciones de emergencia frecuentes, los cambios inexplicables de las políticas y las reiteradas interrupciones.
- **Posibles controles:** las divulgaciones sobre el papel y el poder; los umbrales de aprobación proporcionales; los plazos; los conflictos y las reglas de rechazo; registros públicos de cambios; apelaciones; puestas de sol automáticas de energía de emergencia; y la forjabilidad.
- **Pruebas de estrés:** las propuestas adversarias, la pérdida de los signatarios, los intentos de soborno y la captura mediante acumulación o control delegado.
- **El apetito por el riesgo:** bajo para las acciones que afecten a los métodos de valor, a las retiradas, a las raíces del registro, a la cobertura o a los poderes de emergencia.

Para una futura implementación del token de gobernanza CLC propuesto, la prueba de captura incluirá acumulación seguida de intentos de redirigir presupuestos, debilitar los estándares de registro, aprobar mandatos de partes relacionadas o agotar la cobertura financiada. Las posibles salvaguardias incluyen bloqueos de gobernanza, umbrales más altos para las acciones críticas, retraso en la ejecución, seguimiento transparente de la delegación y la concentración, un proceso de incidencia y un procedimiento creíble de salida y salida. Ninguno está representado como desplegado simplemente apareciendo aquí.

### **10.6 Riesgo legal y de cumplimiento**

- **Las amenazas:** un vale, servicio, promoción o activo de gobernanza que reciba un tratamiento regulatorio inesperado; fallas en la protección de los consumidores; el blanqueo de capitales o la exposición a sanciones; y restricciones transfronterizas.
- **Indicadores:** las banderas de jurisdicción, las consultas de los reguladores, las quejas, los partidos restringidos y la divergencia entre el comportamiento anunciado y el actual.
- **Posibles controles:** la revisión por clase y jurisdicción; las divulgaciones precisas; las interfaces geofendadas; controles proporcionales de elegibilidad o de acreditación; los controles de promoción; registros de autoridad y aceptación; y las partes responsables claras.
- **Pruebas de estrés:** una restricción jurisdiccional, la terminación del proveedor, la reclasificación obligatoria y una orden de pausa de una característica o clase de activos.
- **El apetito por el riesgo:** bajo; restringir o detener la actividad no apoyada.

#### 10.6.1 Posicionamiento legal y tratamiento de los tokens propuestos

1. **Infraestructura verificable:** Los contratos Protocol v1.1.0 son compatibles con EVM- y su origen se publicará bajo las licencias y las excepciones de terceros identificadas en el repositorio del Protocolo. La publicación permite la revisión, pero no demuestra en sí misma una auditoría, un despliegue seguro o el cumplimiento legal. Cada despliegue debe revelar su versión de código, la procedencia de la base, las direcciones, los poderes del controlador y el estado de auditoría.
2. **Posición del símbolo propuesto:** En este diseño, el token de gobernanza CLC propuesto coordinaría la gobernanza y el acceso a políticas. No crearía dividendos, participación en las ganancias, derechos residuales ni garantía de valor ni liquidez.
3. **Activos propuestos relacionados:** una política implementada por separado podría permitir bloquear el token de gobernanza CLC propuesto para acuñar stCLC y podría autorizar el sCLC a escala de época. Los términos adoptados tendrían que definir exactamente sus derechos, límites, caducidad, transferenciabilidad y tratamiento.
4. **Comunicaciones:** los materiales para cualquier implantación de tokens de gobernanza CLC, stCLC o sCLC propuestos no deben prometer ganancias, apreciación, ingresos pasivos o acceso garantizado.
5. **Los controles de la jurisdicción:** una implementación puede requerir geofencing de interfaz, certificaciones para clases restringidas, límites de promoción, revisión específica de activos o controles que detengan una característica propuesta.
6. **Notificación de los participantes:** Las condiciones adoptadas explicarán cuándo el acceso puede ser reducido o desactivado por razones legales, operativas o de riesgo y si se aplica alguna compensación o recurso.

### **10.7 Riesgo de enrutamiento y riesgo entre dominios**

- **Las amenazas:** la ejecución parcial, los saltos obstruidos, las explotaciones de puente o escrow, las cotizaciones obsoletas, la inflación de la trayectoria y la ejecución anticipada de los cambios de valor anunciados.
- **Indicadores:** las tasas de vencimiento de las rutas, los atrasos de garantía, las diferencias entre cotizaciones y ejecución, los saltos innecesarios repetidos y los incidentes de puente.
- **Posibles controles:** la ejecución atómica, cuando esté disponible; los periodos conservadores HTLC o los periodos de custodia; las políticas de trayectoria y de contraparte; los límites máximos a nivel de ruta; cartografía determinista de cotización a recibo; y operadores de servicios responsables.
- **Pruebas de estrés:** una parada de puente, reorganización de la cadena, interrupción de dependencia, y un salto fallido en una ruta multi-salto propuesta.
- **El apetito por el riesgo:** de baja a moderada únicamente para las dependencias identificadas y controladas.

### **10.8 Riesgo de custodia y gestión de llaves**

- **Las amenazas:** las claves perdidas o comprometidas, la colusión de los firmantes y la recuperación o autoridad del administrador poco claros.
- **Indicadores:** firmas anómalas, cambios en el controlador, rotaciones fallidas y retiradas inusuales.
- **Posibles controles:** la autorización de múltiples siglos o de umbral; llaves con soporte de hardware; la separación de roles; la rotación del signo; inventarios de los controladores públicos; los límites de retirada controlados; y procedimientos de recuperación probados.
- **El apetito por el riesgo:** Bajo.

### **10.9 Reputación y riesgo social**

- **Las amenazas:** reclamos engañosos, incentivos dañinos, quejas inaccesibles, malas experiencias de cumplimiento, fallas en la privacidad y protecciones que favorecen a los privilegiados.
- **Indicadores:** las quejas por cohorte, las disputas no resueltas, las tendencias de rendimiento de los emisores, la concentración de beneficios o pérdidas y la retroalimentación de la comunidad.
- **Posibles controles:** las revelaciones en lenguaje sencillo; las vías de reclamación y corrección; pruebas accesibles; la información transparente; la revisión de los incidentes; y sanciones proporcionales por falsas declaraciones.
- **El apetito por el riesgo:** En la actualidad, el número de personas afectadas es bajo, con especial atención a las comunidades afectadas y a los participantes vulnerables.

### **10.10 Riesgo de concentración y fragmentación**

- **Las amenazas:** la dependencia de un pequeño número de emisores, grupos de datos, controladores, proveedores, redes o horquillas incompatibles.
- **Indicadores:** medidas de concentración por emisor, grupo, inventario, controlador o proveedor de servicios; fallas de ruta entre grupos; y dependencias individuales críticas.
- **Posibles controles:** los umbrales de concentración publicados; múltiples operadores responsables; normas compatibles; registros independientes; procedimientos de salida probados; y una interoperabilidad segura.
- **Pruebas de estrés:** pérdida del mayor emisor, grupo, operador, proveedor o raíz de registro.
- **El apetito por el riesgo:** el despliegue específico y divulgado, con límites más estrictos para los servicios esenciales o las dependencias irremplazables.
