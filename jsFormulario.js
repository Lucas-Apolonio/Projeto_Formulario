var element_body = document.body;

function createElementsHtml(){
    console.log("entrou no function");
    var elementTitle = document.getElementById("elementTitle").value;
    var elementTypeAnswer = document.querySelector('input[name="escolha"]').value;

    elementsQuestion(elementTitle, elementTypeAnswer);

    return;
}

function elementsQuestion(elementTitle, elementTypeAnswer){
    
    let documentFather = document.getElementById("newforms");

    //Título
    var element = document.createElement("h1");
    var content = document.createTextNode(elementTitle);

    element.appendChild(content);
    documentFather.appendChild(element); 
    
    //Respostas
    if(elementTypeAnswer == "textarea" ){

        var element = document.createElement("textarea");
        element.name = "campoArea";

    }   else {

        var element = document.createElement("input");
        element.type = elementTypeAnswer.value;
        element.name = "questionOption1";
        var content = document.createTextNode("Opcao1")
    }

    
    element.appendChild(content);
    documentFather.appendChild(element); 
    
    
}
