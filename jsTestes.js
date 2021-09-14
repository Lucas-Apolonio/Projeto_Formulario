const divContainer = document.getElementById("div-container");
const inputContainer = document.getElementById("inputContainer");

inputContainer.addEventListener('keyup', clickInputTitle); //

//Array auxiliar para tratar atributos de input
let arrayAux;

//Objeto Elemento
function ElementTagObject(tagHtml, attributesHtml){

    this.tagHtml = tagHtml;
    this.attributesHtml = attributesHtml;
    
    if(typeof(this.attributesHtml) === "undefined"){
        
        console.log("É undenifed");

    } else {
        arrayAux = this.attributesHtml.split('-'); //Separa a string e joga dentro de uma array
    }
    
    //Funcao responsável por criar o input
    this.createElement = function () {

        let elementHtml = document.createElement(this.tagHtml);
        
        if(typeof(this.attributesHtml) === "undefined"){
        
            console.log("É undenifed");
            
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
                if(i  % 2 === 0){    
                
                elementHtml.setAttribute( arrayAux[i], arrayAux[i+1] );
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

//Função que irá criar o objeto e adicionar-lo a uma Array de Inputs.
function clickInputOption(tag, type){
    
    let arrayInputsOption = [];

    let tagObject = new ElementTagObject(tag, type);
    
    tagObject.createElement();

    arrayInputsOption.push(tagObject);
}

function clickInputTitle(event){

    const keyPressIsEnter = event.key == "Enter";
    let arrayInputsTitle = [];

    if(keyPressIsEnter){

        let tagObject = new ElementTagObject("h1");
        tagObject.createElement();
      
        arrayInputsTitle.push(tagObject);

        let option = updadeOptions();
        console.log(option);

        if(option == "textarea"){
            
            tagObject.tagHtml = "textarea"
            tagObject.createElement();
            arrayInputsTitle.push(tagObject);

        } else {

            let type = "type-";
            let result = type + option;
            
            console.log(result);

            clickInputOption("input", result);

        }
        
    }   
}




function updadeOptions ( ){
    
    
    let select = document.getElementById("optionList");
    let option = select.options[select.selectedIndex].value;

    return option;

}
