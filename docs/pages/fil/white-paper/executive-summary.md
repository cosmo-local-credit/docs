## **Executive summary**

Inilalarawan ng **Commitment Pooling Protocol (CPP)** kung paano maaaring mag-curate ng mga pangakong maaaring tubusin, maglathala ng paraan ng exchange rate at limitasyon, humawak ng inventory, at magbigay-daan sa may-pananagutang palitan ang mga Pool ng Pangako na malayang pinamamahalaan. Nananatiling responsable ang mga tagapag-isyu sa mga pangako ng kanilang voucher. Nananatiling responsable ang mga Tagapangasiwa ng Pool sa mga tuntunin ng Pool at anumang garantiyang hayagang inaako nila. Hindi pangkalahatang guarantor ang CLC App o GEF.

Nagbibigay ang Protocol v1.1.0 ng kasalukuyang building block para sa direktang palitan: `GiftableToken`, `SwapPool`, opsyonal na registry at valuation module, cap sa balanse ng token ng Pool, bayad sa Pool, karagdagang bayad sa Protocol, at `SwapRouter` na para sa quote lamang. Hindi itinatala ng kasalukuyang mga contract ang real-world fulfillment, lumilikha ng awtomatikong share para sa liquidity provider, nagsasagawa ng multi-hop route, o nagbibigay ng pangkalahatang reserba, garantiya, o insurance.

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

Sinusuri ng mas malawak na iminungkahing disenyo ng CLC kung paano maaaring gawin ng mga compatible na network ang sumusunod:

1. tumuklas at mag-quote ng mga path sa mga Pool na malayang pinamamahalaan;
2. mag-ugnay ng mga serbisyo sa network na may pananagutan nang hindi pinapalitan ang lokal na pananagutan;
3. sumuporta sa hiwalay na pinondohang liquidity mandate, garantiya, reserba, o insurance policy;
4. sukatin nang magkahiwalay ang palitan sa Pool, paghaharap ng voucher, pagtupad, at discharge; at
5. gumamit ng iminungkahing network rake at service fee upang pondohan ang mga pinagtibay na shared service.

Kabilang sa panukala ang isang **iminungkahing CLC governance token** at **iminungkahing CLC Network Pool**. Wala sa dalawa ang bahagi ng kasalukuyang App o Protocol v1.1.0.

Sa ilalim ng iminungkahing modelo, maaari lamang kumilos ang mga kalahok sa liquidity at pamamahala sa pamamagitan ng hiwalay na pinagtibay na programang may inilathalang eligibility, risk, control, transfer right, recovery term, at fee rule. Walang awtomatikong share, repayment, withdrawal, reward, o governance right na nililikha ang karaniwang deposito sa Pool.

Ang sama-samang layunin ay:

> Dagdagan ang may-pananagutang palitan at pagtupad sa mga pangako sa totoong buhay habang pinananatili ang pangangalaga, pagiging patas, lokal na pananagutan, at katatagan.

Nananatiling pangunahing layunin ng disenyo ang anti-capture at credible exit. Kabilang sa mga iminungkahing kontrol ang time-delayed governance, maraming approval threshold, transparent delegation, conflict rule, incident review, at dokumentadong proseso ng fork-and-migrate. Mababawasan ng mga kontrol na ito ang ilang governance risk ngunit hindi nila maaalis ang pagkalugi o magagarantiya ang resulta.
