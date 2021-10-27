//Busca de elementos HTML
const divContainer = document.getElementById("div-container");  // Container onde vai ser criado os elementos
const inputContainer = document.getElementById("inputContainer"); // É o campo de texto a qual pego o título da pergunta
const optionList = document.getElementById("optionList"); // Opções de respostas, campo option.

//Eventos de elementos HTML
inputContainer.addEventListener('keyup', clickInputTitle); 

//Variaveis
let arrayElements = []; //Array responsável por guardar todos os objetos elementos.
let arrayElement = []; //Array
let arrayQuestions = [];
let arrayAnswers = [];

//Classes
class ElementHtml {

    constructor(tagHtml, attributesHtml){

        this.tagHtml = tagHtml;
        this.attributesHtml = [];
        this.attributesHtml = attributesHtml.split('-') //Separa a string e joga dentro de uma array os atributos do elemento.

        this.element;//É o elemento html

        this.createTextNodeNoText;
        this.createTextNode;
        this.addValueElement; //Variável responsável por receber os valores do appendChild // TALVEZ NÃO EXISTA MAIS

    }

    getElementHtml (){
        return this.tagHtml, this.attributesHtml, this.addValueElement;
    }

    setElementHtml(tagHtml, attributesHtml){
        this.tagHtml = tagHtml;
        this.attributesHtml = attributesHtml;//Arrumar isso depois, não daria certo
    }

    //PRONTO? NÃO, ATRIBUIR O ELEMENTO CRIADO A UMA ARRAY?
    createElementHtml(){
        
        //FUNÇÃO PRECISA CRIAR APENAS O ELEMENTO E APRESENTAR-LO NA TELA, INDEPENDENTE DO ELEMENTO.
        
        //Crio o elemento com a tag e passo os valores do atributo
        this.element = document.createElement(this.tagHtml);
        this.validationAttributes();
        
        for(var i = 0; i < this.attributesHtml.length; i++){ 
                
            //O type sempre será par e o value sempre impar. 
            if(i % 2 === 0){ //Sempre que for par, ele atribuirá os elementos, para a atribuição ocorrer corretamente

                //Atribuição do attribute sempre que for par.
                this.element.setAttribute( this.attributesHtml[i], this.attributesHtml[i+1] ); //Função padrão do JS, seta os atributos de uma tag 

            }
        }

        divContainer.appendChild(this.element); //Demonstro elemento na divContainer
        //arrayElement.push(this.element);
        //arrayElements.push(arrayElement); //Atribuição dos elementos a array.


        //
    }

    //Excluir o elemento.
    deleteElementHtml(){
        //Implementar

    }

    //Validar os elementos e sua tag
    validationAttributes(){
        
        
        //Em algum momento, ter mensagem de erro sobre o elemento nesta função
        if(this.tagHtml == "textarea" ){ // || this.attributesHtml.includes('button') Valido se é textarea ou se tem button para não adicionar valor ao elemento
            
            let createTextNodeNoText = document.createTextNode("");
            this.element.appendChild(createTextNodeNoText); //Adiciona o valor vazio ao objeto elemento textarea. ERRO: Preciso criar antes o elemento     
            
        } else {
            
            let createTextNode = document.createTextNode(inputContainer.value); 
            this.element.appendChild(createTextNode); //Adiciona ao objeto elementHtml o valor do H1. ERRO: Preciso criar antes o elemento
                    
        }

        //Atribuindo um evento e sua função ao attributes, caso seja uma botão
        if(this.attributesHtml.includes('button')){

            if(this.attributesHtml.includes('ADD')){

                let stringAttribute = "onclick-createNewAnswer()";
                let aux = stringAttribute.split('-');
                this.attributesHtml.push(aux[0]);
                this.attributesHtml.push(aux[1]);

            } else {

                let stringAttribute = "onclick-deleteElement()";
                let aux = stringAttribute.split('-');
                this.attributesHtml.push(aux[0]);
                this.attributesHtml.push(aux[1]);

            }    
        }
    }
}

