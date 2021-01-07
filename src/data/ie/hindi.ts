import { sources } from "../sources";
import { make } from "../utils";

export const hindi = make({ language: "hin" }, {
  559: {
    input: "2.4.0",
    author: [],
    source: sources.warosu,
    comments: [{ type: "warning", text: "the 1st line is missing" }],
    content: [
      {
        type: "text-large",
        text: `...
पत्थर के अपने हॉल में बौने के लिए सात,
नश्वर पुरुषों के लिए नौ मरने के लिए बर्बाद,
अंधेरे प्रभु के लिए उसके गहरे सिंहासन पर
मेर्डर की भूमि में जहां छाया झूठ बोलते हैं।
उन सबको शासन करने के लिए एक अंगूठी, उन्हें खोजने के लिए एक अंगूठी,
उन सभी को लाने के लिए एक अंगूठी और अंधेरे में उन्हें बाँध लें
मेर्डर की भूमि में जहां छाया झूठ बोलते हैं`
      }
    ]
  },
});
