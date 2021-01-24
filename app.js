function numberInput(numberClicked){
    firstNumber = numberClicked;
    
}

function operator(operatorType){
    if(operatorType == '+'){
    plusMinusSubtractDivide = 'plus'; 
    oldNumber = firstNumber;  
    firstNumber = 0;
    }
   
}

function showResult(){
    if(plusMinusSubtractDivide == 'plus'){
        result = oldNumber + firstNumber;
        console.log(result);
    }
}