//INÍCIO DA APLICÃO
function clickInputTitle(event){ //Função responsável por pegar o evento do elemento e dar início as rotinas.

    //Variável que recebe o valor e validar se o evento foi igual ao valor.
    const keyPressIsEnter = event.key == "Enter";

    if(keyPressIsEnter){
        
        //Criação do título
        let tag = "h1";
        let attributes = "class-classTitle"; //Ver depois como automatizar?    
        let titleH1 = new ElementHtml(tag, attributes); //Ver depois se posso automatizar isso.
        titleH1.createElementHtml();
        arrayElement.push(titleH1);
        console.log("Pergunta", arrayElement);

        //let arrayQuestions = [];
        //let arrayAnswers = [];


        //Crição do input de resposta e validação da opção escolhida pelo o usuário
        let optionChoice = updateOptions(); //Chamar a função de option, para ver o que o usuário está escolhendo
        if(optionChoice == "textarea"){ //Validar o valor da opção escolhida e atribuir determinados atributos.
            
            tag = "textarea";
            attributes = "class-classTextArea";

            let tagInput = new ElementHtml(tag, attributes);
            tagInput.createElementHtml();
            arrayElement.push(tagInput);
            console.log("TextArea", arrayElement);


        } else {

            tag = "input"
            attributes = "type-" + optionChoice + "-class-classInput"; //VER ISSO NO CHROME, SE VAI ESTAR FUNCIONANDO. VER SE ISSO SERÁ AQUI MESMO OU APÓS O FOR DE INPUTS.

            //Valida se é um radio e criará mais de uma elemento.
            if(optionChoice == "radio"){ 

                optionChoiceSetAttributes(tag, attributes);//Função responsável por criar mais elementos se for radio.

            } else {
                
                let tagInput = new ElementHtml(tag, attributes);
                tagInput.createElementHtml();
                arrayElement.push(tagInput);
                console.log("Input", arrayElement);

            }
        }

        //Criação do input button de remove.
        tag = "input"
        attributes = "type-button-value-REMOVER-class-classInput-onclick-deleteElement()";
        let tagInput = new ElementHtml(tag, attributes);
        tagInput.createElementHtml(); 
        arrayElement.push(tagInput);
        console.log("Input",arrayElement);
      
    }
}

//Função responsável por criar mais de um elemento das opções de radio
function optionChoiceSetAttributes(tag, attributes){
    
    this.attributes = attributes;
    this.tag = tag;

    //FOR DE INPUTS PARA CRIAR TRÊS ELEMENTOS DA OPÇÃO DE RADIO.
    for(let i = 0; i < 3; i++){
        
        if(i == 0){
                        
            this.attributes = "type-radio-class-classInput";
            let tagInput = new ElementHtml(this.tag, this.attributes);
            tagInput.createElementHtml();
            arrayElement.push(tagInput);
                        
        } else if (i == 1){

            this.attributes = "type-text-class-classInput";
            let tagInput = new ElementHtml(this.tag, this.attributes);
            tagInput.createElementHtml();
            arrayElement.push(tagInput);
                        
        } else if (i == 2){

            this.attributes = "type-button-value-ADD-class-classInput"; 
            let tagInput = new ElementHtml(this.tag, this.attributes);
            tagInput.createElementHtml();
            arrayElement.push(tagInput);
        }       
    }
}

//Ok - Cria novos elementos apartir de um botão e sua função
function createNewAnswer(){

    let tag = "input"
    let attributes = "type-" + updateOptions() + "-class-classInput";
    optionChoiceSetAttributes(tag, attributes);

    tag = "input"
    attributes = "type-button-value-REMOVER-class-classInput-onclick-deleteElement()";
    let tagInput = new ElementHtml(tag, attributes);
    tagInput.createElementHtml();
    arrayElement.push(tagInput);
     

}

//Função responsável por remover os elementos quando clicado no botão
//IMPLEMENTAR
function deleteElement() {
    alert("oi");
    if(divContainer.parentNode){
        divContainer.parentNode.removeChild()//Como irei validar qual nó será removido? Validar ainda
    }
}

//Função responsável por pegar os valores da lista
function updateOptions ( ){
    
    let option = optionList.options[optionList.selectedIndex].value;
    return option;

}
