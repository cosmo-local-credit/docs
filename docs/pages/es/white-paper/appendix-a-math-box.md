##  Modelo de medición y tarifa propuesto

Este apéndice define un marco de medición propuesto. Protocol v1.1.0 no registra el cumplimiento del emisor, la descarga en el mundo real o todos los campos de datos requeridos a continuación.

### Definiciones de eventos y existencias

Para la clase de vales *j*, cohorte o período *t*, y un método de valoración divulgado *m*:

- `O_{j,t,m}`: valor de los compromisos subvencionables pendientes en el límite de medición.
- `X_{j,t,m}`: valor de los swaps completados en el grupo durante el período.
- `P_{j,t}`: unidades presentadas válidamente al emisor para su redención.
- `F_{j,t}`: unidades presentadas con cumplimiento por emisor comprobado por separado.
- `G_{j,t}`: unidades cumplidas con un registro de descarga que impide su reutilización.

`O` no puede deducirse únicamente del suministro de tokens. Una política de medición deberá identificar al emisor responsable y excluir, según corresponda, el inventario mantenido por el emisor, las unidades quemadas, las unidades caducadas, las unidades descargadas, los saldos de ensayo, los saldos inaccesibles y los tokens cuyos términos no crean un compromiso pendiente de terceros.

Cada medida valorada deberá publicar la unidad, la fuente, el método de valoración, el sello de tiempo y el tratamiento de los tipos de cambio divergentes del grupo. Una transferencia en cadena puede apoyar `X` o pruebas de presentación; no establece por sí solo `F` ni `G`.

### Medidas de cumplimiento basadas en cohortes

Para una cohorte de presentaciones de rescate válidas:

`FulfillmentRate = FulfilledPresentments / ValidPresentments`

`DischargeCompleteness = DischargedFulfillments / FulfilledPresentments`

Utilice la misma cohorte cerrada o madura en cada numerador y denominador. Informe rechazado, retirado, caducado, impugnado, parcialmente cumplido, corregido y presentaciones todavía abiertas por separado.

`FulfillmentLatency = median(t_fulfilled - t_presented)`

`HoldingDuration = median(t_presented - t_acquired)`

Las medidas de latencia de cumplimiento del servicio del emisor después de la presentación. La duración de retención es una medida separada y no debe etiquetarse como latencia de redención.

### Medidas de velocidad distintas

La velocidad de descarga del compromiso propuesta solo podrá calcularse cuando `O` y el valor cumplido utilicen el mismo método de valoración:

`V_commit,t = FulfilledValue_t / AverageOutstandingEligibleCommitmentValue_t`

Una medida de actividad de swap de grupo es separada:

`V_swap,t = PoolSwapValue_t / AverageMeasuredPoolInventoryValue_t`

Ningún valor demuestra el impacto social, la capacidad del emisor, la rentabilidad o la convertibilidad en efectivo.

### Ingresos de la red propuestos

Deje que:

- `PF_t` serán los honorarios brutos del grupo generados durante el período;
- `NR_t` será el rake de red propuesto recibido efectivamente como parte divulgada de las tasas del grupo;
- `RF_t` se proponen tarifas de enrutamiento o de servicio recibidas por separado; y
- `χ_t` será la cuota medida de los ingresos recibidos que sea elegible y convertible para un uso denominado en efectivo declarado después de los costes y las limitaciones políticas.

Desde la perspectiva presupuestaria de la red propuesta:

`ProposedNetworkRevenue_t = NR_t + RF_t`

`CashUsableNetworkRevenue_t = χ_t × (NR_t + RF_t)`

No agregue `PF_t` a `NR_t`: el rake es una transferencia de las tarifas brutas del Fondo y de lo contrario se contaría dos veces. En cambio, el actual Protocol v1.1.0 soporta una tarifa de protocolo adicional; sus ingresos deberán declararse por separado del modelo de rake propuesto.
