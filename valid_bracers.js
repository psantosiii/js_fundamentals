function checkBrackets(str){  
    var counter = 0;
    var counter1 = 0;
    var counter2 = 0;
    for(var i in str){   
        if(str[i] == '('){
            counter ++;
        } else if(str[i] == ')') {
            counter --;
        }
        if (str[i] == '['){
            counter1 ++;
        } else if(str[i] == ']'){
            counter1 --;
        } 
        if (str[i] == '{'){
            counter2 ++;
        } else if(str[i] == '}'){
            counter2 --;
        }
        if (counter < 0 || counter1 < 0 || counter2 < 0) return false;    
    }
    if(counter > 0 || counter1 > 0 || counter2 > 0) return false;
    return true;
}
console.log(checkBrackets('[{()}]'));
