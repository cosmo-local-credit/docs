## **17. Legal & Compliance Note**

CPP coordinates Tokens, Vouchers, Pools, and Swaps whose legal treatment depends on their design, marketing, use, responsible parties, and jurisdiction. A Voucher may be treated as a contractual claim, prepaid service, gift card, payment instrument, credit arrangement, security, taxable supply, or another regulated product in a particular context. Nothing in this White Paper is legal, tax, investment, credit, or financial advice. Issuers, Pool Stewards, service providers, and users must determine and comply with the laws that apply to them before acting.

Use of the public PWA is governed by the [Terms of Service](/governance/terms). Grassroots Economics Foundation (GEF) operates that App and supporting infrastructure. Unless GEF expressly assumes a role in transaction-specific terms, it is not an issuer, Pool Steward, custodian, lender, borrower, broker, guarantor, redeemer, adviser, insurer, or party to obligations between users. Neither GEF nor the protocol guarantees legality, value, liquidity, convertibility, redemption, or performance.

Where fiat on/off-ramps are offered, they must be provided under the responsible provider's own terms and applicable law. The presence of a connector in a CLC interface does not mean that GEF or a Pool operates the underlying banking, e-money, card, or money-transmission service.

### **17.1 Voucher Class Matrix (Policy Template)**

This illustrative matrix can help a Pool disclose how it lists and monitors Voucher classes. It is not a legal classification, default guarantee, or representation that every field is implemented by the App.

| Field | Required disclosure or policy choice |
| --- | --- |
| Class Name | For example: food, transport, labor, storage, cash-equivalent, community service, or equipment use. |
| Legal Treatment | The classification reached by the responsible issuer or Steward after jurisdiction-specific review; include material restrictions and required registrations or approvals. |
| Redemption Terms | Issuer identity, offering, quantity or supply, valuation basis, capacity limits, expiry, geography, timing, procedure, fees, restrictions, and material-change process. |
| Identity / Attestation | None, attestation, or identity verification, as lawfully required for the relevant class, value, user, or jurisdiction. |
| Fees | All issuer, Pool, protocol, network, and third-party fees displayed before the relevant action; there is no universal fee tier. |
| Certification / Provenance | If used: source, methodology, scope, expiry, revocation, transferability, and effect on listing or risk treatment. |
| Index Source | Static schedule, OracleQuoter, or governance-updated source; publish method, authority, cadence, bounds, and failure mode. |
| Limits | Per-Voucher, per-account, global, or rolling-window limits, if configured; disclose how limits can change or pause activity. |
| Guarantee / Reserve | None unless expressly offered. If offered, identify the responsible party, assets, funding, caps, triggers, exclusions, evidence, claim process, and applicable terms. |
| Fiat / Stablecoin Provider | Identify the independent provider, supported jurisdictions, eligibility, fees, custody model, and compliance requirements. |
| Disclosures | Plain-language issuer, offering, redemption, risk, complaint, and remedy information displayed before acquisition where required. |

Pools should declare the class used, enforce their published settings, disclose conflicts and material changes, and avoid representing optional controls as universal protections.

### **17.2 Minimum Voucher Information**

An issuer should publish, and keep current:

* **who:** issuer name, contact details, and responsible legal person or organization;
* **what:** the good, service, benefit, or other offering; unit, quantity, supply, valuation basis, and capacity;
* **where:** redemption locations, service area, and lawful geographic restrictions;
* **when:** issue date, expiry, operating times, fulfillment timing, and any claim window;
* **how:** redemption steps and acceptable evidence;
* **cost:** issuer, Pool, protocol, network, and third-party fees;
* **limits:** per-user, per-transaction, supply, or other material limits;
* **fallback:** complaint process and any remedy, guarantor, reserve, or payout path that is actually offered; and
* **rights:** any permitted copying, adaptation, redistribution, transfer, suspension, or cancellation and the process for material changes.

### **17.3 Vouchers, Pools, Swaps, and Credit**

**Voucher.** A Voucher records an issuer's published commitment. The issuer—not GEF merely because it operates the App—is responsible for honoring that commitment. A Holder must assess the issuer, redemption terms, restrictions, expiry, and risks. There is no platform-wide cash-out, stable value, liquidity, or redemption guarantee.

**Pool.** A Commitment Pool is a contract system governed by its Pool Steward's published rules for admissions, listed assets, valuation, fees, limits, inventory, pauses, configuration, contributions, provenance, conflicts, and any reserve or guarantee. The Steward is responsible for those rules and for any protection it expressly advertises. Listing does not mean that GEF endorses, values, insures, or guarantees an asset.

**Ordinary Swap.** A Swap is governed by the displayed quote and bounds, Pool rules, smart contracts, network conditions, and applicable law. Asset direction alone does not make one party a lender or borrower, and an ordinary Swap or Voucher redemption does not by itself create, transfer, repay, or discharge a loan.

**Express credit facility.** Credit mechanics apply only when a Pool or other responsible party expressly presents a transaction as a repayable Advance or Swap Loan and supplies transaction-specific terms. Those terms must identify the parties and disclose the advance and repayment amounts, due date, interest or fees, collateral use, changes in the creditor or Holder, assignment, partial settlement, redemption at any stated Full Value, evidence of discharge, default, and lawful remedies. No network-wide interest rate, repayment period, or redemption-to-repayment rule is implied.

### **17.4 Access, Risk, and Local Law**

Features or asset classes may be restricted, paused, or unavailable based on location, sanctions, eligibility, law, contract state, inventory, limits, security concerns, or third-party services. Identity checks, attestations, consumer disclosures, tax treatment, employment rules, financial-services permissions, or other safeguards may be required. Interface suspension or delisting does not necessarily erase or reverse public-blockchain transactions, balances, contracts, or third-party copies.

Users remain responsible for Wallet credentials, transaction review, taxes, and the legality of their own issuance, Pool operation, acquisition, redemption, and other activity. Smart-contract defects, network congestion or reorganization, OracleQuoter failures, malicious or mistaken configuration, key compromise, issuer non-performance, illiquidity, stablecoin or provider failure, and regulatory change can cause delay or permanent loss. Optional limits, reserves, guarantees, insurance, audits, and governance controls may reduce selected risks but do not eliminate them.


---
