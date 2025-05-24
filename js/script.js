// Import des questions
import { questions } from "./questions.js";

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
    const keywords = ['const', 'let', 'var', 'if', 'else', 'return', 'function', 'for', 'while', 'true', 'false', 'null', 'undefined', 'new', 'typeof', 'instanceof', 'class', 'extends', 'super', 'this', 'async', 'await', 'try', 'catch', 'finally', 'import', 'export', 'default', 'switch', 'case', 'break', 'continue'];
    const keywordRegex = new RegExp('\\b(' + keywords.join('|') + ')\\b', 'g');

    function applySyntaxHighlighting(codeContent) {
      // Ensure HTML entities are handled to prevent XSS if not already done
      // For this step, assuming codeContent is plain text from questions.js
      
      // 1. Comments
      codeContent = codeContent.replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>');
      // 2. Strings (basic handling for escaped quotes)
      codeContent = codeContent.replace(/('[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*")/g, '<span class="code-string">$1</span>');
      // 3. Keywords
      codeContent = codeContent.replace(keywordRegex, '<span class="code-keyword">$1</span>');
      // 4. Numbers
      codeContent = codeContent.replace(/(\b\d+\.?\d*\b)/g, '<span class="code-number">$1</span>');
      return codeContent;
    }

    // Formater la question pour mettre en évidence le code
    let formattedQuestion = question.question;
    // Trouver et remplacer les blocs de code multilignes
    formattedQuestion = formattedQuestion.replace(/```([\s\S]*?)```/g, (match, codeContent) => {
      const highlightedCode = applySyntaxHighlighting(codeContent);
      return `<pre><code class="code-block">${highlightedCode}</code></pre>`;
    });
    // Trouver et remplacer les blocs de code en ligne
    formattedQuestion = formattedQuestion.replace(/`([^`]+)`/g, (match, codeContent) => {
      const highlightedCode = applySyntaxHighlighting(codeContent);
      return `<span class="code">${highlightedCode}</span>`;
    });

    questionElement.innerHTML = formattedQuestion;
    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className =
        "option w-full p-3 text-left rounded border border-gray-300 hover:bg-gray-100 option-transition";

      // Formater les options pour mettre en évidence le code
      let formattedOption = option;
      // Trouver et remplacer les blocs de code multilignes dans les options
      formattedOption = formattedOption.replace(/```([\s\S]*?)```/g, (match, codeContent) => {
        const highlightedCode = applySyntaxHighlighting(codeContent);
        return `<pre><code class="code-block">${highlightedCode}</code></pre>`;
      });
      // Trouver et remplacer les blocs de code en ligne dans les options
      formattedOption = formattedOption.replace(/`([^`]+)`/g, (match, codeContent) => {
        const highlightedCode = applySyntaxHighlighting(codeContent);
        return `<span class="code">${highlightedCode}</span>`;
      });
      button.innerHTML = formattedOption;

      // Si la question a déjà été répondue, mettre en évidence la réponse sélectionnée
      if (
        answeredQuestions.has(currentQuestion) &&
        index === userAnswers[currentQuestion]
      ) {
        button.classList.add("active");
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
  options.forEach((option) => option.classList.remove("active"));
  options[index].classList.add("active");
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

      // Formater la question
      let formattedQuestion = question.question;
      // Gérer les blocs de code multilignes d'abord
      formattedQuestion = formattedQuestion.replace(
        /```([\s\S]*?)```/g,
        '<pre><code class="code-block">$1</code></pre>'
      );
      // Ensuite, gérer les blocs de code en ligne
      formattedQuestion = formattedQuestion.replace(
        /`([^`]+)`/g,
        '<span class="code">$1</span>'
      );

      // Formater la réponse de l'utilisateur
      let formattedUserAnswer = question.options[userAnswers[index]];
      // Gérer les blocs de code multilignes d'abord
      formattedUserAnswer = formattedUserAnswer.replace(
        /```([\s\S]*?)```/g,
        '<pre><code class="code-block">$1</code></pre>'
      );
      // Ensuite, gérer les blocs de code en ligne
      formattedUserAnswer = formattedUserAnswer.replace(
        /`([^`]+)`/g,
        '<span class="">$1</span>'
      );

      // Formater la bonne réponse
      let formattedCorrectAnswer = question.options[question.correctAnswer];
      // Gérer les blocs de code multilignes d'abord
      formattedCorrectAnswer = formattedCorrectAnswer.replace(
        /```([\s\S]*?)```/g,
        '<pre><code class="code-block">$1</code></pre>'
      );
      // Ensuite, gérer les blocs de code en ligne
      formattedCorrectAnswer = formattedCorrectAnswer.replace(
        /`([^`]+)`/g,
        '<span class="code">$1</span>'
      );

      div.innerHTML = `
        <p class="font-semibold">Question ${index + 1}: ${formattedQuestion}</p>
        <p class="mt-2 italic text-red-500">Votre réponse: ${formattedUserAnswer}</p>
        <p class="mt-2 text-green-500 font-bold rounded-md w-fit">Bonne réponse: ${formattedCorrectAnswer}</p>
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
      const cleanQuestion = question.question.replace(/`/g, "");
      doc.text(`Question ${index + 1}: ${cleanQuestion}`, 20, yPosition);
      yPosition += 10;

      // Réponse donnée
      doc.setFont(undefined, "normal");
      doc.setTextColor(255, 0, 0);
      const cleanUserAnswer = question.options[userAnswers[index]].replace(
        /`/g,
        ""
      );
      doc.text(`Votre réponse: ${cleanUserAnswer}`, 20, yPosition);
      yPosition += 10;

      // Bonne réponse
      doc.setTextColor(0, 128, 0);
      const cleanCorrectAnswer = question.options[
        question.correctAnswer
      ].replace(/`/g, "");
      doc.text(`Bonne réponse: ${cleanCorrectAnswer}`, 20, yPosition);
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
