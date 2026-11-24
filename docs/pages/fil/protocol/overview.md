# Protokol

Inilalarawan ng **Commitment Pooling Protocol (CPP)** kung paano pumipili ng mga Voucher ang mga Pool na may magkakahiwalay na pamamahala, naglalathala ng mga patakaran sa palitan, at nagbibigay-daan sa pagpapalitan. Ginagamit naman ng Mayhawak ang Voucher sa Tagapag-isyu para sa ipinangakong produkto o serbisyo. Magkahiwalay na hakbang ang mga ito, na may magkahiwalay na pananagutan.

Ipinapaliwanag ng site na ito ang mga konseptong iyon at ang paggamit ng CLC App. Ang [dokumentasyon ng CLC software](https://software.cosmolocal.credit/) ang pangunahing sanggunian para sa implementasyon ng software, mga contract, API, deployment, at pagpapatakbo. Nasa Ingles ito sa kasalukuyan.

Magsimula sa [Mga konsepto at bokabularyo](/fil/introduction/concepts) para sa mga karaniwang termino, o sa [White Paper](/fil/white-paper) para sa mas malawak na disenyo at mga panukala.

## Paraan ng deployment

Maaaring magpatakbo ang iba't ibang komunidad at organisasyon ng magkatugmang software sa ilalim ng sarili nilang mga patakaran. Pinapatakbo ng Grassroots Economics Foundation ang [pampublikong CLC App](https://cosmolocal.credit). Dapat tukuyin ng bawat deployment ang mga operator, contract, at awtoridad na may pananagutan dito.

Para sa mga address ng contract, gabay sa deployment, at pagsusuri sa mga may-ari at kapangyarihang mag-upgrade, tingnan ang [Deployment at beripikasyon](https://software.cosmolocal.credit/contracts/deployments). Para sa pagpapatakbo ng mga sumusuportang serbisyo, magsimula sa [CLC Core API](https://software.cosmolocal.credit/core-api/).

## Mapa ng mga component

Gamitin ang sanggunian sa software para sa:

| Paksa | Pangunahing dokumentasyon ng software |
| --- | --- |
| Paggawa, supply, at pag-expire ng Voucher | [Mga Voucher](https://software.cosmolocal.credit/contracts/vouchers) |
| Configuration, deposito, withdrawal, at kontrol ng Pool | [Mga Pool](https://software.cosmolocal.credit/contracts/pools) |
| Pagkalkula ng rate ng palitan | [Mga Quoter](https://software.cosmolocal.credit/contracts/quoters) |
| Pagsasagawa ng palitan, bayarin, at mga tala ng transaksyon | [Pag-quote at pag-settle ng palitan](https://software.cosmolocal.credit/contracts/swaps) |
| Pagpapalitan sa maraming Pool | [Routing](https://software.cosmolocal.credit/contracts/routing) |
| Pagtuklas at mga sumusuportang contract | [Mga registry at kasangkapan](https://software.cosmolocal.credit/contracts/registries) |
| Mga request at response ng API | [Sanggunian sa OpenAPI](https://software.cosmolocal.credit/core-api/reference) |
| Mga setting ng backend at routing | [Configuration](https://software.cosmolocal.credit/core-api/configuration) |

## Routed exchange sa application layer

Matutulungan ng App ang isang kalahok na magpalitan sa maraming Pool kapag may angkop na ruta. Sinusuri ng kalahok ang quote at pinapahintulutan ang palitan. Nananatili sa bawat Pool ang sarili nitong mga patakaran at responsableng partido.

Tingnan ang [Mga ruta at pananagutan](/fil/protocol/network) para sa kahulugan nito sa mga kalahok, at ang [Implementasyon ng routing](https://software.cosmolocal.credit/contracts/routing) para sa pag-quote at pagsasagawa ng mga ruta sa software.

Nagbibigay-daan ang software sa palitan; nananatiling responsable ang mga Tagapag-isyu sa mga pangako ng kanilang Voucher, at ang mga Tagapangasiwa ng Pool sa kanilang inilathalang patakaran. Ang paggamit sa pampublikong App ay saklaw ng [Mga Tuntunin ng Serbisyo](/fil/governance/terms).
