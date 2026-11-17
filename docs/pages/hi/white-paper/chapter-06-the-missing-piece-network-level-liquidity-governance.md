## **6. प्रस्तावित नेटवर्क स्तर की तरलता और शासन**

ऐतिहासिक Sarafu Network के अनुभव ने दो व्यापक डिजाइन प्रश्नों पर शोध को प्रेरित कियाः

1. स्वतंत्र रूप से शासित पूल लिक्विडिटी और रूटिंग सेवाओं का समन्वय कैसे कर सकते हैं; तथा
2. कैसे साझा सेवाएं बढ़ती भागीदारी के साथ जवाबदेही बनाए रख सकती हैं।

प्रस्तावित CLC design में network-level clearing और budget coordination के लिए **प्रस्तावित CLC Network Pool** तथा **प्रस्तावित CLC governance token** शामिल हैं। दोनों में से कोई भी मौजूदा App या Protocol v1.1.0 में नहीं है। अन्य deployments इन प्रस्तावों को अपनाए बिना cooperatives, public agencies, federations, multisigs, service operators या दूसरी जवाबदेह structures का उपयोग कर सकते हैं।

### **6.1 डाउनसाइड कंट्रोल और वैकल्पिकता**

वर्तमान Protocol v1.1.0 पूल टोकन बैलेंस कैप और इन्वेंट्री चेक लागू कर सकता है। ये नियंत्रण चयनित अनुबंध कार्यों को प्रतिबंधित करते हैं; वे जारीकर्ता के गैर-प्रदर्शन, मूल्य हानि, कुंजी हानि, अनुबंध विफलता या किसी अन्य नुकसान को नहीं रोकते हैं।

भविष्य की तैनाती में सर्किट ब्रेकर, टाइमलॉक, रिजर्व, गारंटी या बीमा शामिल हो सकते हैं। किसी भी सुरक्षा के लिए एक पहचाने गए जिम्मेदार पक्ष, कवर किए गए घटना, वित्त पोषण, सीमा, बहिष्करण, अवधि, सबूत, दावा प्रक्रिया और लागू शर्तों की आवश्यकता होगी।

प्रस्तावित शासन को रजिस्ट्री और सेवा शक्तियों को संकीर्ण और समीक्षा योग्य बनाए रखना चाहिए। सामान्य कार्यों में सूचना, देरी, कारण प्रकाशन, अपील और सुधार प्रक्रियाओं का उपयोग किया जा सकता है। आपातकालीन कार्यों को घटना रिकॉर्ड तैयार करना चाहिए और समाप्त हो जाना चाहिए या अपनाई गई नीति के तहत समीक्षा प्राप्त करनी चाहिए।

उत्पादन CLC App और CLC Core अब configured public profile के भीतर participant-authorized routes के लिए compatible route discovery और समान-चेन multi-hop execution देते हैं। Quotations हर हॉप की bounds, fees, inventory, limits और simulation लागू करते हैं; कोई call विफल होने पर हस्ताक्षरित wallet batch पूरा वापस हो जाता है।

यह service automatic Pool rebalancing या network-level Pool inventory control अधिकृत नहीं करती। Rebalancing, batch netting, cross-domain HTLC या escrow execution और shared-liquidity governance के लिए अतिरिक्त authorization, software, limits, failure handling और अपनाए गए rules चाहिए। अधिक quoted या executed swaps अपने-आप voucher fulfillment या social impact सिद्ध नहीं करते।
