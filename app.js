//variables
var resultado = document.getElementById("resultado");
var cero = document.getElementById("num-0")
var uno = document.getElementById("num-1")
var dos = document.getElementById("num-2")
var tres = document.getElementById("num-3")
var cuatro = document.getElementById("num-4")
var cinco = document.getElementById("num-5")
var seis = document.getElementById("num-6")
var siete = document.getElementById("num-7")
var ocho = document.getElementById("num-8")
var nueve = document.getElementById("num-9")
var ce = document.getElementById("ce")
var mas = document.getElementById("mas")
var menos = document.getElementById("menos")
var multiplicacion = document.getElementById("multiplicacion")
var division = document.getElementById("division")
var operandoA;
var operandoB;
var operacion;

cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0"
}
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1"
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2"
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3"
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4"
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5"
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6"
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7"
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8"
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9"
}
function limpiar() {
    resultado.textContent = ""
}
function resetear() {
    resultado.textContent = ""
    operandoA = 0
    operandoB = 0
    operacion = ""
}
function resolver() {
    var res = 0
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB)
            break
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB)
            break
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB)
            break
        case "x":
            res = parseFloat(operandoA) * parseFloat(operandoB)
            break
    }
    resetear()
    resultado.textContent = res;
}
ce.onclick = function (e) {
    resetear()
}

mas.onclick = function (e) {
    operandoA = resultado.textContent
    operacion = "+"
    limpiar()
}
menos.onclick = function (e) {
    operandoA = resultado.textContent
    operacion = "-"
    limpiar()
}
division.onclick = function (e) {
    operandoA = resultado.textContent
    operacion = "/"
    limpiar()
}
multiplicacion.onclick = function (e) {
    operandoA = resultado.textContent
    operacion = "x"
    limpiar()
}
igual.onclick = function (e) {
    operandoB = resultado.textContent
    resolver()
}

function resetear() {

    resultado.textContent = ""
    operandoA = 0;
    operandoB = 0;
    operacion = ""
}