# Protocolo

El **Protocolo de Agrupación de Compromisos (CPP)** describe cómo los Fondos gobernados de forma independiente seleccionan Vales, publican reglas y permiten intercambios. Después, el Titular utiliza un Vale con su Emisor para obtener los bienes o servicios prometidos. Son pasos distintos, con responsabilidades distintas.

Este sitio explica esos conceptos y cómo utilizar la CLC App. La [documentación del software CLC](https://software.cosmolocal.credit/) es la referencia definitiva sobre su implementación, contratos, API, despliegue y operación. Actualmente está disponible en inglés.

Consulta [Conceptos y vocabulario](/es/introduction/concepts) para conocer los términos comunes, o el [Libro Blanco](/es/white-paper) para explorar el diseño general y las propuestas.

## Modelo de despliegue

Distintas comunidades y organizaciones pueden operar software compatible según sus propias reglas. Grassroots Economics Foundation opera la [CLC App pública](https://cosmolocal.credit). Cada despliegue debe identificar a sus operadores, contratos y autoridades responsables.

Para consultar direcciones de contratos, instrucciones de despliegue y cómo verificar propietarios y poderes de actualización, visita [Despliegues y verificación](https://software.cosmolocal.credit/contracts/deployments). Para operar los servicios de apoyo, comienza por la [API de CLC Core](https://software.cosmolocal.credit/core-api/).

## Mapa de componentes

La documentación del software cubre estos temas:

| Tema | Referencia definitiva del software |
| --- | --- |
| Creación, cantidad emitida y vencimiento de Vales | [Vales](https://software.cosmolocal.credit/contracts/vouchers) |
| Configuración, depósitos, retiros y control de Fondos | [Fondos](https://software.cosmolocal.credit/contracts/pools) |
| Cálculo de tipos de cambio | [Cotizadores (Quoter)](https://software.cosmolocal.credit/contracts/quoters) |
| Ejecución de intercambios, comisiones y registros de transacciones | [Cotizar y liquidar intercambios](https://software.cosmolocal.credit/contracts/swaps) |
| Intercambio mediante varios Fondos | [Enrutamiento](https://software.cosmolocal.credit/contracts/routing) |
| Descubrimiento y contratos de apoyo | [Registros y utilidades](https://software.cosmolocal.credit/contracts/registries) |
| Solicitudes y respuestas de la API | [Referencia OpenAPI](https://software.cosmolocal.credit/core-api/reference) |
| Parámetros del servicio y del enrutamiento | [Configuración](https://software.cosmolocal.credit/core-api/configuration) |

## Intercambio enrutado a nivel de la aplicación

Cuando hay una ruta adecuada, la App puede ayudar a un participante a intercambiar mediante varios Fondos. El participante revisa la cotización y autoriza el intercambio. Cada Fondo conserva sus propias reglas y partes responsables.

Consulta [Rutas y responsabilidades](/es/protocol/network) para entender qué significa esto para los participantes, y la [implementación del enrutamiento](https://software.cosmolocal.credit/contracts/routing) para conocer cómo el software cotiza y ejecuta las rutas.

El software permite el intercambio; los Emisores siguen siendo responsables de las promesas de sus Vales y los Responsables de los Fondos, de sus reglas publicadas. El uso de la App pública se rige por los [Términos de Servicio](/es/governance/terms).
