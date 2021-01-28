let numberToDisplay='';

function numberInput(numberClicked){  

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
    
        firstNumber = numberToDisplay;
        numberToDisplay = '';

        showInDisplay(numberToDisplay);            
}

function calculateResult(){
numberToDisplay = parseInt(numberToDisplay);
firstNumber = parseInt(firstNumber);

    if(plusMinusSubtractDivide == 'plus'){
        result = numberToDisplay + firstNumber;       
    }else if(plusMinusSubtractDivide == 'minus'){
        result = numberToDisplay - firstNumber;       
    }else if(plusMinusSubtractDivide == 'multiply'){
        result = numberToDisplay * firstNumber;       
    }else if(plusMinusSubtractDivide == 'divide'){
        result = firstNumber / numberToDisplay;       
    }

    document.getElementById("displayMenu").innerHTML=result;
}

function clearDisplay(){
    document.getElementById("displayMenu").innerHTML='';
    result = '';
    numberToDisplay = '';
    firstNumber = '';
}

function showInDisplay(display){
    document.getElementById("displayMenu").innerHTML=display;
}

