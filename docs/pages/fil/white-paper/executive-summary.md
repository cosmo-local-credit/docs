# Executive summary

Inilalarawan ng **Commitment Pooling Protocol (CPP)** kung paano maaaring mag-curate ng mga pangakong maaaring tubusin, maglathala ng paraan ng exchange rate at limitasyon, humawak ng inventory, at magbigay-daan sa may-pananagutang palitan ang mga Pool ng Pangako na malayang pinamamahalaan. Nananatiling responsable ang mga tagapag-isyu sa mga pangako ng kanilang voucher. Nananatiling responsable ang mga Tagapangasiwa ng Pool sa mga tuntunin ng Pool at anumang garantiyang hayagang inaako nila. Hindi pangkalahatang guarantor ang CLC App o GEF.

Nagbibigay ang Protocol v1.1.0 ng mga kasalukuyang building block para sa direktang palitan: `GiftableToken`, `SwapPool`, opsyonal na registry at valuation module, mga token-balance cap ng Pool, mga bayarin sa Pool, karagdagang bayarin sa protocol, at quote-only na Solidity `SwapRouter`. Naghahanap ngayon ang production CLC App at CLC Core ng same-chain route sa hanggang tatlong Pool, gumagawa ng pinned-block quote, nag-si-simulate at naghahanda ng pinirmahang atomic Wallet batch, nagre-relay nito, at pinagsasama ang settlement record. Hindi pa rin nagtatala ang mga contract ng real-world fulfillment, awtomatikong gumagawa ng liquidity-provider share, nagsasagawa ng cross-chain routing o batch netting, o nagbibigay ng pangkalahatang reserve, guarantee, o insurance.

Ginamit ng makasaysayang **Sarafu Network** ang mga konsepto ng commitment pooling sa community currency, savings group, mutual-aid system, at production commitment. Lumipat kalaunan ang serbisyo nito sa CLC App. Hindi nito ipinahihiwatig na lumipat ang bawat makasaysayang account, Wallet, token, voucher, Pool, balanse, report, kalahok, o obligasyon.

**Makasaysayang snapshot ng Sarafu Network — aktibidad sa Celo mula 5 Hulyo 2023 hanggang 20 Hulyo 2025**

**Source:** [Dune Analytics dashboard](https://dune.com/grassrootseconomics/sarafu-network)

- 26,367 user
- 285,197 peer-to-peer exchange
- 188 natatanging aktibong Pool ng Pangako
- 745 natatanging aktibong voucher
- $320,692 volume ng palitan sa Pool
- 899 inilathalang report ([archive ng makasaysayang report](https://sarafu.network/reports))

Makasaysayang ebidensiya ang mga bilang na ito, hindi bilang ng kasalukuyang paggamit ng CLC.

Ang mas malawak na disenyo ng CLC ay pinagsasama ang kasalukuyang pag-routing sa mga panukala kung paano maaaring maging compatible ang mga network:

1. palawakin ang mga serbisyong may pananagutan sa ruta sa iba pang mga profile ng rehistro o patakaran at mga domain;
2. mag-ugnay ng mga serbisyo sa network na may pananagutan nang hindi pinapalitan ang lokal na pananagutan;
3. sumuporta sa hiwalay na pinondohang liquidity mandate, garantiya, reserba, o insurance policy;
4. sukatin nang magkahiwalay ang palitan sa Pool, paghaharap ng voucher, pagtupad, at discharge; at
5. gamitin ang isang iminungkahing network rake at hiwalay na pinagtibay na mga bayarin sa serbisyo upang pondohan ang ibinahaging mga serbisyo.

Kabilang sa panukala ang isang **iminungkahing CLC governance token** at **iminungkahing CLC Network Pool**. Wala sa dalawa ang bahagi ng kasalukuyang App o Protocol v1.1.0.

Sa ilalim ng iminungkahing modelo, maaari lamang kumilos ang mga kalahok sa liquidity at pamamahala sa pamamagitan ng hiwalay na pinagtibay na programang may inilathalang eligibility, risk, control, transfer right, recovery term, at fee rule. Walang awtomatikong share, repayment, withdrawal, reward, o governance right na nililikha ang karaniwang deposito sa Pool.

Ang sama-samang layunin ay:

> Dagdagan ang may-pananagutang palitan at pagtupad sa mga pangako sa totoong buhay habang pinananatili ang pangangalaga, pagiging patas, lokal na pananagutan, at katatagan.

Nananatiling pangunahing layunin ng disenyo ang anti-capture at credible exit. Kabilang sa mga iminungkahing kontrol ang time-delayed governance, maraming approval threshold, transparent delegation, conflict rule, incident review, at dokumentadong proseso ng fork-and-migrate. Mababawasan ng mga kontrol na ito ang ilang governance risk ngunit hindi nila maaalis ang pagkalugi o magagarantiya ang resulta.
