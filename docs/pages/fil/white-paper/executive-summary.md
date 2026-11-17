## **Executive summary**

Inilalarawan ng **Commitment Pooling Protocol (CPP)** kung paano maaaring mag-curate ng mga pangakong maaaring tubusin, maglathala ng paraan ng exchange rate at limitasyon, humawak ng inventory, at magbigay-daan sa may-pananagutang palitan ang mga Pool ng Pangako na malayang pinamamahalaan. Nananatiling responsable ang mga tagapag-isyu sa mga pangako ng kanilang voucher. Nananatiling responsable ang mga Tagapangasiwa ng Pool sa mga tuntunin ng Pool at anumang garantiyang hayagang inaako nila. Hindi pangkalahatang guarantor ang CLC App o GEF.

Ang Protocol v1.1.0 ay nagbibigay ng kasalukuyang mga direktang-Palitan building blocks: `GiftableToken`, `SwapPool`, optional registries at valuation modules, Pool token-balance caps, Pool fees, isang karagdagang bayad sa protocol, at isang quote-only Solidity `SwapRouter`. Ang produksyon CLC App at CLC Core ngayon matuklasan same-chain ruta sa pamamagitan ng hanggang sa tatlong mga Pool, gumawa pined-block quotes, simulate at maghanda na nilagdaan atomic wallet batches, relay ang mga ito, at pangkatin ang kanilang pag-aayos record. Ang mga kontrata ay hindi pa rin nagrerekord ng tunay na katuparan sa mundo, lumikha ng awtomatikong mga bahagi ng tagapagbigay ng likididad, magsagawa ng cross-chain routing o batch netting, o magbigay ng unibersal na reserba, garantiya, o seguro.

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
