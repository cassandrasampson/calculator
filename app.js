function clearDisplay(){
    document.getElementById("displayMenu").innerHTML='';
    result = '';
    oldNumber = '';
    firstNumber = '';
}

function numberInput(numberClicked){
    firstNumber = numberClicked;
    console.log("clicked number");
    
}

function operator(operatorType){

    if(operatorType == '+'){
    plusMinusSubtractDivide = 'plus'; 
    }
    else if(operatorType == '-'){
        plusMinusSubtractDivide = 'minus'; 
        }
    else if(operatorType == '*'){
        plusMinusSubtractDivide = 'multiply'; 
        }
    else if(operatorType == '/'){
        plusMinusSubtractDivide = 'divide'; 
        }

    oldNumber = firstNumber;  
    firstNumber = 0;   
}

function calculateResult(){

    if(plusMinusSubtractDivide == 'plus'){
        result = oldNumber + firstNumber;       
    }else if(plusMinusSubtractDivide == 'minus'){
        result = oldNumber - firstNumber;       
    }else if(plusMinusSubtractDivide == 'multiply'){
        result = oldNumber * firstNumber;       
    }else if(plusMinusSubtractDivide == 'divide'){
        result = oldNumber / firstNumber;       
    }

    document.getElementById("displayMenu").innerHTML=result;
}

