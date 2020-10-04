let jsonQuestion = quizQuestions //Pega do arquivo json

let totalQuestions = 14;

let wasChosen = new Array(totalQuestions)
populateBoolArray(wasChosen)

let currentQuestion; //Questão atual -> selecionar com rand 

let maxQuestion = 0 //Total de questões -> não passar de 10

let totalPoints = 0;

/* ======================================================================== */


function chooseQuestion() {

    do {
        currentQuestion = Math.floor(Math.random() * 14)
    } while (wasChosen[currentQuestion] == true)

    wasChosen[currentQuestion] = true

    defineInitialContent();
}

/* ======================================================================== */

function defineInitialContent(){

    document.getElementById("image").src = jsonQuestion[currentQuestion].path
    document.getElementById("span").name = jsonQuestion[currentQuestion].name

    document.getElementById("bt1").innerHTML = jsonQuestion[currentQuestion].options[0]
    document.getElementById("bt1").style.fontSize = "14px"
    document.getElementById("bt1").name = jsonQuestion[currentQuestion].options[0]

    document.getElementById("bt2").innerHTML = jsonQuestion[currentQuestion].options[1]
    document.getElementById("bt2").style.fontSize = "14px"
    document.getElementById("bt2").name = jsonQuestion[currentQuestion].options[1]

    document.getElementById("bt3").innerHTML = jsonQuestion[currentQuestion].options[2]
    document.getElementById("bt3").style.fontSize = "14px"
    document.getElementById("bt3").name = jsonQuestion[currentQuestion].options[2]

    document.getElementById("bt4").innerHTML = jsonQuestion[currentQuestion].options[3]
    document.getElementById("bt4").style.fontSize = "14px"
    document.getElementById("bt4").name = jsonQuestion[currentQuestion].options[3]

    document.getElementById("points").innerHTML = "Pontuação: " + totalPoints + " pontos"

}

/* ======================================================================== */

function correctAnswer(answer) {

    let controlQuestions = 0

    switch (answer) {
        case 'bt1':
            answer = jsonQuestion[currentQuestion].options[0]
            break;
        case 'bt2':
            answer = jsonQuestion[currentQuestion].options[1]
            break;
        case 'bt3':
            answer = jsonQuestion[currentQuestion].options[2]
            break;
        case 'bt4':
            answer = jsonQuestion[currentQuestion].options[3]
            break;
    }

    if (answer === jsonQuestion[currentQuestion].name) {
        maxQuestion++;
        totalPoints++;
        document.getElementById("points").innerHTML = "Pontos: " + totalPoints
        if (totalPoints != 10) {
            chooseQuestion()
        }
        else {
            confirmPlayAgain("Voce fez um total de " + totalPoints+ "/10 pontos");
        }
    } else {
        for (let i = 0; i < totalQuestions; i++) {
            if (wasChosen[i] == false) { //Pra ver se ainda tem logos disponíveis
                controlQuestions++
            }
        }
        if (controlQuestions != 0) {
            controlQuestions = 0
            chooseQuestion();
        } else {
            confirmPlayAgain("Voce fez um total de " + totalPoints+ "/10 pontos");
        }
    }

}

/* ======================================================================== */

function populateBoolArray(array) {

    for (let i = 0; i < array.length; i++) {
        array[i] = false
    }

}

/* ======================================================================== */

function confirmPlayAgain(str) {

    let confirmValue = confirm(str + ' Deseja Jogar Novamente?')
    if (confirmValue) {
        playAgain()
    } else {
        hideContent()
    }

}

function playAgain() {

    for (let i = 0; i < wasChosen.length; i++) {
        wasChosen[i] = false
    }

    maxQuestion = 0
    totalPoints = 0

    displayContent()

    chooseQuestion()
}

/* ======================================================================== */

function hideContent() {

    document.getElementById("image").src = null
    document.getElementById("bt1").style.visibility = "hidden"
    document.getElementById("bt2").style.visibility = "hidden"
    document.getElementById("bt3").style.visibility = "hidden"
    document.getElementById("bt4").style.visibility = "hidden"
    document.getElementById("points").innerHTML = "Fim de jogo";

}

/* ======================================================================== */

function displayContent() {

    document.getElementById("bt1").style.visibility = "visible"
    document.getElementById("bt2").style.visibility = "visible"
    document.getElementById("bt3").style.visibility = "visible"
    document.getElementById("bt4").style.visibility = "visible"

}