##
C. KPI Definitions

• Fulfillment Rate (pool p, period t):  FR_{p, t} = Settlements_{p, t} / RedemptionsRequested_{p, t}

• Redemption Latency (SLA):  median time(issue→redeem) with 90th percentile cap

• Reserve Adequacy (voucher v):  RA_{v} = Vault_{v} / RequiredReserves_{v}  (policy function)

• Limit Utilization (voucher v):  LU_{v, t} = Usage_{v, t} / Cap_{v, t}

• Routing Pass Rate:  RPR_t = SuccessfulRoutes_t / AttemptedRoutes_t

• Avg Hop Count:  H̄_t = (Σ routes hop_count) / routes

• Guarantor Recovery:  GR_t = RecoveredFromBonds_t / ClaimsPaid_t

• Protocol Revenue:  PR_t = PoolFees_t + RoutingFees_t + NetworkRake_t

• Net LP Credit Access (program x):  CA_x = (FeesToLP_x − InsuranceHaircuts_x) / AvgStake_x (annualized)

• Governance Timeliness:  TTA = median(time→alarm), TTP = median(time→pause), TLK = timelock adherence %
