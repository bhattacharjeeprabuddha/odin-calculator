function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, op, num2){
    switch(op){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}


//UI
const numButtons = document.querySelector("#num-buttons");
const operators = document.querySelector("#operators");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const backSpace = document.querySelector("#back-space");

tempNumStorage = "";
tempOpStorage = "";




for(let i=0; i<=9; i++){
    let btn = document.createElement("button");
    btn.setAttribute("class", "num");
    btn.textContent = i;
    numButtons.appendChild(btn);
}



for(let btn of numButtons.querySelectorAll(".num")){
    btn.addEventListener("click", (e)=>{
        //
        clear.addEventListener("click", ()=>{
            tempNumStorage = "";
            display.textContent = "";
        })
        

        tempNumStorage += e.target.textContent;
        display.textContent += e.target.textContent;


    })
}

for(let op of operators.querySelectorAll(".op")){
    op.addEventListener("click", (e)=>{
        //
        clear.addEventListener("click", ()=>{
            tempNumStorage = "";
            display.textContent = "";
        })
        tempNumStorage += "o";
        tempOpStorage = e.target.textContent;
        display.textContent += e.target.textContent;
    })
}

equals.addEventListener("click", ()=>{
    

    clear.addEventListener("click", ()=>{
        tempNumStorage = "";
        display.textContent = "";
    })

    let i = tempNumStorage.indexOf("o");
    let num1 = Number(tempNumStorage.slice(0,i));
    let num2 = Number(tempNumStorage.slice(i+1));
    display.textContent += "=";
    display.textContent += operate(num1, tempOpStorage, num2);

    
    
})


decimal.addEventListener("click", (e)=>{
    clear.addEventListener("click", ()=>{
        tempNumStorage = "";
        display.textContent = "";
    })
    
    display.textContent += e.target.textContent;
    tempNumStorage += e.target.textContent;
    
})

/*
backSpace.addEventListener("click", (e)=>{
    display.textContent = display.textContent.slice(0,-1);
    tempNumStorage.textContent = tempNumStorage.textContent.slice(0,-1);

})
*/


