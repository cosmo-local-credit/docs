# Governance Mechanics

This page describes governance options for CLC-compatible networks, not a single required legal or organizational form.

Any institution or governance body can set up a CLC-compatible registry of Commitment Pools and charge transparent fees for services such as routing, clearing, monitoring, liquidity support, or insurance coordination. CLC governance can be operated by many accountable structures, including nonprofit foundations, cooperatives, community groups, federations, companies, multisigs, public agencies, or on-chain governance systems. Sarafu Network, for example, is managed by the nonprofit Grassroots Economics Foundation. Where on-chain voting is used, the network can use **OpenZeppelin Governor** smart contracts and the **Tally** platform.

## Overview

The governance infrastructure should make decisions transparent, auditable, and bounded by published risk policies. Depending on the deployment, registry updates, fee-recipient changes, routing/clearing fee schedules, liquidity mandates, and emergency actions may be executed by on-chain voting, multisig approvals, cooperative resolutions, board approvals, public-agency mandates, or other accountable processes.

## Technical Stack

### OpenZeppelin Governor

The smart contract layer may implement OpenZeppelin's battle-tested [Governor](https://docs.openzeppelin.com/contracts/4.x/api/governance) smart contracts when token voting is appropriate.

### Tally Platform

Tally can serve as an interface for token-governance participation where an OpenZeppelin Governor deployment is used.

For more details on proposal types and governance controls, refer to the White Paper's [Governance Mechanics chapter](/white-paper/chapter-11-governance-mechanics).
