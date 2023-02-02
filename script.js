
function evaluateString() {
    let operation_display = document.getElementById("operation_display").value;
    let number_display = document.getElementById("number_display").value;
    operation_display = Number(operation_display);
    if(Number.isInteger(operation_display)){
        document.getElementById("number_display").value = operation_display;
    }
    else{
        document.getElementById("number_display").value = "Error";
        document.getElementById("operation_display").value = "Error";
    }

}
function calc() {
    let input = document.getElementById("number_display").value;
    let output = eval(input);
    document.getElementById("operation_display").value = output;

}
function displayNum(x) {
    if (x == 41) {
        document.getElementById("number_display").value += String.fromCharCode(x);
    }
    else if (x == 40) {
        document.getElementById("number_display").value += String.fromCharCode(x);
    }
    else {
        document.getElementById("number_display").value += x;
    }
    calc()
}

function displayOpt(x) {
    let current = document.getElementById("number_display").value;
    let operator = ['+', '-', '*', '/', '%'];
    if (operator.indexOf(current.charAt(current.length - 1)) > -1) {
        current = current.replace(current.charAt(current.length - 1), x);
        document.getElementById("number_display").value = current;
    }
    else {
        document.getElementById("number_display").value += x;
    }
}

function backspace() {
    let current = document.getElementById("number_display").value.toString();
    let final = current.slice(0, current.length - 1);
    document.getElementById("number_display").value = final;
}

function clearAll() {
    let getValueDisplay = document.getElementById("number_display");
    if (getValueDisplay.value != "") {
        getValueDisplay.value = "";
    };

    let getValueResult = document.getElementById("operation_display");
    if (getValueResult.value != "") {
        getValueResult.value = "";
    }
}

function square() {
    let current = document.getElementById("number_display").value;
    document.getElementById("number_display").value = "(" + current + "** 2)";
    calc();
    // let current = document.getElementById("number_display").value.toString();
    // let final = Math.pow(current, 2);
    // document.getElementById("operation_display").value = final;
}

function inverse() {
    let current = document.getElementById("number_display").value;
    document.getElementById("number_display").value = "(1 / (" + current + "))";
    calc();
    // let final = eval("1 /" + current);
    // document.getElementById("operation_display").value = final;
}

function absolute() {
    let current = document.getElementById("number_display").value;
    document.getElementById("number_display").value = Math.abs(current);

    // let current = document.getElementById("number_display").value.toString();
    // let final = Math.abs(current);
    // document.getElementById("operation_display").value = final;
}

function exponential() {
    let current = document.getElementById("number_display").value.toString();
    let final = Math.exp(current);
    document.getElementById("operation_display").value = final;
}

function squareroot() {
    let current = document.getElementById("number_display").value;
    document.getElementById("operation_display").value = Math.sqrt(current);
    document.getElementById("number_display").value = "√" + current;
}

function factorial() {
    let current = document.getElementById("number_display").value;
    let answer = fact(current);
    document.getElementById("operation_display").value = answer;
    document.getElementById("number_display").value = current + "!";
}

function fact(x) {
    let ans = 1;
    for (let i = 1; i <= x; i++) {
        ans = ans * i;
    }
    return ans;
}

function tenpow() {
    let current = document.getElementById("number_display").value;
    document.getElementById("operation_display").value = Math.pow(10, current);
    document.getElementById("number_display").value = "10^" + current;
}

function log() {
    let current = document.getElementById("number_display").value;
    document.getElementById("operation_display").value = Math.log10(eval(current));
    document.getElementById("number_display").value = "log(" + current + ")";
}

function ln() {
    let current = document.getElementById("number_display").value;
    document.getElementById("operation_display").value = Math.log(eval(current));
    document.getElementById("number_display").value = "log(" + current + ")";
}

function trignometry() {
    for(let i = 0; i<6 ;i++){
        document.getElementsByClassName("replace_normal_function")[i].style.display = "none";
    }
    for(let i = 0; i<6 ;i++){
        document.getElementsByClassName("replace_trignometric_function")[i].style.display = "block";
    }
    document.getElementById("trignometry_function_button").style.display = "none";
    document.getElementById("normal_function_button").style.display = "block";
}

function normal() {
    for(let i = 0; i<6 ;i++){
        document.getElementsByClassName("replace_normal_function")[i].style.display = "block";
    }
    for(let i = 0; i<6 ;i++){
        document.getElementsByClassName("replace_trignometric_function")[i].style.display = "none";
    }
    document.getElementById("trignometry_function_button").style.display = "block";
    document.getElementById("normal_function_button").style.display = "none";
}

function sin() {
    let current = document.getElementById("number_display").value;
    let degrees = current;
    let radians = degrees * Math.PI/180
    document.getElementById("operation_display").value = Math.round(Math.sin(eval(radians)));
    document.getElementById("number_display").value = "sin(" + current + "*)";
}

function cos() {
    let current = document.getElementById("number_display").value;
    let degrees = current;
    let radians = degrees * Math.PI/180
    document.getElementById("operation_display").value = Math.round(Math.cos(eval(radians)));
    document.getElementById("number_display").value = "cos(" + current + "*)";
}

function tan() {
    let current = document.getElementById("number_display").value;
    let degrees = current;
    let radians = degrees * Math.PI/180
    document.getElementById("operation_display").value = Math.round(Math.tan(eval(radians)));
    document.getElementById("number_display").value = "tan(" + current + "*)";
}

function cosec() {
    let current = document.getElementById("number_display").value;
    let degrees = current;
    let radians = degrees * Math.PI/180
    document.getElementById("operation_display").value = Math.round(eval(1 / Math.sin(eval(radians))));
    document.getElementById("number_display").value = "cosec(" + current + "*)";
}

function sec() {
    let current = document.getElementById("number_display").value;
    let degrees = current;
    let radians = degrees * Math.PI/180
    document.getElementById("operation_display").value = Math.round(eval(1 / Math.cos(eval(radians))));
    document.getElementById("number_display").value = "sec(" + current + "*)";
}

function cot() {
    let current = document.getElementById("number_display").value;
    let degrees = current;
    let radians = degrees * Math.PI/180
    document.getElementById("operation_display").value =Math.round(eval(1 / Math.tan(eval(radians)))) ;
    document.getElementById("number_display").value = "cot(" + current + "*)";
}

function memorySave(){
    let current = document.getElementById("number_display").value;
    localStorage.setItem("1",current);
    console.log(localStorage.getItem(1));
}

function memoryRead(){
    document.getElementById("number_display").value = localStorage.getItem(1);
    document.getElementById("operation_display").value = localStorage.getItem(1);
}

function memoryAdd(){
    let current = document.getElementById("number_display").value;
    let added = Number(localStorage.getItem(1)) + Number(current);
    localStorage.setItem("1",added);
    console.log(localStorage.getItem(1));
}

function memorySub(){
    let current = document.getElementById("number_display").value;
    let added = Number(localStorage.getItem(1)) - Number(current);
    localStorage.setItem("1",added);
}

function memoryClear(){
    localStorage.clear();
    document.getElementById("number_display").value = 0;
    document.getElementById("operation_display").value = 0;
}
