
function getinput(){
    let input = document.getElementById("number_display").value;
}

function evaluateString(){
    let input = document.getElementById("number_display").value;
    let output = eval(input);
    console.log(input);
    console.log(output);
    document.getElementById("operation_display").value = output;
}

function displayNum(x) {
    if(x == 41){
        document.getElementById("number_display").value += String.fromCharCode(x);
    }
    else if(x == 40){
        document.getElementById("number_display").value += String.fromCharCode(x);
    }
    else{
        document.getElementById("number_display").value += x;
    }
}

function displayOpt(x) {
    document.getElementById("number_display").value += x; 
}

function backspace(){
    let current = document.getElementById("number_display").value.toString();
    let final = current.slice(0,current.length - 1);
    document.getElementById("number_display").value = final;
}

function clearAll(){
    let getValueDisplay = document.getElementById("number_display");
    if(getValueDisplay.value != ""){
        getValueDisplay.value = "";
    };

    let getValueResult = document.getElementById("operation_display");
    if(getValueResult.value != ""){
        getValueResult.value = "";
    }
}

function square(){
    let current = document.getElementById("number_display").value.toString();
    let final = Math.pow(current,2);
    document.getElementById("operation_display").value = final;
}

function inverse(){
    let current = document.getElementById("number_display").value.toString();
    let final = eval(1 / current);
    document.getElementById("operation_display").value = final;
}

function absolute(){
    let current = document.getElementById("number_display").value.toString();
    let final = Math.abs(current);
    document.getElementById("operation_display").value = final;
}

function exponential(){
    let current = document.getElementById("number_display").value.toString();
    let final = Math.exp(current);
    document.getElementById("operation_display").value = final;
}

function modulus(){
    let current = document.getElementById("number_display").value.toString();
    let final = eval(current);
    document.getElementById("operation_display").value = final;
}

