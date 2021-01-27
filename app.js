let numberToDisplay='';

function numberInput(numberClicked){  
    numberToDisplay.toString();
    numberToDisplay = numberToDisplay + numberClicked;   

    showInDisplay(numberToDisplay);   
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

function clearDisplay(){
    document.getElementById("displayMenu").innerHTML='';
    result = '';
    oldNumber = '';
    firstNumber = '';
}

function showInDisplay(display){
    document.getElementById("displayMenu").innerHTML=display;
}

