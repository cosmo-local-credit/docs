# 15. Roadmap (indicative)

## **15.1 Kasalukuyang pundasyon**

Pinapatakbo ng GEF ang CLC App sa `cosmolocal.credit` sa Gnosis Chain. Nagbibigay ang App ng sinusuportahang account at wallet access, pampublikong Market catalog, at mga interface para sa token, Voucher, Offering, Want, Commitment Pool, transfer, direct Pool swap, at routed exchange.

Ibinibigay ng Protocol v1.1.0 ang kasalukuyang contract foundation: `GiftableToken`, direct `SwapPool` execution, mga opsyonal na registry, valuation module, Pool token-balance cap, Pool fee, karagdagang protocol fee, at isang quote-only na Solidity `SwapRouter`.

Ibinibigay na ngayon ng CLC Core ang same-chain routing at observability foundation ng pampublikong App: reconciled graph discovery, mga route na hanggang tatlong Pool swap, pinned-block quote, per-hop bound at fee, simulation ng buong batch, nilagdaang atomic Calibur execution, relay tracking, settlement reconciliation, pinagsamang receipt, at operational metric. Nakasalalay pa rin ang availability sa interface, sinusuportahang wallet at token behavior, naka-deploy na kontrata, inventory, configuration, freshness ng service, estado ng network, eligibility, provider, jurisdiction, at inilathalang tuntunin ng issuer o Pool.

## **15.2 Mga proposed milestone**

Mga direksiyon sa disenyo ang mga milestone na ito, hindi release number, petsa ng delivery, o pangakong ilulunsad ang isang feature.

- **Governance Foundation:** proposed CLC governance token; proposed CLC Network Pool; mga fee adapter; quorum, timelock, at pundasyon ng governance.
- **Routing & Observability:** palawakin sa iba pang profile ang kasalukuyang route at receipt interface; maglathala ng health dashboard at service-level reporting; bumuo ng insurance-policy framework; magdisenyo ng opt-in rebalance intent; at mag-prototype ng batch netting.
- **Cross-Domain Risk Tools:** HTLC o escrow routing; hiwalay na pinamamahalaang guarantor module; rolling, account, at tiered limit preset.
- **Regulated Access:** deployment-specific na third-party payment service; personal micro-pool; discovery ng compliance service; third-party audit ng mga klase ng Voucher.

Ang anumang payment service ay ibibigay ng hiwalay na tinukoy na third party sa ilalim ng naaangkop na jurisdiction, eligibility, fee, limit, at terms. Hindi mismong nagpapatakbo ng fiat rail ang CLC App at mga kontrata ng Protocol v1.1.0.

Nananatiling proposed o deployment-dependent ang cross-domain multi-hop execution, automatic Pool rebalancing, shared insurance, proposed CLC governance token at proposed CLC Network Pool, batch netting, personal micro-pool, at regulated payment service hanggang sa tukuyin ng isang implementation at ng namamahalang terms nito na aktibo ang mga ito. Kasalukuyang feature ang same-chain participant-initiated routing sa pampublikong CLC App.
