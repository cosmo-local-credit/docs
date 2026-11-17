## En el caso de los Estados miembros. Las definiciones propuestas de KPI

Estos KPIs forman una especificación de medición propuesta, no una declaración de que la aplicación o protocolo actual registra cada evento requerido.

Cada KPI publicado deberá incluir:

- el editor responsable y la fuente de datos;
- definición de evento o estado;
- la cohorte o el período de medición;
- unidad y método de valoración;
- sello de tiempo de valoración;
- las normas de inclusión y exclusión;
- el tratamiento de registros parciales, controvertidos, expirados, inaccesibles y corregidos;
- pruebas o certificaciones exigidas fuera de la cadena;
- el historial de revisión y las limitaciones de la calidad de los datos; y
- si el resultado es en cadena, informado, certificado, verificado de forma independiente o estimado.

| KPI | Definición propuesta | Pruebas y exclusiones requeridas |
| --- | --- | --- |
| **Presentaciones válidas** | Cuentas o unidades aceptadas en el proceso de redención del emisor durante un período | Identificador de presentación, emisor, autorización del titular, cantidad, tiempo, estado; excluir duplicados y solicitudes inválidas |
| **Tasa de cumplimiento** | Presentaciones válidas cumplidas divididas por presentaciones válidas para la misma cohorte madura | pruebas separadas del desempeño del emisor; Informe de casos abiertos, rechazados, impugnados, parciales y corregidos |
| **Completidad de la descarga** | Presentaciones cumplidas con registro de descarga dividido por presentaciones cumplidas | Quema, cancelación, registro de inhabilitación u otra prueba de no reutilización vinculada al cumplimiento |
| **Latencia de cumplimiento** | Mediana y 90o percentil del tiempo de presentación hasta cumplimiento | No sustituya el tiempo de retención entre emisión y presentación o adquisición y presentación |
| **Duración de la retención** | Mediano y distribución del tiempo desde la adquisición hasta la presentación | Identificar el evento de adquisición y excluir los tiempos de adquisición desconocidos |
| **Compromisiones subvencionables pendientes** | Los compromisos de terceros elegibles restantes después de las exclusiones definidas | Identidad y condiciones del emisor; excluir el inventario aplicable de los emisores, los tokens de vencimiento, combustión, descarga, pruebas y no compromiso |
| **Volumen de intercambios directos de Fondo** | Valor de los intercambios completados e iniciados como intercambios en un solo Fondo, según un método de valoración publicado | Eventos de liquidación en la cadena, unidades de token, fuente del tipo y hora; no clasificarlos como cumplimiento del emisor |
| **Intentos de descubrimiento de rutas** | Solicitudes válidas para encontrar vales accesibles o caminos candidatos durante un periodo | Versión del grafo, bloque indexado, frescura, alcance de la billetera, profundidad solicitada, número de candidatos, estado de omisión o presupuesto de búsqueda; no es una cotización autorizada |
| **Rutas candidatas disponibles** | Caminos candidatos devueltos por el descubrimiento para la cohorte de solicitudes definida | Contar cada camino ordenado distinto de Fondos y tokens; indicar la profundidad y las exclusiones de la ruta; no clasificarlos como ejecutables o liquidados |
| **Tasa de aprobación de cotizaciones de ruta** | Cotizaciones autorizadas de ruta devueltas, divididas por los intentos válidos de cotización | Bloque fijado, camino, modo de importe, vencimiento, resultado o motivo del rechazo; mantenerla separada del éxito del descubrimiento y de la ejecución |
| **Tasa de ejecución de la ruta** | Transacciones enrutadas confirmadas divididas por intentos de ejecución firmados válidos para la misma cohorte madura | Identificador de seguimiento, hash de transacción, estado del envío, confirmación o reversión, profundidad de la ruta y razón del fallo; excluir cotizaciones no firmadas |
| **Volumen de toda la ruta** | Valor de entrada y salida de los intercambios enrutados confirmados, contado una sola vez por ruta | Usar la entrada liquidada del primer paso y la salida liquidada del último con un único método de valoración; no sumar el valor de todos los pasos como si fueran volúmenes económicos independientes |
| **Liquidación por paso** | Entrada liquidada, salida bruta, comisión del Fondo, comisión del protocolo y salida neta de cada paso de una ruta confirmada | Identificadores ordenados de Fondos y tokens, eventos de liquidación, hash de la transacción, bloque, índice del registro y cualquier resto intermedio |
| **Comisiones de la ruta** | Comisiones actuales de los Fondos y del protocolo realmente liquidadas en toda la ruta | Presentar cada paso y el total por tipo de comisión; no calificarlas como porcentaje de red propuesto ni como comisión de servicio no implementada |
| **Restricciones de la ruta** | Número y proporción de rechazos de ruta o cotización por causa identificada | Admisión, límite de depósito, liquidez, dominio de comisiones, token o módulo de cotización no admitido, saldo o tipo de billetera, gas, presupuesto de búsqueda, vencimiento, discrepancia o prueba de simulación |
| **Estado de la conciliación de rutas** | Frescura y fiabilidad del grafo indexado y de los registros agrupados de liquidación | Versión y edad del grafo, profundidad de la cola de elementos pendientes, duración de la conciliación, correcciones, fallos, miembros desconocidos y recibos no resueltos |
| **Inventario de los Fondos** | Activos soportados medidos mantenidos por un grupo en un momento determinado | Saldos contractuales, reservas de honorarios, activos inaccesibles, método de valoración y facultades de retiro del titular |
| **Adecuación de las reservas** | Activos de reserva disponibles elegibles divididos por exposiciones expresamente cubiertas | Política de cobertura, elegibilidad de los activos, custodia/control, pasivos, exclusiones y valoración; no el suministro total de tokens por defecto |
| **Utilización límite** | Saldo de tokens del Fondo medido dividido por su límite configurado actual | Dirección Limiter, token, fondo, timestamp, cambios y períodos sin límite |
| **Recuperación del garante** | Recuperación admisible recibida dividida por créditos cubiertos pagados | Garante identificado, política de reclamación, calendario, costes, disputas y amortizaciones |
| **Ingresos de la red propuestos** | Rastreamiento de red propuesto recibido más tarifas de enrutamiento/servicio separadas recibidas | Excluir los honorarios brutos de los Fondos retenidos por los Fondos y evitar contar el rake dos veces |
| **La puntualidad de la gobernanza** | Tiempo para detectar, decidir, pausar, reparar y cerrar un incidente | Horarios definidos, organismos responsables, poderes de emergencia, apelaciones y eventos perdidos |

Las reclamaciones de impacto social requieren una metodología separada. La actividad Blockchain por sí sola no establece la identidad, el rendimiento del emisor, la satisfacción, la salud de la comunidad, la causalidad o el impacto.
