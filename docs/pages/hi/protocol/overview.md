# प्रोटोकॉल

Protocol v1.1.0 के अनुबंध श्वेत पत्र के [अध्याय 1](/hi/white-paper/chapter-01-commitment-pooling-protocol-cpp-the-core-primitive) में बताए गए **Commitment Pooling Protocol (CPP)** के लिए ब्लॉकचेन पर काम करने वाले आधार देते हैं। यह संदर्भ सार्वजनिक [`v1.1.0` release](https://github.com/cosmo-local-credit/protocol/tree/v1.1.0) के अनुसार है।

यहाँ इस्तेमाल की गई उत्पाद परतों, जवाबदेह भूमिकाओं, कार्रवाई के जीवनचक्र, मूल्यों, सीमाओं, शुल्कों और स्थिति संबंधी शब्दों के लिए [अवधारणाएँ और शब्दावली](/hi/introduction/concepts) देखें।

Grassroots Economics Foundation (GEF) [cosmolocal.credit](https://cosmolocal.credit) पर प्रगतिशील वेब ऐप चलाता है। वह ऐप इन अनुबंधों के साथ काम करने का एक तरीका देता है। ऐप और अनुबंध अलग हैं। केवल interface चलाने से GEF किसी वाउचर का जारीकर्ता, पूल प्रबंधक, संरक्षक, गारंटर या उपयोगकर्ता के लेन-देन का दूसरा पक्ष नहीं बनता। ये भूमिकाएँ संबंधित तैनाती, नियंत्रक पतों और जारीकर्ता या पूल की प्रकाशित शर्तों पर निर्भर हैं। [सेवा की शर्तें](/hi/governance/terms) देखें।

## तैनाती का तरीका

स्थिति रखने वाले अधिकतर modules को Solady के `ERC1967Factory` से **ERC-1967 proxy instances** के रूप में शुरू किया जाता है। कई instances एक implementation साझा कर सकते हैं, जबकि उनके मालिक, configuration और storage अलग रहते हैं। तैनाती deterministic salts भी इस्तेमाल कर सकती है, ताकि deployment से पहले पतों का अनुमान लगाया जा सके।

हर contract proxy नहीं है। `DecimalQuoter` और `SwapRouter` स्थिति न रखने वाली सीधी deployments हैं। `RescueVault` और `ERC1967Factory` भी सीधे deploy होते हैं। नीचे बताए गए बाकी stateful modules proxy deployment के लिए बनाए गए हैं।

हर proxy का administrator उसकी implementation बदल सकता है। Proxy administration contract ownership से अलग है और उसे उचित शासन वाले पते को दिया जाना चाहिए। Pool की configuration seal होने के बाद भी upgrade व्यवहार बदल सकता है। इसलिए उपयोगकर्ताओं को Pool मालिक और proxy administrator दोनों का आकलन करना चाहिए।

EIP-165 समर्थन भी हर contract के लिए अलग है; यह सभी में नहीं है। `GiftableToken`, तीनों quoters, `OracleRelay`, `Limiter`, कई registries और indexes, `Splitter`, `EthFaucet`, `PeriodSimple` और `RescueVault` इसे उपलब्ध कराते हैं। v1.1.0 में `SwapPool`, `SwapRouter`, `FeePolicy`, `ProtocolFeeController` और `CAT` `supportsInterface` उपलब्ध नहीं कराते।

## मुख्य हिस्से

- **GiftableToken** — ERC20 supply, minting, burning और वैकल्पिक expiry की कार्यप्रणाली। जारीकर्ता किसी instance को वाउचर की तरह इस्तेमाल कर सकता है, लेकिन अकेला contract यह तय नहीं करता कि क्या, किससे, कहाँ या किन शर्तों पर भुनाया जा सकता है।
- **SwapPool** — टोकन vault और swap-settlement engine। तैनाती चयन, मूल्यांकन, शुल्क, सीमा और protocol-fee components जोड़ सकती है या समर्थित निर्भरताओं को unset छोड़ सकती है।
- **DecimalQuoter, RelativeQuoter और OracleQuoter** — decimal parity, मालिक द्वारा संचालित relative rates या oracle से निकली rates के लिए बदलकर इस्तेमाल किए जा सकने वाले valuation modules। `OracleRelay` एक बाहरी feed को `OracleQuoter` तक पहुँचा सकता है।
- **FeePolicy और Limiter** — token pair के शुल्क और हर token के लिए Pool balance limits के वैकल्पिक नियम।
- **ProtocolFeeController** — protocol fee की वैकल्पिक और बदली जा सकने वाली दर, प्राप्तकर्ता और सक्रिय स्थिति, जिसे Pool settlement के समय देख सकता है।
- **TokenUniqueSymbolIndex, AccountsIndex और ContractRegistry** — token, account और address खोजने के हिस्से। `CAT` किसी account की settlement-token preferences का क्रम दर्ज करता है।
- **SwapRouter** — प्रस्तावित कई-Pool वाले path पर exact-input और exact-output की केवल quote गणनाएँ। यह tokens को अपने पास नहीं रखता और swaps नहीं करता।
- **Splitter, EthFaucet, PeriodSimple और RescueVault** — वितरण, gas funding, rate limits और asset recovery के सहायक tools।

अनुबंधों को अलग-अलग तरीकों से जोड़ा जा सकता है। Registry listing, quote या graph path यह गारंटी नहीं देता कि लेन-देन पूरा होगा। मौजूदा liquidity, token limits, fees, oracle state, authorization, deadlines, network conditions और हर Pool की configuration अभी भी लागू होती है।
