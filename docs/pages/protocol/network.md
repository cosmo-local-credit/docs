# Network Architecture

CLC deployments connect **many vouchers** and **many pools** through shared registries, a protocol fee controller, and routing logic.

Each deployment chooses its own registry roots, routing profile, fee recipient, and governance controls. Any institution or governance body can operate a registry of Commitment Pools and charge transparent fees for services such as routing, clearing, monitoring, liquidity support, or insurance coordination. Those responsibilities may sit with a nonprofit foundation, cooperative, holding company, public agency, community group, multisig, service operator, or another accountable structure.

## Network Diagram

The diagram shows the network-level view — pools as single nodes, vouchers listed across them, and a multi-hop route:

![CLC Network Architecture](/mermaid/mermaid-diagram-2026-02-06-101821.png)

**How to read it:** Vouchers (purple) are standalone ERC20 tokens — each issued by a different community. A single voucher can be **listed in multiple pools**, which is what enables routing. Because every pool's `SwapPool` exposes the same interface, any route finder can discover paths and execute multi-hop swaps: whenever a voucher appears in two pools, a route exists between them. The **overlapping token** (cUSD in this example) acts as a bridge — Clinic Voucher swaps to cUSD in Pool C, then cUSD swaps to Transport Credit in Pool A. Stablecoins and widely-accepted vouchers naturally become bridges because they appear in many pools. Every pool can send a share of its swap fees to the **Protocol Fee Controller**, which routes them to the configured recipient for registry, routing, clearing, safety, operations, and liquidity support.

## Pool Internals Diagram

This diagram zooms into a single pool to show the contract composition — the SwapPool at the center, with its injected dependencies:

![Pool Internals](/mermaid/mermaid-diagram-2026-02-06-101922.png)

**How to read it:** The **Pool Steward** (owner) deploys and configures the pool by injecting its dependencies — a Token Registry, Quoter, FeePolicy, and Limiter. Once configured, these can be progressively **sealed** to become immutable. During a swap, the SwapPool calls each dependency in sequence: check the token is listed (Registry), get the quote (Quoter), calculate fees (FeePolicy), verify limits (Limiter), and extract the protocol share (Protocol Fee Controller). Pool fees accumulate internally and are collected by the steward to the Fee Address.

For the conceptual design behind these contracts — including roles, governance, the fee waterfall, and how pools federate into a network — see the [White Paper](/white-paper).
