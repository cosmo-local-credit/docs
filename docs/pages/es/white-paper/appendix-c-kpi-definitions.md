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
| **Volumen de intercambios de Fondos** | Valor de los swaps directos completados en el marco de un método de valoración divulgado | Eventos de liquidación en cadena, unidades de tokens, fuente de tasa, tiempo; no se clasifican como cumplimiento del emisor |
| **Inventario de los Fondos** | Activos soportados medidos mantenidos por un grupo en un momento determinado | Saldos contractuales, reservas de honorarios, activos inaccesibles, método de valoración y facultades de retiro del titular |
| **Adecuación de las reservas** | Activos de reserva disponibles elegibles divididos por exposiciones expresamente cubiertas | Política de cobertura, elegibilidad de los activos, custodia/control, pasivos, exclusiones y valoración; no el suministro total de tokens por defecto |
| **Utilización límite** | Saldo de tokens del Fondo medido dividido por su límite configurado actual | Dirección Limiter, token, fondo, timestamp, cambios y períodos sin límite |
| **Tasa de aprobación de las cotizaciones** | Respuestas de citas exitosas divididas por intentos de citas válidos | Resultado sólo por cotización; No ejecución de la ruta |
| **Rate de ejecución de la ruta** | Ejecuciones completadas multi-hop divididas por intentos de ejecución válidos | Se aplicará únicamente a un sistema de ejecución implementado; Informe sobre las reglas de per-hop y de atomicidad |
| **Recuperación del garante** | Recuperación admisible recibida dividida por créditos cubiertos pagados | Garante identificado, política de reclamación, calendario, costes, disputas y amortizaciones |
| **Ingresos de la red propuestos** | Rastreamiento de red propuesto recibido más tarifas de enrutamiento/servicio separadas recibidas | Excluir los honorarios brutos de los Fondos retenidos por los Fondos y evitar contar el rake dos veces |
| **La puntualidad de la gobernanza** | Tiempo para detectar, decidir, pausar, reparar y cerrar un incidente | Horarios definidos, organismos responsables, poderes de emergencia, apelaciones y eventos perdidos |

Las reclamaciones de impacto social requieren una metodología separada. La actividad Blockchain por sí sola no establece la identidad, el rendimiento del emisor, la satisfacción, la salud de la comunidad, la causalidad o el impacto.
