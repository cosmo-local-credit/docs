## **14. KPI और स्वास्थ्य संकेतक**

Deployment को KPI तभी प्रकाशित करना चाहिए जब वह event, source, cohort या period, unit, valuation method और timestamp, exclusions, correction policy, off-chain evidence और data-quality limits परिभाषित कर सके।

मौजूदा route services खोज, कोटेशन, execution, settlement और reconciliation events माप सकती हैं। Voucher fulfillment और social outcomes के लिए अब भी अलग evidence चाहिए। सुझाए गए measures में ये शामिल हैं:

- valid redemption presentments;
- cohort-based fulfillment rate;
- discharge completeness;
- presentment-to-fulfillment latency;
- acquisition-to-presentment holding duration;
- तय method के अंतर्गत outstanding eligible commitments;
- completed direct Pool-swap volume;
- route-discovery attempts और उपलब्ध candidate routes की संख्या;
- authoritative route-quotation attempts, outcomes, depth, expiry और quoted fees;
- routed-exchange attempts, confirmed और reverted routes तथा failure reasons;
- whole-route input और output volume, per hop नहीं बल्कि हर route पर एक बार गिना हुआ;
- हर hop की settled amounts, Pool fees, protocol fees और intermediate remainders;
- insufficient liquidity, Pool token-balance caps, unsupported dependencies और wallet restrictions सहित route rejections;
- graph freshness, reconciliation lag, corrections और failures;
- measured Pool inventory;
- Pool token-balance-cap utilization;
- discovery success और quotation pass rates, route execution और settlement rates से अलग;
- eligible reserves divided by explicitly covered exposure;
- identified policy के अंतर्गत guarantor claims और recoveries;
- मौजूदा per-hop Pool और protocol fees, किसी proposed network rake या future service fee से अलग;
- governance detection, decision, pause, repair और closure times;
- complaints, disputes, corrections और remedies; और
- अलग से evidenced social या ecological outcomes।

On-chain transaction data अपने-आप identity, issuer performance, satisfaction, causation, community health या social impact सिद्ध नहीं करता। इन claims को अपनी method और evidence चाहिए।

देखिये [परिशिष्ट सी](/hi/white-paper/appendix-c-kpi-definitions) प्रस्तावित माप विनिर्देश के लिए।
