// Dados iniciais
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();

// Evento Reset
document
  .querySelector(".scoreArea button")
  .addEventListener("click", resetEvent);

// Funções
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];

    // Criar variável para a barra de progresso baseada na divisão entre número da questão atual e quantidade de questões vezes 100. Use a função Math.floor para arredondar.
    let larguraBarra = Math.floor((currentQuestion / questions.length) * 100);
    // Defina a largura da .progress--bar com o valor obtido
    document.querySelector(".progress--bar").style.width = `${larguraBarra}%`;
    // Esconda a .scoreArea
    document.querySelector(".scoreArea").style.display = "none";
    // Exiba a .questionArea
    document.querySelector(".questionArea").style.display = "block";
    // Insira em .question o valor da questão
    document.querySelector(".question").innerHTML = q.question;
    // Defina .options como ""
    document.querySelector(".options").innerHTML = "";
    // Crie uma variável optionsHtml para o texto das opções
    let optionsHtml = "";
    // Faça um loop em q.options e defina o valor da optionHtml com `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`

    for (let i = 0; i < q.options.length; i++) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
    }
    console.log(optionsHtml);
    // Insira optionsHtml em .options
    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    // Chame a função finishQuiz
    finishQuiz();
  }
}

function optionClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute("data-op"));
  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++;
  }
  currentQuestion++;
  showQuestion();
}

function finishQuiz() {
  // Criar variável de pontos baseada na divisão entre respostas corretas e quantidade de questões. Use a função Math.floor para arredondar.
  let resultado = (correctAnswers * 10);
  // Implementar condicionais para inserir mensagem e cor do placar de acordo com a pontuação.
  let scorePct = document.querySelector(".scorePct");
  let scoreText2 = document.querySelector(".scoreText2");

  if (resultado < 30) {
    scorePct.textContent = resultado;
    scoreText2.textContent = "Você não sabe nada, seu otário.";
  } else if (resultado < 50) {
    scorePct.textContent = resultado;
    scoreText2.textContent = "Pelo menos isso.";
  } else if (resultado < 70) {
    scorePct.textContent = resultado;
    scoreText2.textContent = "Sabe o mínimo para impressionar ninguém.";
  } else if (resultado < 90) {
    scorePct.textContent = resultado;
    scoreText2.textContent = "Parabéns, está na média para um iniciante.";
  } else {
    scorePct.textContent = resultado;
    scoreText2.textContent = "Parabéns, sabe tudo.";
  }
  document.querySelector(".questionArea").style.display = "none";
  document.querySelector(".scoreArea").style.display = "block";
  document.querySelector(".progress--bar").style.width = "100%";
}

document.querySelector(".progress--bar").style.width = "100%";

function resetEvent() {
  currentQuestion = 0;
  correctAnswers = 0;
  showQuestion();
  // Redefina os valores de correctAnswers e currentQuestion para 0
  // Chame a função showQuestion
}
