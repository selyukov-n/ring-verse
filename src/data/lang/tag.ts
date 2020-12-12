import { sources } from "../sources";
import { make } from "../utils";

export const tagalog = make({ language: "tgl" }, {
  189: {
    input: "0.8.0",
    author: "Mo Solidonio",
    book: ["T-1", 173],
    content: `Tatlong singsing pinagkaloob sa mga Duwendeng naghahari sa paanan ng kalangitan,
Pito para sa mga Unanong Amo sa mga bulwagang marmol.
Siyam sa katauhang mortal sa kasawian ay papanaw,
Isa ay laan sa panginoon ng Kadiliman sa luklukang itim,
Sa kaharian ng Mordor, sa pook ng karimlan.
Isang hiyas na maghahari sa lahat, isang singsing sa kanila'y gagalugad,
Isang singsing para sila'y buklurin, at sa Kadiliman gagapusin,
Sa kaharian ng Mordor, sa pook ng karimlan.`
  },
  190: {
    input: "0.8.0",
    author: "Viktoro 9",
    book: ["T-2", 173],
    content: `Tatlong Singsing para sa mga Haring Duwende sa ilalim ng langit,
Pito para sa mga Among Unano sa kanilang bulwagang bato,
Siyam para sa mga Palanang Tao na may kamatayan,
Isa para sa Panginoong Karimlan sa kanyang tronong karimlan
Sa Bayan ng Mordor na dinadalaw ng mga Anino.
Isang Singsing para mamahalain silang lahat, Isang Singsing para hanapin sila,
Isang Singsing para dalhin silang lahat at sa dilim gapusin sila
Sa Bayan ng Mordor na dinadalaw ng mga Anino.`
  },
  382: {
    input: "0.15.0",
    source: sources.barrodowns,
    book: ["T-3", 174],
    author: `Belegfenion [${sources.barrodowns}]`,
    content: `Tatlong Singsing para sa mga Haring Engkantada sa ilalim ng langit,
Pito para sa mga Panginoong Dwende sa kanilang mga bulwagang bato,
Siyam para sa mga Taong Mortal na itinadhanang mamatay,
Isa para sa Madilim na Panginoon sa kanyang madilim na trono,
Sa Lupain ng Kadiliman kung saan nakahimlay ang mga Anino.
Isang singsing para silang lahat ay pagharian,
Isang singsing para sila'y hanapin,
Isang singsing para silang lahat ay dalhin,
At sa kadilima'y sila'y pagsama-samahin.
Sa lupain ng Kadiliman kung saan nakahimlay ang mga Anino.`
  },
  515: {
    input: "2.1.0",
    author: "Erick A. Fabian",
    content: `Tatlong Singsing para sa mga haring Elbenyo sa ilalim ng kalangitan
Pito nito para sa mga Duwendeng panginoon sa kanilang mga bulwagang bato
Siyam para sa mga Taong Mortal, na nakatadhanang mamatay
Isa para sa Hari ng Kadiliman sa kanyang maitim na trono
Doon sa lupalop ng Mordor na kinapupugaran ng mga anino
Isang Singsing na mamumuno sa kanilang lahat,
Isang Singsing na hahanap sa kanila,
Isang Singsing upang sila'y ipagsasama-sama
At igapos silang lahat sa Kadiliman
Doon sa lupalop ng Mordor na kinapupugaran ng mga anino.`
  },
});
