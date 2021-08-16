let screen = document.querySelector("#inputBar");
let buttons = document.querySelectorAll("button");
let screenValue = "";
let evalValue = "";

for (item of buttons) {   
    item.addEventListener("click",(event) => {
        buttonText = event.target.innerText;
        // console.log("button text is ",buttonText);
        if (buttonText == '×') {
            screenValue += buttonText;
            screen.value = screenValue;
            buttonText = "*";
            evalValue += buttonText;
        }
        else if(buttonText == "÷"){
            screenValue += buttonText;
            screen.value = screenValue;
            buttonText = "/";
            evalValue += buttonText;
        }
        else if(buttonText == 'C'){
            screenValue  = "";
            screen.value = screenValue;
            evalValue  = "";
        }
        else if(buttonText == "="){
            screen.value = eval(evalValue);
            evalValue = "";
            screenValue = "";
        }
        else{
            evalValue += buttonText;
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
