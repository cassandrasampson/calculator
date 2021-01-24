function numberInput(numberClicked){
    firstNumber = numberClicked;
    
}

function operator(operatorType){
    if(operatorType == '+'){
    plusMinusSubtract = 'plus'; 
    oldNumber = firstNumber;  
    firstNumber = 0;
    }
   
}

function showResult(){
    if(plusMinusSubtract == 'plus'){
        result = oldNumber + firstNumber;
        console.log(result);
    }
}