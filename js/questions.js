export const questions = [
  {
    question:
      "Quelle est la syntaxe moderne pour déclarer une variable qui ne changera pas ?",
    options: [
      "`let maVariable = 10;`",
      "`const maVariable = 10;`",
      "`var maVariable = 10;`",
      "`variable maVariable = 10;`",
    ],
    correctAnswer: 1,
    explanation:
      "const est utilisé pour déclarer une variable qui ne changera pas. let est utilisé pour les variables qui peuvent changer, et var est l'ancienne syntaxe à éviter.",
  },
  {
    question:
      "Comment déclare-t-on une variable qui pourra être modifiée plus tard ?",
    options: [
      "`const maVariable = 5;`",
      "`let maVariable = 5;`",
      "`variable maVariable = 5;`",
      "`var maVariable = 5;`",
    ],
    correctAnswer: 1,
    explanation:
      "let est utilisé pour déclarer une variable qui peut être modifiée. const est pour les variables constantes, et var est l'ancienne syntaxe à éviter.",
  },
  {
    question: "Quelle est la valeur de `'5' + 2` en JavaScript ?",
    options: ["`7`", "`Error`", "`'52'`", "`undefined`"],
    correctAnswer: 2,
    explanation:
      "En JavaScript, quand on ajoute un nombre à une chaîne de caractères, le nombre est converti en chaîne et les deux sont concaténés.",
  },
  {
    question: "Quelle est la valeur de `5 + '2'` en JavaScript ?",
    options: ["`7`", "`Error`", "`undefined`", "`'52'`"],
    correctAnswer: 3,
    explanation:
      "Même principe que la question précédente : quand on ajoute un nombre à une chaîne, le nombre est converti en chaîne et les deux sont concaténés.",
  },
  {
    question: "Quelle est la valeur de `5 + 2` en JavaScript ?",
    options: ["`'52'`", "`Error`", "`undefined`", "`7`"],
    correctAnswer: 3,
    explanation:
      "Quand on additionne deux nombres, on obtient leur somme mathématique.",
  },
  {
    question: "Quelle est la valeur de `true && false` ?",
    options: ["`true`", "`undefined`", "`false`", "`Error`"],
    correctAnswer: 2,
    explanation:
      "L'opérateur && (ET) retourne true seulement si les deux opérandes sont true.",
  },
  {
    question: "Quelle est la valeur de `true || false` ?",
    options: ["`false`", "`undefined`", "`Error`", "`true`"],
    correctAnswer: 3,
    explanation:
      "L'opérateur || (OU) retourne true si au moins un des opérandes est true.",
  },
  {
    question: "Quelle est la valeur de `!true` ?",
    options: ["`true`", "`undefined`", "`Error`", "`false`"],
    correctAnswer: 3,
    explanation:
      "L'opérateur ! (NON) inverse la valeur booléenne : !true = false, !false = true.",
  },
  {
    question: "Quelle est la valeur de `5 > 3` ?",
    options: ["`false`", "`undefined`", "`Error`", "`true`"],
    correctAnswer: 3,
    explanation:
      "L'opérateur > retourne true si le nombre de gauche est plus grand que celui de droite.",
  },
  {
    question: "Quelle est la valeur de `'5' === 5` ?",
    options: ["`true`", "`undefined`", "`Error`", "`false`"],
    correctAnswer: 3,
    explanation:
      "=== est l'opérateur d'égalité stricte qui compare à la fois la valeur et le type. '5' est une chaîne, 5 est un nombre.",
  },
  {
    question: "Quelle est la valeur de `'5' == 5` ?",
    options: ["`false`", "`undefined`", "`Error`", "`true`"],
    correctAnswer: 3,
    explanation:
      "== est l'opérateur d'égalité qui convertit les types avant de comparer. '5' est converti en nombre avant la comparaison.",
  },
  {
    question: "Quelle est la syntaxe correcte pour une condition if/else ?",
    options: [
      "`if condition { } else { }`",
      "`if (condition) then { } else { }`",
      "`if { condition } else { }`",
      "`if (condition) { } else { }`",
    ],
    correctAnswer: 1,
    explanation:
      "La syntaxe correcte en JavaScript est if (condition) { } else { }. Les parenthèses autour de la condition sont obligatoires.",
  },
  {
    question: "Comment écrit-on une condition else if ?",
    options: [
      "`if (condition1) { } if (condition2) { } else { }`",
      "`if (condition1) { } elseif (condition2) { } else { }`",
      "`if (condition1) { } else (condition2) { } else { }`",
      "`if (condition1) { } else if (condition2) { } else { }`",
    ],
    correctAnswer: 3,
    explanation:
      "La syntaxe correcte est if (condition1) { } else if (condition2) { } else { }. else if est écrit en deux mots.",
  },
  {
    question: "Quelle est la valeur de `10 % 3` ?",
    options: ["`3`", "`0`", "`Error`", "`1`"],
    correctAnswer: 3,
    explanation:
      "L'opérateur % (modulo) retourne le reste de la division. 10 divisé par 3 donne 3 avec un reste de 1.",
  },
  {
    question: "Quelle est la valeur de `2 ** 3` ?",
    options: ["`6`", "`5`", "`Error`", "`8`"],
    correctAnswer: 3,
    explanation:
      "L'opérateur ** est l'opérateur d'exponentiation. 2 ** 3 signifie 2 à la puissance 3, soit 8.",
  },
  {
    question: "Quelle est la valeur de `10 / 0` ?",
    options: ["`0`", "`Error`", "`undefined`", "`Infinity`"],
    correctAnswer: 3,
    explanation:
      "En JavaScript, diviser par zéro donne Infinity (ou -Infinity si le numérateur est négatif).",
  },
  {
    question: "Quelle est la valeur de `typeof true` ?",
    options: ["`'string'`", "`'number'`", "`'object'`", "`'boolean'`"],
    correctAnswer: 3,
    explanation:
      "typeof retourne le type d'une valeur. true est une valeur booléenne, donc typeof true retourne 'boolean'.",
  },
  {
    question: "Quelle est la valeur de `typeof 'hello'` ?",
    options: ["`'object'`", "`'array'`", "`'text'`", "`'string'`"],
    correctAnswer: 3,
    explanation: "typeof retourne 'string' pour les chaînes de caractères.",
  },
  {
    question: "Quelle est la valeur de `typeof 42` ?",
    options: ["`'integer'`", "`'float'`", "`'string'`", "`'number'`"],
    correctAnswer: 3,
    explanation:
      "typeof retourne 'number' pour tous les nombres, qu'ils soient entiers ou décimaux.",
  },
  {
    question: "Quelle est la valeur de `!(true && false)` ?",
    options: ["`false`", "`undefined`", "`Error`", "`true`"],
    correctAnswer: 3,
    explanation:
      "true && false donne false, et !false donne true. Les parenthèses changent l'ordre des opérations.",
  },
];
