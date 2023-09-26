// Pegar os valores do formulario
let nome = document.querySelector("#nome")
let numero = document.querySelector("#numero")
let email = document.querySelector("#email")
let cep = document.querySelector("#cep")

const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")

const output = document.querySelector("output")

const cilin = document.querySelector("#cc")
const modelo = document.querySelector("#modelo")
const cor = document.querySelector("#cor")
const ano = document.querySelector("#anomodelo")

cc.addEventListener("change", calcular)
modelo.addEventListener("change", calcular)
cor.addEventListener("change", calcular)
ano.addEventListener("change", calcular)

// Calcular o preço do orçcamento

function calcular() {
    let inicial = 25000
    let valor = inicial

    if (cc.value == 1) {
        valor = valor + 5000
    } else {
        valor = valor + 10000
    }

    if (modelo == 1) {
        valor += 5000
    } else {
        valor += 10000
    }

    switch (parseInt(cor.value)) {
        case 1:
            valor += 3000;
            break;
        case 2:
            valor += 500;
            break;
        case 3:
            valor += 1000;
            break;
        case 4:
            valor += 2500;
            break;
        case 5:
            valor += 1500;
            break;
        default:
            break;
    }

    switch (parseInt(ano.value)) {
        case 1:
            valor += 3000
            break;
        case 2:
            valor += 6000
            break;
        case 3:
            valor += 8000
            break;
        case 4:
            valor += 10000
            break;
        case 5:
            valor += 13000
            break;
        case 6:
            valor += 16000
            break;
        case 7:
            valor += 18000
            break;
        case 8:
            valor += 20000
            break;
         default:
            break;
    }

    switch (parseInt(modelo.value)) {
        case 1:
            valor += 10000
            break;
        case 2:
            valor += 20000
            break;
        case 3:
            valor += 30000
            break;    
         default:
            break;    
    }


    output.innerText = `R$ ${valor.toFixed(2)}`

}
// Mostrar o preço