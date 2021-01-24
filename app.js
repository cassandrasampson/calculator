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

    oldNumber = firstNumber;  
    firstNumber = 0;   
}

function calculateResult(){

    if(plusMinusSubtractDivide == 'plus'){
        result = oldNumber + firstNumber;       
    }else if(plusMinusSubtractDivide == 'minus'){
        result = oldNumber - firstNumber;       
    }

    console.log(result);
}