import { book, make } from "../utils";
import pic224 from "../pic/224tam.jpg";

export const tamil = make({ language: "tam" }, {
  224: {
    input: "0.8.0",
    author: ["T.T.Surenkumar", "T.T.Arvind"],
    book: book("T", 169),
    content: [
      {
        text: `múnṟu kaNaiázikaḻ ákaya sámarakkizé amaṟum iḻavar arasarkaḻukku
ézu, páṟai maNdapangkaḻil vázum kuḻḻar thalaivarkaḻukku
onpathu, yamanukku kuṟi ána aṉíthya manitharkaḻukku
onṟu, iruḻ adaiṉtha simmásanaththin iṟuḻ ṉáthanukku
iruḻa padaiṟṉthuḻḻa márdár ṉilaththilé
ór kaNai anaivaraiyum áḻa, ór kaNai anaivaraiyum théda
ór kaNai anaivaraiyum kónarṉthu iruḻin adimai ákka
iruḻa padaiṟṉthuḻḻa márdár ṉilaththilé`
      },
      {
        name: "тамильское письмо",
        type: "image",
        image: pic224,
      }
    ]
  },
});
