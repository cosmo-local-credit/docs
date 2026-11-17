# 15. रोडमैप (सूचक)

## **15.1 वर्तमान आधार**

GEF Gnosis Chain पर `cosmolocal.credit` का CLC App संचालित करता है। ऐप account और wallet access, सार्वजनिक Market catalog और tokens, vouchers, Offerings, Wants, Commitment Pools, transfers, direct Pool swaps तथा routed exchanges के लिए समर्थित interfaces देता है।

Protocol v1.1.0 मौजूदा contract foundation देता है: `GiftableToken`, सीधे `SwapPool` execution, वैकल्पिक registries, valuation modules, Pool token-balance caps, Pool fees, अतिरिक्त protocol fee और केवल कोटेशन देने वाला Solidity `SwapRouter`।

CLC Core अब सार्वजनिक App की समान-चेन routing और observability foundation देता है: reconciled graph discovery, अधिकतम तीन Pool swaps वाले routes, fixed-block quotations, per-hop bounds और fees, full-batch simulation, signed atomic Calibur execution, relay tracking, settlement reconciliation, grouped receipts और operational metrics। उपलब्धता अब भी interface, समर्थित wallet और token behavior, deployed contracts, inventory, configuration, service freshness, network state, eligibility, providers, अधिकार क्षेत्र और प्रकाशित issuer या Pool terms पर निर्भर है।

## **15.2 प्रस्तावित मील के पत्थर**

ये नामित मील के पत्थर डिजाइन निर्देश हैं, रिलीज नंबर, डिलीवरी की तारीखें या प्रतिबद्धताएं नहीं जो एक सुविधा लॉन्च करेगी।

- **Governance Foundation:** प्रस्तावित CLC governance token; प्रस्तावित CLC Network Pool; fee adapters; quorum, timelock और governance foundations।
- **Routing & Observability:** मौजूदा route और receipt interfaces को अतिरिक्त profiles तक बढ़ाना; health dashboards और service-level reporting प्रकाशित करना; insurance-policy framework विकसित करना; opt-in rebalance intents design करना; और batch netting का prototype बनाना।
- **Cross-Domain Risk Tools:** HTLC या एस्क्रो रूटिंग; अलग से नियंत्रित गारंटर मॉड्यूल; रोलिंग, खाता और स्तरबद्ध सीमा पूर्वनिर्धारित।
- **विनियमित पहुंचः** तैनाती-विशिष्ट तृतीय-पक्ष भुगतान सेवाएं; व्यक्तिगत सूक्ष्म पूल; अनुपालन-सेवा का पता लगाना; वाउचर वर्गों के तीसरे पक्ष के ऑडिट।

किसी भी भुगतान सेवा को लागू अधिकार क्षेत्र, पात्रता, शुल्क, सीमाएं और शर्तों के तहत अलग से पहचाने गए तृतीय पक्ष द्वारा प्रदान किया जाएगा।CLC App और Protocol v1.1.0 अनुबंध स्वयं फिएट रेल का संचालन नहीं करते हैं।

Cross-domain multi-hop execution, automatic Pool rebalancing, साझा insurance, प्रस्तावित CLC governance token और प्रस्तावित CLC Network Pool, batch netting, personal micro-Pools तथा regulated payment services तब तक प्रस्तावित या तैनाती-निर्भर हैं, जब तक implementation और उसकी governed terms उन्हें सक्रिय न बताएँ। सार्वजनिक CLC App में समान-चेन participant-initiated routing मौजूदा क्षमता है।
