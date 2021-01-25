function numberInput(numberClicked){
    firstNumber = numberClicked;
    
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