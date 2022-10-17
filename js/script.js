// developer: Francesco Cimino;
// project: Griglia Campo Minato;
// language: javascript;

// variables
const gridBox = document.getElementById("grid-1");
const levelnput = document.getElementById("level-input");
const generator = document.getElementById("play-button");

// generator
generator.addEventListener("click", function(){
gridBox.innerHTML="";

const arrayLenght=convertSelectInput(levelnput.value);

const arraySquare=createArray(arrayLenght);

// loop
for(let i = 0; i < arraySquare.length; i++){
const nodeHtml=newHtmlElement(arraySquare[i], levelnput.value);
nodeHtml.addEventListener("click", handleDivClick);
gridBox.append(nodeHtml);

}
})


// function-1 ---> select input
function convertSelectInput(valueSelected){
    let numberItems = 0;
        if(valueSelected === "difficulties-1-type")
         numberItems = 81;

        else if(valueSelected ===  "difficulties-2-type")
        numberItems = 49;

        else if (valueSelected === "difficulties-3-type")
        numberItems = 100; 
        
        return numberItems ; 
    }


// function-2 ---> handle div click
function handleDivClick(){
this.classList.add("aqua");  
}  

// function-3 ---> new html element
function newHtmlElement(textElement,classBasis){
const element = document.createElement("div");
element.classList.add("general-square");

if(classBasis === "difficulties-1-type"){
    element.classList.add("square-1");
}

else if(classBasis === "difficulties-2-type")
element.classList.add("square-2");

else if(classBasis === "difficulties-3-type")
element.classList.add("square-3");

element.textContent=textElement;
return element;
}

// function-4 ---> create array
function createArray(arrayLength){
const arrayResult = [];
for(let i = 0; i < arrayLength; i++){
    arrayResult.push(i+1);
}

return arrayResult;
}