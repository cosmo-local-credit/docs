## **7. Proposed CLC stewardship and governance assets**

This chapter presents one optional future governance and liquidity-coordination design. The proposed CLC governance token, stCLC, sCLC, governance vault, insurance fund, Waterfall, gauges, mandates, fee-credit windows, and external-market programs are not part of the current CLC App or Protocol v1.1.0. Each would require an implementation, accountable operator, published policy and terms, security review, and applicable legal approval.

CPP does not require this token model. Compatible deployments could instead use cooperatives, public agencies, federations, multisigs, services, or other accountable structures.

### **7.1 Purpose**

If adopted, the proposed governance layer could:

- coordinate shared registries and route services;
- allocate approved liquidity mandates across independently governed Pools;
- administer an optional, expressly scoped, funded coverage program;
- maintain common infrastructure and observability;
- recognize contributors under published eligibility and anti-gaming rules; and
- preserve review, appeal, transparency, and credible exit as participation grows.

### **7.2 Proposed governance-asset model**

The design contains three distinct proposed assets:

1. **Proposed CLC governance token:** a transferable base governance asset under adopted issuance, custody, voting, and compliance rules.
2. **stCLC:** a non-transferable vote-escrow receipt minted when the proposed CLC governance token is locked. It would represent time-bounded governance power and could permit disclosed delegation.
3. **sCLC:** an epoch-scoped authorization or incentive asset issued under policy. It could support capped fee-credit access or approved liquidity and routing incentives and could expire or be burned at epoch end.

Neither stCLC nor sCLC would be equity, a dividend, a residual claim, a promise of return, or a community voucher. An adopted policy could set sCLC issuance and fee-credit access to zero in any epoch.

Governance lockups, minimum durations, cooldowns, delegation, concentration caps, and critical-action thresholds would be published before use. Unlocked proposed CLC governance tokens would not vote under this design.

#### **7.2.1 Illustrative supply and allocation**

The illustrative total proposed CLC governance-token supply is **500,000,000**. This is a design parameter, not a current issuance, offer, valuation, or promise of liquidity.

An illustrative allocation is:

- **15% — Grassroots Economics Foundation:** permanently staked, non-transferable, and bound to an identified GEF multisig under published signer and rotation rules.
- **15% — core team and early partners:** staked during a policy-set cliff and linear vesting period of 24 months, with voting and transfer rules disclosed in advance.
- **30% — private endowments:** recognition for early contributors providing approved network liquidity, with policy-set vesting of 24 months.
- **40% — public-liquidity reserve:** held in a timelocked governance vault for optional external-market and accessibility programs.

Under the illustrative public-liquidity controls:

- no more than 10% of total supply would be active across external venues at one time;
- each deployment would expire after 90 days unless renewed through the adopted process;
- liquidity positions and any position tokens would remain under disclosed governance control; and
- proposed CLC governance tokens used in liquidity positions would not vote unless locked under the same rules as other voting tokens.

A future launch could begin with a disclosed multisig and transition only after separately approved hardening milestones, such as independent audits, monitoring, incident runbooks, and tested pause and fork procedures. Every adopted parameter and change process would be published separately.

#### **7.2.2 Availability and endowment stages**

A future endowment program could use staged contribution windows and a published reference value for intake and budgeting. That reference would not be a promise of market price, appreciation, repayment, or exit.

Contribution terms would state whether assets are donated, endowed, withdrawable, or repayable; who controls them; their permitted use; lockups; loss allocation; reporting; and exit conditions. Large contributions could face voting caps or diminishing governance weight.

Any external-market liquidity would require a separate decision identifying venues, responsible operators, assets, caps, timing, conflicts, risk controls, reporting, and termination. The policy would not target or guarantee a price.

#### **7.2.3 Proposed impact-seeding program**

A future program could allocate part of the governance vault to contributors who place assets into designated Commitment Pools and measurably improve exchange access and confirmed issuer fulfillment.

An adopted eligibility policy would:

1. identify approved Pools, assets, minimum duration, and lockup terms;
2. define productive contribution using executed-swap evidence and separately evidenced presentment, fulfillment, and discharge;
3. measure marginal contribution rather than total value locked alone;
4. exclude self-dealing and circular wash activity;
5. apply per-entity caps and diminishing returns; and
6. provide an observation, dispute, and correction window before final allocation.

Any grant would remain subject to the program's published terms, vesting, eligibility, compliance, and loss rules.

### **7.3 Proposed voting, incentives, and fee access**

Under this design, stCLC holders could vote on eligible Pools, route-service mandates, shared budgets, or other adopted proposals. A curated gauge system could translate votes into bounded sCLC incentives for eligible liquidity or routing operators.

The measurement policy would keep executed swaps and issuer fulfillment separate. It would not reward quoted but unexecuted routes, unresolved presentments, self-dealing, or total value locked without evidence of useful activity.

