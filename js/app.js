

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
//abaixo é a variavel que vai receber a posição atual, questão atual.
let questionCounter = 0;
let currentQuestion;
//Abaixo uma matriz de perguntas disponíves
let availableQuestions = [];
let availableOptions = [];

//enviar as perguntas para dentro da matriz availableQuestion
function setAvailableQuestion(){
    const totalQuestion = quiz.length;
    for(let i = 0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i]);
    }
   
}
//definir o número da perguta e a pergunta das opções:
function getNewQuestion(){
    //Definir 'setar' numero da perguta:
    questionNumber.innerHTML = "Questão " + (questionCounter + 1) + " de " +quiz.length;
    //Setar o texto das perguntas:
    //Obter as perguntas aleatoriamente:
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q; // esse que é do meu arquivo question.js ele é o texto do enunciado.
    //console.log(questionIndex) //ver no console as alternativas de forma aleatórias    
    
    //a variavel index1 vai obter a posição do questionIndex da matriz com a pergunta disponível.
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove o questão da maitriz de perguntas disponível, para que a pergunta não se repita.

    availableQuestions.splice(index1,1); //splice = emendar
    //console.log(index1);//mostrar a variavel
    //console.log(availableQuestions);// mostra as alternativas no console
    
    //abaixo codigo para setar algernativas
    //primeiro vamos pegar a quantidade de questões.
    const optionLen = currentQuestion.options.length;
    //console.log(currentQuestion.options);//mostra as perguntas de forma alternadas.
    
    //Enviar as opções para a matriz de opções dispoiveis
    for(let i = 0;i<optionLen; i++){
        availableOptions.push(i);
    }
    //console.log(availableOptions)

    optionContainer.innerHTML = '';
    let animationDelay = 0.15;


    //setar opções com html
    for(let i=0; i<optionLen;i++){
        // opções aleatórias
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        ////Obter as perguntas aleatoriamente:
        const index2 = availableOptions.indexOf(optionIndex);
        //remove a opção que já apareceu
        availableOptions.splice(index2,1);
        //console.log(optionIndex);//ver as opções de forma aleatoria.
        //console.log(availableOptions);
        //console.log(optionIndex);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        //animação que dece uma div após a outra
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;

        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }
    
    questionCounter++


}

//Pegar o resultado ao clicar na opção 
function getResult(element){
    //console.log(element.innerHTML)
    const id = parseInt(element.id) ; 
    //console.log(typeof id);//teste para saber o tipo de retorno que era string vou transformar
    //obter resposta ao clicar vai comparar o pelo da opção clicadaset the green color to the correct
    if(id === currentQuestion.answer){
        //console.log("alternativa correta");
        //pintar de verde se estiver correto...Ver meu CSS para entender...os @keyframes 
        element.classList.add("correct");
    }
    else{
        //pintar de vermelho caso o clique seja feito em uma alternativa errada.
        //console.log("alternativa errada")
        element.classList.add("wrong");
        //se a resposta estiver incorreta, mostre a opção correta adicionando a cor verde à opção correta
        const optionLen = optionContainer.children.length;
        for(let i=0;i<optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    unclickableOptions();
}

//Tornar todas as outras opções não clicavel quando o usuário escolher uma opção
//para restringir o usuário de trocar de opção
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen;i++){
        optionContainer.children[i].classList.add("already-answerd");
    }
}

function next(){
    if(questionCounter === quiz.length){
        console.log("terminou o quiz"); 
    } 
    else{
        getNewQuestion();
    }
}

window.onload = function(){
    //primeiro vamos definir todas as questões na matriz availablreQuestions
  setAvailableQuestion(); 
  //Depois vamos chamar a finção abaixo..
  getNewQuestion(); 
}