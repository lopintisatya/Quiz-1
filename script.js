const questions = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HyperTool Markup Language",
        "HyperText Markdown Language",
        "Hyperlink and Text Markup Language"
      ],
      answer: "HyperText Markup Language"
    }
  ];
let currentQuestion = 0;
  let score = 0;
  
  const questionBox = document.getElementById("question-box");
  const optionsBox = document.getElementById("options-box");
  const resultBox = document.getElementById("result");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionBox.textContent = q.question;
    optionsBox.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("div");
      btn.classList.add("option");
      btn.textContent = option;
      btn.onclick = () => selectOption(btn, q.answer);
      optionsBox.appendChild(btn);
    });
  }
  
  function selectOption(selectedBtn, correctAnswer) {
    const allOptions = document.querySelectorAll(".option");
    allOptions.forEach(btn => btn.style.pointerEvents = "none");
 if (selectedBtn.textContent === correctAnswer) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("wrong");
      [...allOptions].find(btn => btn.textContent === correctAnswer).classList.add("correct");
    }
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  };
  
  function showResult() {
    questionBox.style.display = "none";
    optionsBox.style.display = "none";
    nextBtn.style.display = "none";
    resultBox.innerHTML = <h2>Your Score: ${score}/${questions.length}</h2>;
 }
  
  loadQuestion();