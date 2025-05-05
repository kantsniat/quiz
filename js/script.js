const questions = [
  {
    question:
      "Quelle est la syntaxe moderne pour déclarer une variable qui ne changera pas ?",
    options: [
      "`const maVariable = 10;`",
      "`let maVariable = 10;`",
      "`var maVariable = 10;`",
      "`variable maVariable = 10;`",
    ],
    correctAnswer: 0,
    explanation:
      "const est utilisé pour déclarer une variable qui ne changera pas. let est utilisé pour les variables qui peuvent changer, et var est l'ancienne syntaxe à éviter.",
  },
  {
    question:
      "Comment déclare-t-on une variable qui pourra être modifiée plus tard ?",
    options: [
      "`let maVariable = 5;`",
      "`const maVariable = 5;`",
      "`var maVariable = 5;`",
      "`variable maVariable = 5;`",
    ],
    correctAnswer: 0,
    explanation:
      "let est utilisé pour déclarer une variable qui peut être modifiée. const est pour les variables constantes, et var est l'ancienne syntaxe à éviter.",
  },
  {
    question: "Quelle est la valeur de `'5' + 2` en JavaScript ?",
    options: ["`'52'`", "`7`", "`Error`", "`undefined`"],
    correctAnswer: 0,
    explanation:
      "En JavaScript, quand on ajoute un nombre à une chaîne de caractères, le nombre est converti en chaîne et les deux sont concaténés.",
  },
  {
    question: "Quelle est la valeur de `5 + '2'` en JavaScript ?",
    options: ["`'52'`", "`7`", "`Error`", "`undefined`"],
    correctAnswer: 0,
    explanation:
      "Même principe que la question précédente : quand on ajoute un nombre à une chaîne, le nombre est converti en chaîne et les deux sont concaténés.",
  },
  {
    question: "Quelle est la valeur de `5 + 2` en JavaScript ?",
    options: ["`7`", "`'52'`", "`Error`", "`undefined`"],
    correctAnswer: 0,
    explanation:
      "Quand on additionne deux nombres, on obtient leur somme mathématique.",
  },
  {
    question: "Quelle est la valeur de `true && false` ?",
    options: ["`false`", "`true`", "`undefined`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "L'opérateur && (ET) retourne true seulement si les deux opérandes sont true.",
  },
  {
    question: "Quelle est la valeur de `true || false` ?",
    options: ["`true`", "`false`", "`undefined`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "L'opérateur || (OU) retourne true si au moins un des opérandes est true.",
  },
  {
    question: "Quelle est la valeur de `!true` ?",
    options: ["`false`", "`true`", "`undefined`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "L'opérateur ! (NON) inverse la valeur booléenne : !true = false, !false = true.",
  },
  {
    question: "Quelle est la valeur de `5 > 3` ?",
    options: ["`true`", "`false`", "`undefined`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "L'opérateur > retourne true si le nombre de gauche est plus grand que celui de droite.",
  },
  {
    question: "Quelle est la valeur de `'5' === 5` ?",
    options: ["`false`", "`true`", "`undefined`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "=== est l'opérateur d'égalité stricte qui compare à la fois la valeur et le type. '5' est une chaîne, 5 est un nombre.",
  },
  {
    question: "Quelle est la valeur de `'5' == 5` ?",
    options: ["`true`", "`false`", "`undefined`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "== est l'opérateur d'égalité qui convertit les types avant de comparer. '5' est converti en nombre avant la comparaison.",
  },
  {
    question: "Quelle est la syntaxe correcte pour une condition if/else ?",
    options: [
      "`if (condition) { } else { }`",
      "`if condition { } else { }`",
      "`if (condition) then { } else { }`",
      "`if { condition } else { }`",
    ],
    correctAnswer: 0,
    explanation:
      "La syntaxe correcte en JavaScript est if (condition) { } else { }. Les parenthèses autour de la condition sont obligatoires.",
  },
  {
    question: "Comment écrit-on une condition else if ?",
    options: [
      "`if (condition1) { } else if (condition2) { } else { }`",
      "`if (condition1) { } if (condition2) { } else { }`",
      "`if (condition1) { } elseif (condition2) { } else { }`",
      "`if (condition1) { } else (condition2) { } else { }`",
    ],
    correctAnswer: 0,
    explanation:
      "La syntaxe correcte est if (condition1) { } else if (condition2) { } else { }. else if est écrit en deux mots.",
  },
  {
    question: "Quelle est la valeur de `10 % 3` ?",
    options: ["`1`", "`3`", "`0`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "L'opérateur % (modulo) retourne le reste de la division. 10 divisé par 3 donne 3 avec un reste de 1.",
  },
  {
    question: "Quelle est la valeur de `2 ** 3` ?",
    options: ["`8`", "`6`", "`5`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "L'opérateur ** est l'opérateur d'exponentiation. 2 ** 3 signifie 2 à la puissance 3, soit 8.",
  },
  {
    question: "Quelle est la valeur de `10 / 0` ?",
    options: ["`Infinity`", "`0`", "`Error`", "`undefined`"],
    correctAnswer: 0,
    explanation:
      "En JavaScript, diviser par zéro donne Infinity (ou -Infinity si le numérateur est négatif).",
  },
  {
    question: "Quelle est la valeur de `typeof true` ?",
    options: ["`'boolean'`", "`'string'`", "`'number'`", "`'object'`"],
    correctAnswer: 0,
    explanation:
      "typeof retourne le type d'une valeur. true est une valeur booléenne, donc typeof true retourne 'boolean'.",
  },
  {
    question: "Quelle est la valeur de `typeof 'hello'` ?",
    options: ["`'string'`", "`'object'`", "`'array'`", "`'text'`"],
    correctAnswer: 0,
    explanation: "typeof retourne 'string' pour les chaînes de caractères.",
  },
  {
    question: "Quelle est la valeur de `typeof 42` ?",
    options: ["`'number'`", "`'integer'`", "`'float'`", "`'string'`"],
    correctAnswer: 0,
    explanation:
      "typeof retourne 'number' pour tous les nombres, qu'ils soient entiers ou décimaux.",
  },
  {
    question: "Quelle est la valeur de `!(true && false)` ?",
    options: ["`true`", "`false`", "`undefined`", "`Error`"],
    correctAnswer: 0,
    explanation:
      "true && false donne false, et !false donne true. Les parenthèses changent l'ordre des opérations.",
  },
];

// Constantes pour le localStorage
const STORAGE_KEY = "js_quiz_data";
const QUIZ_COMPLETED_KEY = "js_quiz_completed";

let currentQuestion = 0;
let selectedOption = null;
let userAnswers = new Array(questions.length).fill(null);
let answeredQuestions = new Set();

function getScore() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const userAnswers = data.userAnswers;
  // Get the score by comparing the userAnswers with the correctAnswers
  const score = userAnswers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;
  return score;
}

// Charger les données sauvegardées
function loadSavedData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const isCompleted = localStorage.getItem(QUIZ_COMPLETED_KEY) === "true";

  if (savedData) {
    const data = JSON.parse(savedData);
    currentQuestion = data.currentQuestion;
    const score = getScore();
    if (score === questions.length) {
      document.getElementById("summary").classList.add("hidden");
    }
    userAnswers = data.userAnswers;
    answeredQuestions = new Set(data.answeredQuestions);
  }

  return isCompleted;
}

// Sauvegarder les données
function saveData() {
  const data = {
    currentQuestion,
    userAnswers,
    answeredQuestions: Array.from(answeredQuestions),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Marquer le quiz comme terminé
function markQuizAsCompleted() {
  localStorage.setItem(QUIZ_COMPLETED_KEY, "true");
}

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const progressElement = document.getElementById("progress");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const incorrectAnswersElement = document.getElementById("incorrect-answers");

function loadQuestion() {
  const question = questions[currentQuestion];

  // Ajouter les classes de transition
  questionElement.classList.add("question-transition");
  optionsElement.classList.add("option-transition");
  document.getElementById("navigation-container").classList.remove("hidden");

  // Animation de sortie
  questionElement.classList.add("question-fade-out");
  optionsElement.classList.add("option-fade-out");

  // Attendre la fin de l'animation de sortie avant de changer le contenu
  setTimeout(() => {
    // Formater la question pour mettre en évidence le code
    let formattedQuestion = question.question;
    // Trouver et remplacer les blocs de code
    formattedQuestion = formattedQuestion.replace(
      /`([^`]+)`/g,
      '<span class="code">$1</span>'
    );

    questionElement.innerHTML = formattedQuestion;
    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className =
        "option w-full p-3 text-left rounded border border-gray-300 hover:bg-gray-100 option-transition";

      // Formater les options pour mettre en évidence le code
      let formattedOption = option;
      formattedOption = formattedOption.replace(
        /`([^`]+)`/g,
        '<span class="code">$1</span>'
      );
      button.innerHTML = formattedOption;

      // Si la question a déjà été répondue, mettre en évidence la réponse sélectionnée
      if (
        answeredQuestions.has(currentQuestion) &&
        index === userAnswers[currentQuestion]
      ) {
        button.classList.add("bg-blue-100");
      }

      // Toujours permettre de cliquer sur les options
      button.addEventListener("click", () => selectOption(index));

      optionsElement.appendChild(button);
    });

    // Restaurer la réponse précédente si elle existe
    if (userAnswers[currentQuestion] !== null) {
      selectOption(userAnswers[currentQuestion]);
    }

    // Animation d'entrée
    questionElement.classList.remove("question-fade-out");
    optionsElement.classList.remove("option-fade-out");
    questionElement.classList.add("question-fade-in");
    optionsElement.classList.add("option-fade-in");

    // Supprimer les classes d'animation après la transition
    setTimeout(() => {
      questionElement.classList.remove("question-fade-in");
      optionsElement.classList.remove("option-fade-in");
    }, 300);

    updateProgress();
    updateButtonStates();
  }, 300);
}

function selectOption(index) {
  selectedOption = index;
  userAnswers[currentQuestion] = index;
  answeredQuestions.add(currentQuestion);
  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("bg-blue-100"));
  options[index].classList.add("bg-blue-100");
  nextButton.disabled = false;
  saveData();
}

function updateButtonStates() {
  prevButton.disabled = currentQuestion === 0;
  nextButton.disabled =
    selectedOption === null && !answeredQuestions.has(currentQuestion);

  if (currentQuestion === questions.length - 1) {
    nextButton.textContent = "Terminer";
  } else {
    nextButton.textContent = "Question Suivante";
  }
}

function checkAnswer() {
  const question = questions[currentQuestion];
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.disabled = true;
    option.classList.remove("bg-blue-100");
  });

  if (selectedOption === question.correctAnswer) {
    options[selectedOption].classList.add("correct");
  } else {
    options[selectedOption].classList.add("incorrect");
    options[question.correctAnswer].classList.add("correct");
  }

  saveData();
}

function updateProgress() {
  progressElement.textContent = `Question ${currentQuestion + 1} sur ${
    questions.length
  }`;
}

function showResult() {
  questionElement.parentElement.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  const score = getScore();
  scoreElement.textContent = `Votre score : ${score} sur ${questions.length}`;

  // Cacher les boutons de navigation
  document.getElementById("prev-btn").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");
  document.getElementById("progress").classList.add("hidden");
  document.getElementById("navigation-container").classList.add("hidden");

  // Afficher le résumé des réponses incorrectes
  incorrectAnswersElement.innerHTML = "";
  questions.forEach((question, index) => {
    if (userAnswers[index] !== question.correctAnswer) {
      const div = document.createElement("div");
      div.className = "p-4 bg-red-50 rounded-lg";
      div.innerHTML = `
        <p class="font-semibold">Question ${index + 1}: ${question.question}</p>
        <p class="mt-2">Votre réponse: ${
          question.options[userAnswers[index]]
        }</p>
        <p class="mt-2">Bonne réponse: ${
          question.options[question.correctAnswer]
        }</p>
        <p class="mt-2 text-sm text-gray-600">Explication: ${
          question.explanation
        }</p>
      `;
      incorrectAnswersElement.appendChild(div);
    }
  });

  markQuizAsCompleted();
}

prevButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    selectedOption = userAnswers[currentQuestion];
    loadQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (!answeredQuestions.has(currentQuestion)) {
    checkAnswer();
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    selectedOption = userAnswers[currentQuestion];
    loadQuestion();
  } else {
    showResult();
  }
});

// Ajouter l'écouteur d'événements pour le bouton de téléchargement PDF
document.getElementById("download-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const score = getScore();

  // Titre
  doc.setFontSize(20);
  doc.text("Résultats du Quiz JavaScript", 20, 20);

  // Score
  doc.setFontSize(14);
  doc.text(`Score final : ${score} sur ${questions.length}`, 20, 30);

  // Questions incorrectes
  let yPosition = 40;
  questions.forEach((question, index) => {
    if (userAnswers[index] !== question.correctAnswer) {
      // Question
      doc.setFontSize(12);
      doc.setFont(undefined, "bold");
      doc.text(`Question ${index + 1}: ${question.question}`, 20, yPosition);
      yPosition += 10;

      // Réponse donnée
      doc.setFont(undefined, "normal");
      doc.setTextColor(255, 0, 0);
      doc.text(
        `Votre réponse: ${question.options[userAnswers[index]]}`,
        20,
        yPosition
      );
      yPosition += 10;

      // Bonne réponse
      doc.setTextColor(0, 128, 0);
      doc.text(
        `Bonne réponse: ${question.options[question.correctAnswer]}`,
        20,
        yPosition
      );
      yPosition += 10;

      // Explication
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      const explanationLines = doc.splitTextToSize(question.explanation, 170);
      doc.text(explanationLines, 20, yPosition);
      yPosition += explanationLines.length * 5 + 10;

      // Ajouter une nouvelle page si nécessaire
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
    }
  });

  // Date et heure
  const now = new Date();
  doc.setFontSize(8);
  doc.text(
    `Généré le ${now.toLocaleDateString()} à ${now.toLocaleTimeString()}`,
    20,
    280
  );

  // Sauvegarder le PDF
  doc.save("resultats-quiz-javascript.pdf");
});

// Vérifier si le quiz est déjà terminé
const isCompleted = loadSavedData();
if (isCompleted) {
  showResult();
} else {
  loadQuestion();
}
