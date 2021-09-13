const BtnAdd = document.querySelector(".btn-add");
const DivContainer = document.getElementById("div-container");


/* Ver melhor maneira de criar isso, criar botão que irá chamar função quando der enter */
let inputOption = document.getElementById("teste");

BtnAdd.addEventListener("click", AddNew);
inputOption.addEventListener('keyup', answerRadio(inputOption.value));

function AddNew() {

    let titleQuestion = document.getElementById("titleQuestion");
    let elementTypeAnswer = document.querySelector('input[name="choice"]:checked').value;
    
    /* Título nova pergunta  */
    let newDiv = document.createElement("h1");
    let content = document.createTextNode(titleQuestion.value);
    newDiv.appendChild(content);
    DivContainer.appendChild(newDiv);

    /* Criação do elemento de resposta */
    if(elementTypeAnswer == "radio"){ //Validando valor


        // Criar um input para dar a opção
        let inputOption = document.createElement("input");
        inputOption.setAttribute('type', 'text');
        inputOption.setAttribute('value', ' ');
        inputOption.setAttribute('placeholder', 'Digite aqui a pergunta');
        inputOption.setAttribute('id', 'teste');
        DivContainer.appendChild(inputOption);
        

        // Chamando função para criação do input radio
        /*answerRadio();*/

    } else {

        let newAnswer = document.createElement("textarea");
        newAnswer.setAttribute('class', 'textarea');
        newAnswer.setAttribute('name', 'textareaName');
        newAnswer.setAttribute('row', '5');
        newAnswer.setAttribute('cols', '5');
        DivContainer.appendChild(newAnswer);

    } 
}


/* Função que cria o input radio  */
function answerRadio(inputOption){

    const keyPressesEnter = inputOption.key == "Enter";
    if(keyPressesEnter == 'Enter'){

        console.log("Entrou na funcao answerRadio");

        // Cria a option com base no valor informdo
        let newAnswer = document.createElement("input");
        newAnswer.setAttribute('type', 'radio');
        newAnswer.setAttribute('name', 'option');
        newAnswer.setAttribute('value', inputOption.value);
        DivContainer.appendChild(newAnswer);
    }

}

/*
 
/* Cria um botão para adicionar outra opção 
const btnAnswerAdd =  document.createElement("input");
btnAnswerAdd.setAttribute('type', 'button');
btnAnswerAdd.setAttribute('value', 'addNewOption')
btnAnswerAdd.addEventListener("click", answerRadio());
DivContainer.appendChild(btnAnswerAdd);
/* Função que irá criar novos inputs radios 
btnAnswerAdd.addEventListener("click", answerRadio());

*/