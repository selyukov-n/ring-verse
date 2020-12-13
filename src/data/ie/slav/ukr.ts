import { fromLotR, make } from "../../utils";
import { sources } from "../../sources";

export const ukr = make({ language: "ukr" }, {
  113: {
    input: "0.4.0",
    name: fromLotR(),
    author: "Oleksandr Mokrovolskii",
    book: ["U-1", 120],
    content: `Три Перснi - ельфам чарiвна тюрьма,
Сiм Перснiв - гномам-ковалям темниця,
А дев'ять - людям смерть сама;
Один - лиш Князю Чорному кориться
В краiнi Мордор, де панує тьма.
Один - щоб мати всiх, всiх розшукати,
Усiх приволокти i всiх зв'язати
В краiнi Мордор, де панує тьма.`
  },
  116: {
    input: "0.4.3",
    author: "ardann [АнК]",
    book: ["U-5", 124],
    content: `Три персня - ельфам у пiдзоряний свiт,
Сiм - для дварфiв, господарів гiр,
Дев'ять - людям, смертним повiк,
А Один - для Володаря на чорному тронi
В країнi Мордор, де темряви край:
Щоб всiх їх знайти, всiх поєднати,
I чорною волею разом зв'язати
В країнi Мордор, де темряви край.`
  },
  372: {
    input: "0.14.5",
    source: sources.jrrt_memorial,
    author: ["?", "corr. by GaLL"],
    content: `Трi кiльця для ельфiйських королей пiд небом
Сiмь - для гномiв в камен(н)их залах
Дев'ять - для тих, кто має померти
Та одне - для володаря на чорном престолi
Одне щоб правити
Одне щоб знайти їх усiх
Та сковати ланцюгом
В Мордорi, де вiковiчна темрява`
  },
  422: {
    input: "0.17.0",
    source: sources.translations,
    name: fromLotR(),
    author: "С.Бойко",
    book: ["U-2", 121],
    content: `Три - королям ельфійським під небом світлим.
Сім же - владикам гномів у печерах світу.
Дев'ять - людям землі, що їм смертна доля.
І Один - Володарю Тьми на чорнім престолі,
В Мордорі, де лиховісна тінь.
Перстень єдиний - усіх поєднати
І темною волею міцно скувати
В Мордорі, де віковічна тінь.`
  },
  471: {
    input: "1.0.2",
    name: fromLotR(),
    author: "Назар Федорак",
    book: ["U-3", 122],
    content: `Три перснi для ельфiв - для їх королiв,
Сiм - гордим гномам з камiнних палат,
Ще Дев'ять - людям смертних родiв,
Один - Повелителю Тьми, де iмла
В Мордорi та морок i тiнь на землi.
Один з них керує, Один - всiх знайде,
Один їх збере й у пiтьмi всiх зведе
В Мордорi та морок i тiнь на землi.`
  },
  472: {
    input: "1.0.2",
    author: "Богдан Стасюк",
    book: ["U-4", 123],
    content: `Три каблучки - ельфiв королям, володарям свiтiв,
А сiм - для гномiв (й гори коряться їх волi),
Дев'ять - людям, вiк вывiрять на шальках терезiв,
Єдина ж - Владарю на темному престолi.
У Мордору землi облудних тiней
Єдина має правити всiма i всi знайти повинна,
Єдина має злучитися всiма, єднатись ними в мороцi повинна.
У Мордору землi облудних тiней.`
  },
});
