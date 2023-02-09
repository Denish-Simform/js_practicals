
function evaluateString() {
    let operation_display = document.getElementById("operation_display").value;
    let number_display = document.getElementById("number_display").value;
    operation_display = Number(operation_display);
    if (Number.isInteger(operation_display)) {
        document.getElementById("number_display").value = operation_display;
    } else {
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
    } else if (x == 40) {
        document.getElementById("number_display").value += String.fromCharCode(x);
    } else {
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
    } else {
        document.getElementById("number_display").value += x;
    }
}

function backspace() {
    let current = document.getElementById("number_display").value.toString();
    let final = current.slice(0, current.length - 1);
    document.getElementById("number_display").value = final;
    document.getElementById("operation_display").value = final;
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
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("replace_normal_function")[i].style.display = "none";
    }
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("replace_trignometric_function")[i].style.display = "block";
    }
    document.getElementById("trignometry_function_button").style.display = "none";
    document.getElementById("normal_function_button").style.display = "block";
}

function normal() {
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("replace_normal_function")[i].style.display = "block";
    }
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("replace_trignometric_function")[i].style.display = "none";
    }
    document.getElementById("trignometry_function_button").style.display = "block";
    document.getElementById("normal_function_button").style.display = "none";
}

// function sin() {
//     let current = document.getElementById("number_display").value;
//     let degrees = current;
//     let radians = degrees * Math.PI / 180
//     document.getElementById("operation_display").value = Math.round(Math.sin(eval(radians)));
//     document.getElementById("number_display").value = "sin(" + current + "*)";
// }

// function cos() {
//     let current = document.getElementById("number_display").value;
//     let degrees = current;
//     let radians = degrees * Math.PI / 180
//     document.getElementById("operation_display").value = Math.round(Math.cos(eval(radians)));
//     document.getElementById("number_display").value = "cos(" + current + "*)";
// }

// function tan() {
//     let current = document.getElementById("number_display").value;
//     let degrees = current;
//     let radians = degrees * Math.PI / 180
//     document.getElementById("operation_display").value = Math.round(Math.tan(eval(radians)));
//     document.getElementById("number_display").value = "tan(" + current + "*)";
// }

// function cosec() {
//     let current = document.getElementById("number_display").value;
//     let degrees = current;
//     let radians = degrees * Math.PI / 180
//     document.getElementById("operation_display").value = Math.round(eval(1 / Math.sin(eval(radians))));
//     document.getElementById("number_display").value = "cosec(" + current + "*)";
// }

// function sec() {
//     let current = document.getElementById("number_display").value;
//     let degrees = current;
//     let radians = degrees * Math.PI / 180
//     document.getElementById("operation_display").value = Math.round(eval(1 / Math.cos(eval(radians))));
//     document.getElementById("number_display").value = "sec(" + current + "*)";
// }

// function cot() {
//     let current = document.getElementById("number_display").value;
//     let degrees = current;
//     let radians = degrees * Math.PI / 180;
//     document.getElementById("operation_display").value = Math.round(eval(1 / Math.tan(eval(radians))));
//     document.getElementById("number_display").value = "cot(" + current + "*)";
// }

function trigno_unit() {
    let unit = document.getElementById("unit").innerHTML;
    if (unit == 'DEG') {
        document.getElementById("unit").innerHTML = "RAD";
    } else {
        document.getElementById("unit").innerHTML = "DEG";
    }
}

