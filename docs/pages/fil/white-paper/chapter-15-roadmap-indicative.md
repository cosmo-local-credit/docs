## **15. Roadmap (indicative)**

### **15.1 Kasalukuyang pundasyon**

GEF ay nagpapatakbo ng CLC App sa `cosmolocal.credit` sa Gnosis Chain. Nagbibigay ang App ng suportadong pag-access sa account at wallet, isang pampublikong katalogo ng Pamilihan, at mga interface para sa mga token, voucher, Offerings, Wants, mga Pool ng Pangako, paglipat, direktang Pool swaps, at naka-routed na palitan.

Protocol v1.1.0 ay nagbibigay ng kasalukuyang kontrata pundasyon: `GiftableToken`, direktang `SwapPool` execution, optional registries, valuation modules, Pool token-balance caps, Pool fees, isang karagdagang bayad sa protocol, at isang quote-only Solidity `SwapRouter`.

Ang CLC Core ngayon ay nagbibigay ng same-chain routing at observability na pundasyon ng pampublikong App: pinagkasunduan ang graph discovery, mga ruta ng hanggang sa tatlong Pool swaps, pined-block quotes, per-hop bounds at fees, kumpletong-batch simulation, naka-sign atomic Calibur execution, relay tracking, settlement reconciliation, grouped receipts, at operational metrics. Ang kakayahang magamit ay nakasalalay pa rin sa interface, suportadong wallet at pag-uugali ng token, mga naka-deploy na kontrata, imbentaryo, pagsasaayos, pagiging bago ng serbisyo, estado ng network, pagiging karapat-dapat, mga tagapagbigay, hurisdiksyon, at nai-publish na mga tuntunin ng tagapag-isyu o Pool.

### **15.2 Proposed milestones**

Mga direksiyon sa disenyo ang mga milestone na ito, hindi mga numero ng release, petsa ng paghahatid, o pangakong ilulunsad ang isang feature.

- **Pundasyon ng pamamahala:** iminungkahing CLC governance token; iminungkahing CLC Network Pool; mga fee adapter; quorum, timelock, at mga pundasyon ng pamamahala.
- ** Routing & Observability:** palawakin ang kasalukuyang ruta at pagtanggap ng mga interface sa karagdagang mga profile; maglathala ng mga dashboard ng kalusugan at pag-uulat sa antas ng serbisyo; bumuo ng isang balangkas ng patakaran sa seguro; disenyo ng mga intensyon ng opt-in rebalance; at prototype na batch netting.
- **Mga cross-domain risk tool:** HTLC o escrow routing; hiwalay na pinamamahalaang mga guarantor module; rolling, account, at tiered limit preset.
- **Regulated access:** mga deployment-specific na third-party payment service; mga personal na micro-pool; pagtuklas ng compliance service; third-party audit ng mga klase ng voucher.

Ang anumang payment service ay ibibigay ng hiwalay na kinilalang mga third party sa ilalim ng naaangkop na hurisdiksiyon, eligibility, mga bayad, limitasyon, at tuntunin. Hindi mismong nagpapatakbo ng fiat rails ang CLC App at mga contract ng Protocol v1.1.0.

Ang cross-domain multi-hop execution, automatic Pool rebalancing, shared insurance, ang iminungkahing CLC governance token at iminungkang CLC Network Pool, batch netting, personal na micro-mga Pool, at regulated payment services ay nananatiling ipinapayo o nakasalalay sa deployment hanggang sa isang pagpapatupad at mga tuntunin ng pamamahala nito ay makilala silang aktibo. Ang same-chain participant-initiated routing sa pampublikong CLC App ay kasalukuyang.
