## **8. तकनीकी दायरा और विकास**

यह अध्याय मौजूदा production routing service को वैकल्पिक या प्रस्तावित विकास से अलग करता है। यहाँ बताई गई मौजूदा क्षमता सार्वजनिक CLC App/Core deployment की विशेषता है; वह अपने-आप Protocol v1.1.0 contracts या दूसरे deployments की विशेषता नहीं बनती।

मौजूदा सार्वजनिक deployment में ये क्षमताएँ शामिल हैं:

- compatible Pools के माध्यम से पहुँच योग्य vouchers की graph-based खोज;
- चुने गए समान-चेन routes के लिए आधिकारिक fixed-block quotations;
- हर हॉप के Pool और protocol fees, minimum outputs और deadlines की गणना;
- full-batch simulation, participant signature और relayed Calibur execution;
- समान-चेन transaction जिसमें कोई call विफल होने पर सभी route calls वापस होती हैं; और
- समूहित receipts और हर हॉप के settlement events का reconciliation।

विकास के संभावित क्षेत्रों में ये शामिल हैं:

- जहाँ atomic settlement उपलब्ध न हो वहाँ cross-domain execution के लिए timelocked escrow या HTLC adapters;
- अतिरिक्त registry या policy profiles और cross-profile routing;
- opt-in Pool inventory rebalancing और batch netting;
- छोटे या व्यक्तिगत पूल के लिए इंटरफेस और नीतिगत उपकरण;
- वाउचर, पूल, विनिमय दर पद्धति, सीमाओं, नियंत्रकों और शुल्क के लिए लेखापरीक्षण योग्य रजिस्टर;
- तैनाती-विशिष्ट भुगतान प्रदाता कनेक्टर्स, चेकआउट प्रवाह और पात्रता नियंत्रण;
- पुनः संतुलन और भुगतान लिक्विडिटी के लिए बाहरी तरलता स्थलों से फंगल एसेट कनेक्शन; तथा
- नीतिगत कवरेज, परिचालन लागत या तरलता जनादेशों के लिए राजकोषीय रूपांतरण।

बाह्य बाजार की कीमतें निर्धारित नहीं करतीं कि एक जारीकर्ता वाउचर शर्तों के तहत कितना कर्जदार है। एक पूल फंजबल परिसंपत्ति के लिए एक संरक्षित बाहरी संदर्भ का उपयोग कर सकता है, लेकिन इसकी प्रकाशित विनिमय दर पद्धति, सीमाएं, शुल्क और इन्वेंट्री उसके उद्धरणों को नियंत्रित करेगी।

### **8.1 वर्तमान मार्ग सेवा और व्यापक मानदंड**

**खोज।** CLC Core configured catalogs, registry relationships, Pool parameters, fees, limits, balances और chain events से मिलान किया हुआ graph बनाए रखता है। वह अनुमान लगाता है कि session wallet किन vouchers तक पहुँच सकता है और पुराने data को चिह्नित करता है। सार्वजनिक configuration अधिकतम तीन हॉप वाले routes खोजता है। खोज execution का वादा नहीं है।

**आधिकारिक कोटेशन।** चुने गए मार्ग के लिए CLC Core एक निश्चित block पर भाग लेने वाले Pools पढ़ता और समर्थित `SwapPool` गणना दोहराता है। वह Pool और protocol fees अलग दिखाता, हर हॉप का minimum output और deadline तय करता, wallet calls तैयार करता और पूरे batch का अनुकरण करता है। असमर्थित tokens, quoters, wallets या Pool conditions अस्वीकार किए जाते हैं।

**मौजूदा execution।** प्रतिभागी Calibur batch पर हस्ताक्षर करता है, जिसमें हर हॉप के लिए allowance reset, allowance grant और bounded withdrawal होते हैं। Relayer `revertOnFailure` सक्रिय रखकर इसे एक समान-चेन transaction के रूप में भेजता है। इससे मौजूदा route में transaction-level all-or-nothing behavior मिलता है। यह cross-chain atomicity, HTLC या escrow routing, automatic rebalancing या netting नहीं है।

**रसीदें और संचालन।** ऐप एक tracking ID के अंतर्गत route को समूहित करता और transaction status, hop order, Pools, token pairs, quoted तथा settled amounts, Pool fees, protocol fees और intermediate balances दर्ज करता है। Service graph freshness, route-computation और quote outcomes, simulation failures, reconciliation lag और repairs तथा unresolved या unknown indexed members की निगरानी करती है। Operational telemetry issuer fulfillment सिद्ध नहीं करती।

**Network profiles।** Client एक से अधिक registry root या policy profile का समर्थन कर सकता है। वह participant को बताएगा कि quotation में कौन-सा profile, counterparties, adapters, constraints और जवाबदेह service operators उपयोग हुए। Cross-profile route को हर लागू हॉप की शर्तें पूरी करनी होंगी।

**Route policy।** जवाबदेह operator unsafe dependencies या counterparties बाहर कर सकता और route-level caps, freshness requirements तथा health criteria लागू कर सकता है। ये signals निर्णय में सहायता करते हैं; fulfillment या loss protection की guarantee नहीं देते।

**Fees और limits।** मौजूदा quotation हर हॉप के Pool fee और अतिरिक्त protocol fee अलग दिखाता है। सार्वजनिक App अभी अलग routing-service fee नहीं जोड़ता। भविष्य की कोई service fee अलग प्रकाशित होगी। Execution expired quotations या limits का उल्लंघन अस्वीकार करता है।

**Cross-domain atomicity और recovery।** भविष्य का route मौजूदा समान-चेन atomic batch उपयोग न कर सके और HTLC या escrow उपयोग करे, तो service को timeout, abort path, जवाबदेह controllers, incident procedures और residual risks प्रकाशित करने होंगे।