An adopted governance process could also publish an epoch fee-credit budget. Eligible stCLC holders might receive sCLC authorizing capped, time-limited swaps from designated fee-holding Pools into allowlisted assets or programs. This would be policy-gated access to available inventory, not passive income or ownership of the fee-holding Pool.

#### **7.3.1 Service-fee enforcement and profile choice**

A future registry profile could require participating Pools or route services to use a compatible fee adapter or hook. The profile might refuse discovery, routing, or program support when the required receipt does not prove fee collection.

Names such as **PoolFactory** or **FeeHook** describe possible future modules; they are not Protocol v1.1.0 contracts. Any implementation would disclose the code, addresses, controllers, recipients, rates, eligible transactions, failure handling, and audit status.

Enforcement would be profile-specific. A Pool excluded by one profile could continue operating locally or join another compatible registry if its contracts and dependencies remained functional. Clients should expose available profiles and show applicable fees before authorization.

#### **7.3.2 sCLC budget and optional external-float controls**

After funding adopted higher-priority budgets, a future process could publish an epoch fee-credit budget `F_epoch`, including zero. A policy might assign a participant limit in proportion to stCLC voting power:

limit_user_epoch = F_epoch × (stCLC_user / stCLC_total).

Every window would remain subject to allowlists, caps, inventory, eligibility, incident rules, and applicable law.

A separate policy could authorize a capped, time-weighted acquisition of the proposed CLC governance token only to reduce a measured external governance-attack surface. It would require:

- a published trigger based on external float over a stated period;
- a maximum share of realized, eligible fees and venue volume;
- time-weighted execution with no exact timing announcement;
- an automatic stop when adopted coverage or operating thresholds are not met;
- retirement or placement of acquired tokens in a disclosed non-voting account; and
- an explicit statement that the program does not target or guarantee a price and does not affect issuer fulfillment.

The policy could remain disabled indefinitely.

#### **7.3.3 Portfolio Pools and attestations**

A **portfolio Pool** would be an ordinary Commitment Pool curated around a mission or service domain. Its Pool Steward could be an individual, cooperative, community group, public agency, federation, multisig, service operator, or another accountable structure.

Support could occur through:

1. direct contributions under the Pool's published terms;
2. time-bounded liquidity mandates approved through the adopted governance process; or
3. sCLC-directed access to a bounded post-Waterfall budget when that mechanism is enabled.

Portfolio Pools would remain independently governed and could use shared or independent registries.

Certifications could inform admission or risk treatment but would not create entitlement to fees, profit, or residual assets. A deployment might use:

- **registry-bound attestations** from an identified verifier applying a published method; or
- **verification-service vouchers** representing a redeemable commitment to perform a stated audit or assessment.

The Pool would disclose how an attestation affects admission, exchange-rate methods, limits, or eligibility and how errors, expiry, conflicts, and appeals are handled.

### **7.4 Proposed Waterfall and budgets**

The proposed Waterfall would allocate only realized, eligible receipts under an adopted governance process. It would distinguish:

- **cash-eligible assets (`E_cash`):** allowlisted fungible assets that may be used or converted under policy for cash-denominated obligations; and
- **in-kind assets (`E_kind`):** vouchers or other assets that may support in-network exchange but do not count toward cash-denominated coverage or operating obligations unless actually converted.

A conversion policy would identify authorized operators, assets, venues, price sources, time windows, slippage bounds, caps, conflicts, records, and incident procedures. Treasury conversion would not determine an issuer's voucher obligation or a Pool's exchange-rate method.

An illustrative priority order is:

1. **Funded coverage target:** build any adopted reserve or proposed insurance fund to its disclosed target for defined covered events.
2. **Core operations:** fund a capped, disclosed budget for legal work, education, communications, infrastructure, audits, and observability.
3. **Liquidity mandates:** allocate approved assets to stated Pool or route-service purposes under caps and sunset review.
4. **Optional external-float control:** fund only when its published trigger and higher-priority thresholds are satisfied; otherwise allocate zero.
5. **Proposed fee-credit budget:** allocate any approved remainder to designated fee-holding Pools and publish `F_epoch`, which may be zero.

Budget decisions could consider confirmed fulfillment, covered exposure, eligible reserves, limit utilization, executed routes, concentration, incidents, and guarantor performance. Each metric would follow the evidence and cohort rules in Appendix C.

A possible contributor flow would be:

1. contributors transfer eligible assets under separately adopted endowment or program terms;
2. eligible participants receive and, where permitted, lock proposed CLC governance tokens to obtain stCLC;
3. realized eligible rake or service-fee receipts enter the Waterfall;
4. the Waterfall funds adopted priorities in order; and
5. only an enabled post-Waterfall policy issues sCLC or opens a capped fee-credit window.

No step creates ownership, repayment, withdrawal, coverage, reward, or governance rights beyond those expressly stated in the applicable terms.
