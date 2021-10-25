//Busca de elementos HTML
const divContainer = document.getElementById("div-container");  // Container onde vai ser criado os elementos
const inputContainer = document.getElementById("inputContainer"); // É o campo de texto a qual pego o título da pergunta
const optionList = document.getElementById("optionList"); // Opções de respostas, campo option.

//Eventos de elementos HTML
inputContainer.addEventListener('keyup', clickInputTitle); 

//Variaveis
let arrayElements = []; //Array responsável por guardar os elementos.

//Classes
class ElementHtml {

    constructor(tagHtml, attributesHtml){

        this.tagHtml = tagHtml;
        this.attributesHtml = [];
        this.attributesHtml = attributesHtml.split('-') //Separa a string e joga dentro de uma array os atributos do elemento.

        this.element;//É o elemento html

        this.createTextNodeNoText;
        this.createTextNode;
        this.addValueElement; //Variável responsável por receber os valores do appendChild

    }

    getElementHtml (){
        return this.tagHtml, this.attributesHtml, this.addValueElement;
    }

    setElementHtml(tagHtml, attributesHtml){
        this.tagHtml = tagHtml;
        this.attributesHtml = attributesHtml;
    }

    //PRONTO? NÃO, ATRIBUIR O ELEMENTO CRIADO A UMA ARRAY?
    createElementHtml(){
        
        //FUNÇÃO PRECISA CRIAR APENAS O ELEMENTO E APRESENTAR-LO NA TELA, INDEPENDENTE DO ELEMENTO.
        
        //Crio o elemento com a tag e passo os valores do atributo
        this.element = document.createElement(this.tagHtml);
        for(var i = 0; i < this.attributesHtml.length; i++){ 
                
            //O type sempre será par e o value sempre impar. 
            if(i % 2 === 0){ //Sempre que for par, ele atribuirá os elementos, para a atribuição ocorrer corretamente

                //Atribuição do attribute sempre que for par.
                element.setAttribute( this.attributesHtml[i], this.attributesHtml[i+1] ); //Função padrão do JS, seta os atributos de uma tag 

            }
        }
        divContainer.appendChild(element); //Demonstro elemento na divContainer
        arrayElements = this.element; //Atribuição dos elementos a array.

    }

    //Excluir o elemento.
    deleteElementHtml(){
        //Implementar

    }

    //PRONTO? 
    validationAttributes(){
        
        //Em algum momento, ter mensagem de erro sobre o elemento nesta função
        if(this.tagHtml == "textarea"){
            
            this.createTextNodeNoText = document.createTextNode("");
            addValueElement.appendChild(createTextNodeNoText); //Adiciona o valor vazio ao objeto elemento textarea.
                
            
        } else {
            
            this.createTextNode = document.createTextNode(inputContainer.value); 
            addValueElement.appendChild(createTextNode); //Adiciona ao objeto elementHtml o valor do H1.
                
                    
        }

        //Atribuindo um evento e sua função ao attributes, caso seja uma botão
        if(this.attributesHtml.find("button") == "button"){

            if(this.attributesHtml.find("+") == "+"){

                let stringAttribute = "onclick-createElement()";
                this.attributesHtml = stringAttribute.split('-')

            } else {

                let stringAttribute = "onclick-deleteElement()";
                this.attributesHtml = stringAttribute.split('-')

            }    
        }
    }
}

//MAIN
function clickInputTitle(event){ //Função responsável por pegar o evento do elemento e dar início as rotinas.

    //Variável que recebe o valor e validar se o evento foi igual ao valor.
    const keyPressIsEnter = event.key == "Enter";

    if(keyPressIsEnter){
        
        //Criação do título
        let tag = "h1";
        let attributes = "class-classTitle"; //Ver depois como automatizar?    
        let titleH1 = new ElementHtml(tag, attributes); //Ver depois se posso automatizar isso.
        titleH1.validationAttributes(); //Validação do atributo e tag título
        titleH1.createElementHtml();

        //Crição do input de resposta e validação da opção escolhida pelo o usuário
        let optionChoice = updadeOptions(); //Chamar a função de option, para ver o que o usuário está escolhendo
        if(optionChoice == "textarea"){ //Validar o valor da opção escolhida e atribuir determinados atributos.
            
            tag = "textarea";
            attributes = "class-classInput";

        } else {

            tag = "input"
            attributes = "type-" + optionChoice + "-class-classInput"; //VER ISSO NO CHROME, SE VAI ESTAR FUNCIONANDO. VER SE ISSO SERÁ AQUI MESMO OU APÓS O FOR DE INPUTS.

            //Valida se é um radio e criará mais de uma elemento.
            if(optionChoice == "radio"){ 

                optionChoiceSetAttributes(tag, attributes);//Função responsável por criar mais elementos se for radio.

            } else {
                
                let tagInput = new ElementHtml(tag, attributes);
                tagInput.createElement();

            }

        }
        let tagInput = new ElementHtml(tag, attributes); //Cria os elementos se não for do tipo radio. Ex: text, textarea 
        tagInput.createElement();

        //Criação do input button de remove.
        tag = "input"
        attributes = "type-button-value-REMOVER-class-classInput-onclick-deleteElement()";
        let tagInput = new Element(tag, attributes);
        tagInput.createElement();        
    }   
}

//Comentar melhor a função e dentro dela
function optionChoiceSetAttributes(tag, attributes){
    
    this.attributes = attributes;
    this.tag = tag;

    //FOR DE INPUTS PARA CRIAR TRÊS ELEMENTOS DA OPÇÃO DE RADIO.
    for(let i = 0; i < 4; i++){
        
        if(i == 0){
                        
            this.attributes = "type-radio-class-classInput";
            let tagInput = new ElementHtml(this.tag, this.attributes);
            tagInput.createElement();
                        
        } else if (i == 1){

            this.attributes = "type-text-class-classInput";
            let tagInput = new ElementHtml(this.tag, this.attributes);
            tagInput.createElement();
                        
        } else if (i == 2) {

            this.attributes = "type-button-value-ADD-class-classInput-onclick-createNewAnswer()"; //Criar função createNewAnswer()
            let tagInput = new ElementHtml(this.tag, this.attributes);
            tagInput.createElement();
            clickInputOption("input", "type-button-value-+"); //Antigo: clickInputOption("input", "type-button-value-+-id-buttonAddRadio"+[i]);

        } else {

            this.attributes = "type-button-value-REMOVER-class-classInput-onclick-deleteElement()"; //Criar função deleteElement()
            let tagInput = new ElementHtml(this.tag, this.attributes);
            tagInput.createElement();
                    
        }            
    }
}