const DivContainer = document.getElementById("div-container");

let arrayAux;

//Objeto Elemento
function ElementTagObject(tagHtml, attributesHtml){

    this.tagHtml = tagHtml;
    this.attributesHtml = attributesHtml;
    
    arrayAux = this.attributesHtml.split('-');
    
    //Funcao responsável por criar o input
    this.createElement = function () {

        let elementHtml = document.createElement(this.tagHtml);
        
        for(var i = 0; i < arrayAux.length; i++){

            //Faz a separação para que não haja erros no atributos do input
            if(i  % 2 === 0){    
                
                elementHtml.setAttribute( arrayAux[i], arrayAux[i+1] );
                console.log(arrayAux[i], arrayAux[i+1]);
                
            } else {
            
                console.log(arrayAux[i-1], arrayAux[i]);
            
            }

        }

        console.log(elementHtml);
        DivContainer.appendChild(elementHtml);
        
    }

}

const inputHtml = new ElementTagObject("input", "type-text-name-lucas-id-testeid");

inputHtml.createElement();