function trigno_functions(type) {
    let unit = document.getElementById("unit").innerHTML;
    let current = document.getElementById("number_display").value;
    let degrees, radians;
    if (unit == 'DEG') {
        degrees = current;
        radians = degrees * Math.PI / 180;
    } else {
        radians = current;
    }
    switch (type) {
        case "Sin":
            document.getElementById("operation_display").value = Math.sin(eval(radians)).toFixed(3);
            if (unit == 'DEG') {
                document.getElementById("number_display").value = "sin(" + current + "*)";
            } else {
                document.getElementById("number_display").value = "sin(" + current + ")";
            }
            break;
        case "Cos":
            document.getElementById("operation_display").value = Math.cos(eval(radians)).toFixed(3);
            if (unit == 'DEG') {
                document.getElementById("number_display").value = "cos(" + current + "*)";
            } else {
                document.getElementById("number_display").value = "cos(" + current + ")";
            }
            break;
        case "Tan":
            document.getElementById("operation_display").value = Math.tan(eval(radians)).toFixed(3);
            if (unit == 'DEG') {
                document.getElementById("number_display").value = "tan(" + current + "*)";
            } else {
                document.getElementById("number_display").value = "tan(" + current + ")";
            }
            break;
        case "Cosec":
            document.getElementById("operation_display").value = eval(1 / Math.sin(eval(radians))).toFixed(3);
            if (unit == 'DEG') {
                document.getElementById("number_display").value = "cosec(" + current + "*)";
            } else {
                document.getElementById("number_display").value = "cosec(" + current + ")";
            }
            break;
        case "Sec":
            document.getElementById("operation_display").value = eval(1 / Math.cos(eval(radians))).toFixed(3);
            if (unit == 'DEG') {
                document.getElementById("number_display").value = "sec(" + current + "*)";
            } else {
                document.getElementById("number_display").value = "sec(" + current + ")";
            }
            break;
        case "Cot":
            document.getElementById("operation_display").value = eval(1 / Math.tan(eval(radians))).toFixed(3);
            if (unit == 'DEG') {
                document.getElementById("number_display").value = "cot(" + current + "*)";
            } else {
                document.getElementById("number_display").value = "cot(" + current + ")";
            }
            break;
    }
}

function memorySave() {
    let current = document.getElementById("number_display").value;
    localStorage.setItem("1", current);
    console.log(localStorage.getItem(1));
}

function memoryRead() {
    document.getElementById("number_display").value = localStorage.getItem(1);
    document.getElementById("operation_display").value = localStorage.getItem(1);
}

function memoryAdd() {
    let current = document.getElementById("number_display").value;
    let added = Number(localStorage.getItem(1)) + Number(current);
    localStorage.setItem("1", added);
    console.log(localStorage.getItem(1));
}

function memorySub() {
    let current = document.getElementById("number_display").value;
    let added = Number(localStorage.getItem(1)) - Number(current);
    localStorage.setItem("1", added);
}

function memoryClear() {
    localStorage.clear();
    document.getElementById("number_display").value = 0;
    document.getElementById("operation_display").value = 0;
}

function converter() {
    let display = document.getElementById("display");
    let number_display = document.getElementById("number_display");
    let operation_display = document.getElementById("operation_display");
    let button = document.getElementById("converter");
    if (button.innerHTML == 'Converter') {
        button.innerHTML = "Functions";    
        number_display.style.display = 'none';
        operation_display.style.display = 'none';
        // display.style = "display:flex; flex-direction:row; justify-content: space-around";
        let from_div = document.createElement('div');
        from_div.setAttribute('id', 'from_div');
        from_div.style = "display:flex; flex-direction:column; justify-content: space-around;";
        let to_div = document.createElement('div');
        to_div.setAttribute('id', 'to_div');
        to_div.style = "display:flex; flex-direction:column; justify-content: space-around;";
        display.appendChild(from_div);
        display.appendChild(to_div);
        let label1 = document.createElement('label');
        label1.setAttribute('id', 'label1');
        label1.innerHTML = 'label 1';
        label1.style = "width:150px";
        let label2 = document.createElement('label');
        label2.innerHTML = 'label 2';
        label2.style = "width:150px";
        let input1 = document.createElement('input');
        input1.setAttribute('id', 'input1');
        input1.setAttribute('type', 'number');
        input1.setAttribute('placeholder', '0');
        input1.style = "width: 156px; background-color: #ece9e9; border: none;";
        let input2 = document.createElement('input');
        input2.setAttribute('id', 'input2');
        input2.setAttribute('type', 'number');
        input2.setAttribute('placeholder', '0');
        input2.style = "width: 156px; background-color: #ece9e9; border: none;";
        from_div.appendChild(label1);
        from_div.appendChild(input1);
        to_div.appendChild(label2);
        to_div.appendChild(input2);
    } else {
        button.innerHTML = "Converter";
        document.getElementById('from_div').remove();
        document.getElementById('to_div').remove();
        number_display.style.display = 'block';
        operation_display.style.display = 'block';
    }

}