**प्रस्तावित batch netting और rebalancing।** Opt-in service rebalance intents एकत्र कर compatible cycles या chains खोज सकती है। वह:

1. निष्पादित चक्रों, परिसंपत्तियों, राशियों, मूल्यांकन टाइमस्टैम्प और फीस की पहचान करने वाली मशीन-पठनीय रसीद प्रकाशित करें;
2. प्रति अवधि अपनाई गई सीमाओं और प्रतिपक्षी नीतियों को लागू करना;
3. ऐसी गतिविधि को अस्वीकार करना जो किसी भी भाग लेने वाले पूल के प्राधिकरण, सीमाओं या उपलब्ध सूची का उल्लंघन करती है; और
4. समीक्षा और विवाद निपटान के लिए निर्धारित इनपुट और प्राप्तियों को संरक्षित करें।

**SDK और interface requirements।** Reusable route integration को deterministic quote-to-receipt mapping, हर हॉप की invariant checks, समझने योग्य failure codes और audit-friendly logs देने चाहिए। मौजूदा production App/Core implementation अपने profile के लिए ये काम करता है। Protocol v1.1.0 Solidity `SwapRouter` केवल कोटेशन देता है और route निष्पादित नहीं करता।

#### **8.1.1 न्यूनतम संघ संगतता विनिर्देश**

एक पूल पारिस्थितिकी तंत्र जो क्रॉस-प्रोफाइल राउटिंग की मांग करता है, मशीन-पठनीय जानकारी प्रकाशित करेगाः

1. **रजिस्ट्री जड़ेंः** परिसंपत्तियों, पूल, विनिमय दर विधियों, सीमाओं और शुल्क नीतियों के लिए पहचानकर्ता, या एक रूट जो उन्हें निर्णायक रूप से हल करता है।
2. **रसीदेंः** प्रोफ़ाइल, अंदर और बाहर की संपत्ति, राशि, उद्धरण स्रोत और समय टिकट, सीमा स्नैपशॉट, शुल्क, इन्वेंट्री परिणाम और प्रत्येक छलांग के लिए निष्पादन परिणाम।
3. **ऑपरेशनल सिग्नलः** इन्वेंट्री, सीमित उपयोग, घटनाओं और किसी भी अलग से प्रमाणित वादे की पूर्ति या वित्त पोषित संरक्षण के बारे में ताजाता-सीमित जानकारी।
4. **नीतिगत प्रतिबंधः** अनुमत या अस्वीकार किए गए प्रतिद्वंद्वी, परिसंपत्ति वर्ग, एडाप्टर और किसी भी एस्क्रो आवश्यकताएं।
5. **विफलता कोडः** अस्वीकृति, समाप्ति, सीमा, इन्वेंट्री, नीति, निर्भरता या घटना विफलताओं के लिए निर्णायक स्पष्टीकरण।

एक प्रोफ़ाइल बुनियादी CPP संगतता के लिए आवश्यकताओं के बिना कवरेज, अनुपालन, मध्यस्थता या अन्य सेवाओं को जोड़ सकता है। प्रत्येक वैकल्पिक सेवा अपने जिम्मेदार पक्ष, प्राधिकरण, दायरे और शर्तों की पहचान करेगी।

### **8.2 लाइसेंस, सत्यापन और बाहर निकलना**

Protocol v1.1.0 अनुबंधEVM-प्रोटोकॉल रिपॉजिटरी में अनुबंध `src` निर्देशिका के अंतर्गत प्रकाशित की जाती हैAGPL-3.0अपवाद के लिए पहचाने गए अपरिवर्तित तृतीय-पक्ष घटक जो अपनी शर्तों को बनाए रखते हैं। प्रकाशित स्रोत, एबीआई और तैनाती निर्देश स्वतंत्र समीक्षा का समर्थन करते हैं लेकिन स्वयं एक लेखा परीक्षा, सुरक्षित तैनाति या कानूनी अनुपालन साबित नहीं करते हैं।

प्रत्येक तैनाती अपने कोड संस्करण, बिल्ड मूल, पते, नियंत्रक और अपग्रेड शक्तियां, ऑडिट स्थिति, रजिस्ट्री दर्पण और किसी भी टाइमलॉक या प्यूज सुरक्षा को अलग से प्रकट करेगी।

एक प्रस्तावित **फोर्क किट** इसमें शामिल हो सकते हैंः

1. निर्धारक तैनाती स्क्रिप्ट;
2. रजिस्टर स्नैपशॉट और निर्यात उपकरण;
3. मार्ग सेवाओं, एसडीके और इंटरफेस को एक नई रजिस्ट्री रूट पर पुनर्निर्देशित करने के लिए एक प्रलेखित प्रक्रिया;
4. साझा रजिस्टर को सुरक्षित रूप से छोड़ने के लिए पूल प्रबंधक चेकलिस्ट; तथा
5. बकाया vouchers के लिए एक प्रवास चेकलिस्ट, जिसमें जारीकर्ता सूचनाएं, प्रस्तुत करने और पूरा करने की समय सीमा, रिकॉर्ड तक निरंतर पहुंच और सुधार शामिल हैं।

संगत कांटे तब लचीलापन में सुधार कर सकते हैं जब समुदायों, सहकारी संस्थाओं, सार्वजनिक एजेंसियों, संघों, मल्टी-सिग्स या सेवा ऑपरेटरों को अलग शासन की आवश्यकता होती है। वास्तविक निरंतरता अभी भी अनुबंध स्वामित्व, कुंजी, निर्भरताओं, इंटरफ़ेस, बुनियादी ढांचे, कानूनी दायित्वों और तृतीय पक्ष सेवाओं पर निर्भर करती है।
