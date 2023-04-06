var buttons = document.querySelectorAll("button");
var visor = document.querySelector(".visor");
var visorP = document.createElement("P");
visorP.textContent = "";
visor.appendChild(visorP);

for (var i = 0; i < buttons.length; i++) {
    var element = buttons[i];
    captureClick(element);
};

function captureClick(value) {
    value.addEventListener("click", function () {
        showVisor(value);
    })
};

function showVisor(botao) {
    if (botao.className == "number" || botao.textContent == ",") {
        visorP.textContent += botao.textContent;
    }
    else {
        switch (botao.textContent) {
            case "AC":
                visorP.textContent = "";
                break
            case "=":
                result();
                break
            case "X²":
                visorP.textContent += ` ${botao.textContent} `;
                result();
                break
            case "√":
                visorP.textContent += ` ${botao.textContent} `;
                result();
                break
            default:
                visorP.textContent += ` ${botao.textContent} `;
        }
    }
};

function result() {
    var replace = visorP.textContent.replaceAll(",", ".")
    var word = replace.split(" ");
    replace = operationAction(
        Number(word[0]),
        word[1],
        Number(word[2])
    );
    replace = replace.toString()
    visorP.textContent = replace.replaceAll(".", ",")
};

function operationAction(number1, operator, number2) {
    var calculo;
    switch (operator) {
        case "*":
            return calculo = number1 * number2;
            break;
        case "/":
            return calculo = number1 / number2;
            break;
        case "X²":
            return calculo = Math.pow(number1, 2);
            break;
        case "√":
            return calculo = Math.sqrt(number1, 2);
            break;
        case "-":
            return calculo = number1 - number2;
            break;
        case "+":
            console.log(number1, number2, number1 + number2);
            return calculo = number1 + number2;
            break;
        default:
            break;
    }
};