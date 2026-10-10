# Protokol

Ang mga contract ng Protocol v1.1.0 ang nagbibigay ng on-chain na mga pangunahing bahagi ng **Commitment Pooling Protocol (CPP)** na inilalarawan sa [Kabanata 1](/fil/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) ng White Paper. Ang sangguniang ito ay sumusunod sa pampublikong [`v1.1.0` release](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0).

Basahin ang [Mga konsepto at bokabularyo](/fil/introduction/concepts) para sa mga layer ng produkto, tungkuling may pananagutan, lifecycle ng mga kilos, halaga, limitasyon, bayarin, at mga salitang tumutukoy sa katayuan.

Pinapatakbo ng Grassroots Economics Foundation (GEF) ang progressive web app sa [cosmolocal.credit](https://cosmolocal.credit), na isang paraan ng pakikipag-ugnayan sa mga contract na ito. Magkahiwalay ang App at mga contract. Ang pagpapatakbo sa interface ay hindi, sa sarili nito, ginagawang tagapag-isyu ng Voucher, Tagapangasiwa ng Pool, custodian, guarantor, o counterparty ang GEF sa transaksyon ng gumagamit. Nakadepende ang mga tungkuling iyon sa kaugnay na deployment, mga address ng controller, at inilathalang tuntunin ng tagapag-isyu o Pool. Tingnan ang [Mga Tuntunin ng Serbisyo](/fil/governance/terms).

## Paraan ng deployment

Karamihan sa mga module na may state ay ini-initialize bilang **ERC-1967 proxy instance** sa pamamagitan ng `ERC1967Factory` ng Solady. Maaaring gumamit ang maraming instance ng iisang implementation habang magkahiwalay ang mga may-ari, configuration, at storage. Maaari ring gumamit ang deployment ng deterministic salt upang mahulaan ang mga address bago ang deployment.

Hindi lahat ng contract ay proxy. Ang `DecimalQuoter` at `SwapRouter` ay stateless na direktang deployment; direkta ring dini-deploy ang `RescueVault` at `ERC1967Factory`. Dinisenyo para sa proxy deployment ang natitirang stateful module na nakalista sa ibaba.

May administrator ang bawat proxy na maaaring magpalit ng implementation nito. Hiwalay ang proxy administration sa pagmamay-ari ng contract at dapat itong italaga sa address na may angkop na pamamahala. Maaaring baguhin ng upgrade ang pag-uugali kahit na-seal na ng Pool ang configuration nito, kaya dapat suriin ng mga gumagamit ang may-ari ng Pool at proxy administrator.

Nakadepende rin sa bawat contract ang EIP-165 support; hindi ito pangkalahatan. Inilalantad ito ng `GiftableToken`, ng tatlong quoter, `OracleRelay`, `Limiter`, ilang registry at index, `Splitter`, `EthFaucet`, `PeriodSimple`, at `RescueVault`. Hindi inilalantad ng `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController`, at `CAT` ang `supportsInterface` sa v1.1.0.

## Mapa ng mga component

- **GiftableToken** — ERC20 supply, minting, burning, at opsyonal na expiry. Maaaring gamitin ng tagapag-isyu ang isang instance bilang Voucher, ngunit hindi inilalarawan ng contract lamang kung ano ang maaaring tubusin, sino ang maaaring tumubos, saan, o sa ilalim ng anong tuntunin.
- **SwapPool** — Token vault at swap-settlement engine. Maaaring ikabit ng deployment ang mga component para sa curation, valuation, bayarin, limitasyon, at protocol fee, o iwanang walang value ang mga suportadong dependency.
- **DecimalQuoter, RelativeQuoter, at OracleQuoter** — Mga mapagpapalit na valuation module para sa decimal parity, relative rate na pinamamahalaan ng may-ari, o rate mula sa oracle. Maaaring maghatid ang `OracleRelay` ng isang panlabas na feed para gamitin ng `OracleQuoter`.
- **FeePolicy at Limiter** — Opsyonal na patakaran sa bayarin kada pair at limitasyon sa balanse ng bawat token sa Pool.
- **ProtocolFeeController** — Opsyonal at nababagong protocol-fee rate, tatanggap, at active state na maaaring konsultahin ng Pool habang nagsa-settle.
- **TokenUniqueSymbolIndex, AccountsIndex, at ContractRegistry** — Mga component para sa pagtuklas ng token, account, at address. Itinatala ng `CAT` ang nakaayos na kagustuhan ng account para sa settlement token.
- **SwapRouter** — Mga kalkulasyon lamang ng quote para sa exact-input at exact-output sa isang iminungkahing multi-Pool path. Hindi ito nag-iingat ng token o nagsasagawa ng palitan.
- **Splitter, EthFaucet, PeriodSimple, at RescueVault** — Mga kasangkapan para sa distribution, gas funding, rate limit, at asset recovery.

Maaaring pagsama-samahin ang mga contract sa iba’t ibang paraan. Ang listing sa registry, quote, o graph path ay hindi garantiya na maisasagawa ang transaksyon: nakadepende pa rin ito sa kasalukuyang liquidity, limitasyon ng token, bayarin, estado ng oracle, awtorisasyon, deadline, kondisyon ng network, at configuration ng bawat Pool.
