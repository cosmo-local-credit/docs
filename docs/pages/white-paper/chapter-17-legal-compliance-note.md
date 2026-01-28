## **17. Legal & Compliance Note**

CPP coordinates redeemable commitments. Some vouchers may fall under financial or consumer-protection rules depending on jurisdiction. Deployments should include local legal review, disclosures, and—where required—geofenced interfaces and attestation/KYC hooks for off-ledger redemptions.

Where fiat on/off-ramps are offered, they are provided by regulated third-party partners (e.g., banks, licensed e-money/payment institutions, or card-issuing/payment processors); the DAO does not itself custody fiat or operate money-transmission rails.

**17.1 Voucher Class Matrix (Policy)**

This matrix standardizes how voucher classes are listed, monitored, and governed across pools. Each class must be declared in pool metadata and surfaced in receipts.


<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Options / Policy</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Class Name</strong>
   </td>
   <td>(eg, Staple Food, Transport Service, Labor Hour, Storage, Cash-Equivalent Stable, Community Stable, Tool/Equipment Use)
   </td>
  </tr>
  <tr>
   <td><strong>Legal Stance</strong>
   </td>
   <td>Redeemable commitment / service credit. If cash-equivalent (eg, stablecoin redemption), treat as payment instrument exposure with additional attestations/geofencing as required.
   </td>
  </tr>
  <tr>
   <td><strong>Redemption SLA</strong>
   </td>
   <td>Target and max (eg, Target ≤ 24h; Max ≤ 72h). Include redemption venues/contacts and fallback guarantee.
   </td>
  </tr>
  <tr>
   <td><strong>KYC / Attestation</strong>
   </td>
   <td>None / Light Attestation / Full KYC (as required by jurisdiction, especially for cash-equivalent or high-value redemptions).
   </td>
  </tr>
  <tr>
   <td><strong>Fee Tier</strong>
   </td>
   <td>Low (30–50 bps), Medium (50–80 bps), High (80–100 bps) depending on operational/credit risk.
   </td>
  </tr>
  <tr>
   <td><strong>Certification / Attestation Policy</strong>
   </td>
   <td>If used: accepted attestation issuers, certificate scope + expiry + revocation rules, whether certificates are non-transferable/registry-bound, and how attestations affect listing eligibility, haircuts, limits, and insurance qualification.
   </td>
  </tr>
  <tr>
   <td><strong>Index Source</strong>
   </td>
   <td>Static schedule / Medianized oracle / Governance-updated feed. Publish source, cadence, and failure mode (safe default).
   </td>
  </tr>
  <tr>
   <td><strong>Limit Tier</strong>
   </td>
   <td>Tier 1 (tight), Tier 2 (moderate), Tier 3 (expanded). Limits apply per voucher, optionally per-account and globally, over rolling windows.
   </td>
  </tr>
  <tr>
   <td><strong>Guarantor Requirement</strong>
   </td>
   <td>None / Recommended / Required. Specify bond size, triggers, and payout path.
   </td>
  </tr>
  <tr>
   <td><strong>Off-Ramp Policy</strong>
   </td>
   <td>For cash-equivalent stables: approved stable list + approved off-ramp provider list (by jurisdiction), required attestations/KYC tier, timelocks on changes, dispute window, and incident pause criteria. Off-ramp providers may include banks, licensed e-money/payment institutions, and card-issuing/payment processors (on major card rails). For non-cash vouchers: multi-venue redemption options and local contacts..
   </td>
  </tr>
  <tr>
   <td><strong>Disclosures</strong>
   </td>
   <td>Plain-language “who/what/where/when” + fallback, embedded in voucher metadata and displayed in all receipts.
   </td>
  </tr>
</table>


Pools must (i) declare the class used; (ii) enforce matching Fee/Limit/Index settings; (iii) publish any exceptions with justification and timelock.

**17.2 Voucher Metadata Schema (minimum)**

• who: issuer legal name + contact

• what: claim description (plain language), unit, quantity

• where: redemption venues / geofence

• when: SLA target & max window

• proof: acceptable evidence at redemption (QR receipt, ticket #, ID type)

• fallback: guarantor / payout path if not fulfilled

• class: matches declared Voucher Class Matrix entry

• fees: applicable pool/network fees shown to user

• limits: per-account/global windows (human-readable)

• disclosures: legal stance, risks, dispute hooks


**17.3 Vouchers and Pools as Legal Instruments (Plain-Language)**

Voucher: A voucher is a redeemable commitment—a defined claim on future delivery of a good/service (and in some classes, redemption into a cash-equivalent). It functions like a service credit or gift-card style claim with an explicit redemption SLA, venues, and fallback/recourse terms.

**Not a Bank Deposit / Not E-Money.** Vouchers and pool receipts are **redeemable commitments** (service/goods claims) and **not** bank deposits or e-money. No interest is paid; **no guarantee of principal**. Redemption is governed by **published SLAs/venues** and any **disclosed** guarantees.

Pool: A Commitment Pool is not merely software; it is a stewarded contract suite with published market terms: what vouchers are accepted (curation), how they are valued (index policy), how flows are limited (limit windows/caps), what fees apply, what inventory/reserve policy exists, and what guarantee/guarantor framework backs the listings. The pool steward is responsible for these published terms and any guarantees they advertise.

**Restricted Jurisdictions.** Access to certain voucher classes and/or UI features may be **restricted or geofenced**; additional **attestations/KYC** may be required for cash-equivalents. The DAO may programmatically **disable** sCLC swap windows or certain routes to comply with policy.

CLC DAO: The CLC DAO provides network governance, routing standards, and optional shared insurance policies. It is not automatically a guarantor of any pool or voucher unless explicitly stated in the relevant pool terms and DAO policy.


---
