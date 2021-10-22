//Busca de elementos HTML
const divContainer = document.getElementById("div-container");
const inputContainer = document.getElementById("inputContainer");

//Eventos de elementos HTML
inputContainer.addEventListener('keyup', clickInputTitle); 

//Variaveis

let arrayAux = []; //Array auxiliar para tratar atributos de input
let arrayInputsOption = []; //Array de Objetos de Inputs. EX: input, type/text ou type/radio | Pensar melhor se é melhor separar ou deixar juntos.
let arrayInputsTitle = []; //Array de Objetos de Tags Titles. EX: h1, textarea

//Classes

//Exemplo de uma classe
class MyClass {
    //método construtor
    constructor(parametros) { //Sempre terá um constructor
        this.parametros = parametros;
    } 

    method01() {}
    method02() {}
    //Outros meios de métodos:
    
    //Método get
    get methodGet (){
        return this.parametros;
    }
    //Método set
    set methodSet (){
        this.parametros = parametros;
    }
    //Método estático.
    //Estudar depois sobre... https://www.youtube.com/watch?v=zkzPhD8Lnno
}

class ElementHtml {

    constructor(tagHtml, attributesHtml){
        this.tagHtml = tagHtml;
        this.attributesHtml = attributesHtml;
    }
    //O que devo fazer?
    get elementHtml (){
        return this.tagHtml, this.attributesHtml;
    }
}








//Função responsável por excluir um elemento
function deleteElement(elementHtml) {
    //Não funciona no IE 11
    alert("oi");
    
}

//Função de botão add mais opções Radio
function createNewOption(){

    createElementsRadio("radio");
}

//Função que irá chamar a criação do três itens.
function callElementsRadio() {
    createElementsRadio("radio");
}

//Está criando os três inputs, preciso validar para ele chamar novamente a função.

//Função do Option, criação dos três elementos: radio, text, button
function createElementsRadio(radio) {
    this.radio = radio;

    for(let i = 0; i < 3; i++){
        if(i == 0){
            clickInputOption("input", "type-radio");
        } else if ( i == 1){
            clickInputOption("input", "type-text");
        } else {
            clickInputOption("input", "type-button-value-+"); //Antigo: clickInputOption("input", "type-button-value-+-id-buttonAddRadio"+[i]);
        }
    }
}


//Objeto Elemento  
function ElementTagObject(tagHtml, attributesHtml){

    this.tagHtml = tagHtml;
    this.attributesHtml = attributesHtml;
    
    if(typeof(this.attributesHtml) === "undefined"){
        
        console.log("É undenifed");
        console.log("É um elemento título: H1");

    } else {
        arrayAux = this.attributesHtml.split('-'); //Separa a string e joga dentro de uma array os atributos.
    }
    
    //Funcao responsável por criar um elemento
    this.createElement = function () {

        let elementHtml = document.createElement(this.tagHtml);
        
        //Valida se o elemento tem um type
        if(typeof(this.attributesHtml) === "undefined"){
            
            //valida se o elemento é um textarea
            if(this.tagHtml != "textarea"){
                let createTextNode = document.createTextNode(inputContainer.value)
                elementHtml.appendChild(createTextNode);
            }

            let createTextNodeNoText = document.createTextNode("");
            elementHtml.appendChild(createTextNodeNoText);
            
    
        } else {

            console.log(arrayAux);
            for(var i = 0; i < arrayAux.length; i++){

                //Faz a separação para que não haja erros no atributos do input
                //Tem que receber os atributos e valores, ex: type,text
                if(i % 2 === 0){    //Por que?  

                    elementHtml.setAttribute( arrayAux[i], arrayAux[i+1] );

                    //Atribuindo evento ao elemento, caso seja um botão. Talvez esse IF seja melhor na linha 41
                    if(arrayAux[1] == "button"){
                        if(arrayAux[3] == "+"){
                            elementHtml.setAttribute("onclick", "createNewOption()");
                        } else {
                            elementHtml.setAttribute("onclick", "deleteElement()");
                        }    
                    }

                    console.log(arrayAux[i], arrayAux[i+1]);
                
                } else {
            
                    console.log(arrayAux[i-1], arrayAux[i]);
            
                }
            
            }

        }

        console.log(elementHtml);

        

        divContainer.appendChild(elementHtml);
        
    }

}

//Função que irá criar o objeto elemento com um tipo e adicionar-lo a uma Array de Inputs.
function clickInputOption(tag, type){

    let tagObject = new ElementTagObject(tag, type);
    
    tagObject.createElement();

    arrayInputsOption.push(tagObject);
}


//Primeira função a ser chamada ao evento
function clickInputTitle(event){

    //Variável que recebe o valor e validar se o evento foi igual ao valor.
    const keyPressIsEnter = event.key == "Enter";

    if(keyPressIsEnter){
        

        //TESTE, CRIAÇÃO DE BOTÕES
        let botoes;

        //Cria uma elemento H1
        let tagObject = new ElementTagObject("h1");
        tagObject.createElement();
      
        arrayInputsTitle.push(tagObject); 

        //teste
        clickInputOption("input", "type-button-value-Remove"); //Funcionou, criou um botão REMOVE
        
        let option = updadeOptions();

        if(option == "textarea"){ //Textarea é uma tag sozinha, sem necessidade de um type.
            
            tagObject.tagHtml = "textarea"
            tagObject.createElement();
            arrayInputsOption.push(tagObject); 

        } else {

            let type = "type-";
            let result = type + option;

            //Valida se é um radio e criará mais de uma elemento.
            if(option == "radio"){

                createElementsRadio(result);

            } else {
                
                clickInputOption("input", result);

            }

        }
        
    }   
}

//Pega o valor da lista optionList e retorna o valor
function updadeOptions ( ){
    
    let select = document.getElementById("optionList");
    let option = select.options[select.selectedIndex].value;

    return option;

}
