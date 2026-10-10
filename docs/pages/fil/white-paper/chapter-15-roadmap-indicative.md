## **15. Roadmap (indicative)**

### **15.1 Kasalukuyang pundasyon**

Pinapatakbo ng GEF ang CLC App sa `cosmolocal.credit` sa Gnosis Chain. Nagbibigay ang App ng sinusuportahang access sa account at wallet, pampublikong catalog na Pamilihan, at mga interface para sa mga token, voucher, Offering, Pool ng Pangako, transfer, at direktang swap sa Pool.

Ibinibigay ng Protocol v1.1.0 ang kasalukuyang pundasyon ng mga contract: `GiftableToken`, direktang pagpapatupad ng `SwapPool`, mga opsyonal na registry, valuation module, cap sa balanse ng token ng Pool, bayad sa Pool, karagdagang protocol fee, at quote-only na `SwapRouter`. Nakadepende pa rin ang availability sa interface, mga naka-deploy na contract, inventory, configuration, kalagayan ng network, eligibility, provider, hurisdiksiyon, at inilathalang tuntunin ng tagapag-isyu o Pool.

### **15.2 Proposed milestones**

Mga direksiyon sa disenyo ang mga milestone na ito, hindi mga numero ng release, petsa ng paghahatid, o pangakong ilulunsad ang isang feature.

- **Pundasyon ng pamamahala:** iminungkahing CLC governance token; iminungkahing CLC Network Pool; mga fee adapter; quorum, timelock, at mga pundasyon ng pamamahala.
- **Routing at observability:** Router SDK at mga registry API; health dashboard; isang iminungkahing insurance-policy framework; opt-in rebalance intent; prototype ng batch netting.
- **Mga cross-domain risk tool:** HTLC o escrow routing; hiwalay na pinamamahalaang mga guarantor module; rolling, account, at tiered limit preset.
- **Regulated access:** mga deployment-specific na third-party payment service; mga personal na micro-pool; pagtuklas ng compliance service; third-party audit ng mga klase ng voucher.

Ang anumang payment service ay ibibigay ng hiwalay na kinilalang mga third party sa ilalim ng naaangkop na hurisdiksiyon, eligibility, mga bayad, limitasyon, at tuntunin. Hindi mismong nagpapatakbo ng fiat rails ang CLC App at mga contract ng Protocol v1.1.0.

Mananatiling iminungkahi o deployment-dependent ang multi-hop execution, shared insurance, iminungkahing CLC governance token, iminungkahing CLC Network Pool, batch netting, mga personal na micro-pool, at regulated payment service hanggang sa tukuyin ng isang pagpapatupad at ng mga tuntunin nito na aktibo na ang mga ito.
