## **9. Economía propuesta para los programas de liquidez**

Este capítulo describe un modelo futuro adoptado por separado. No es una función actual de la aplicación, una oferta, una devolución prometida o un derecho creado depositando en `SwapPool`.

### **9.1 Fuentes de ingresos propuestas**

Un futuro presupuesto de la red podría recibir:

1. una revelada **comisión de red** tomadas como parte de las tasas cobradas por las Comisiones participantes;
2. las tarifas de enrutamiento o de servicio separadas de los servicios compartidos implementados; y
3. otros ingresos recibidos expresamente adoptados.

Los honorarios brutos de los grupos retenidos por los grupos no son ingresos de la red. El actual Protocol v1.1.0 utiliza un modelo diferente: una tarifa de protocolo opcional se suma a la tarifa del grupo y se envía directamente a su destinatario configurado.

### **9.2 Matemáticas ilustrativas de rake**

Si un grupo participante cobra una cuota de grupo de 2.00% y un grupo de redes adoptado recibe el 20% de dicha cuota de grupo, la tasa efectiva de grupo de redes propuesta sobre el valor enrutado será:

`rake_rate = 2.00% × 20% = 0.40% = 40 bps`

Si el 25% de los activos de rake y de honorarios de servicio recibidos son elegibles y convertibles para un uso denominado en efectivo declarado después de los costos, la cuota utilizable en efectivo del rake de 40 bps es de aproximadamente 10 bps.

Los ingresos de la red propuestos son:

`network_rake_received + routing_or_service_fees_received`

No agregue las tasas brutas de Fondo al rake de la red: el rake es una transferencia de esas tasas y de lo contrario se contaría dos veces.

### **9.3 Los derechos del programa de liquidez**

Un programa adoptado por separado podría financiar el inventario del Fondo, los servicios de enrutamiento, el monitoreo u otros mandatos. Sus términos deberán revelar:

- si una transferencia es un regalo, una donación, un préstamo, una contribución recuperable o una compra;
- la custodia y el control;
- Reglas de retiro, reembolso, pérdida y prioridad;
- la elegibilidad de los honorarios y de las recompensas;
- derechos de gobernanza;
- métodos de valoración y presentación de informes; y
- Suspensión, terminación y remedios.

El actual `SwapPool` no crea ningún token de fondo-share o derecho de contribuyente automático. Cualquier métrica ex post debe basarse en los ingresos y pérdidas realizados, no debe presentarse como rendimiento prometido y puede ser cero o negativo.
