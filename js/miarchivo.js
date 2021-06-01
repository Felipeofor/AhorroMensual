

const enviar = document.querySelector("#submit");

enviar.addEventListener("click", calcular);

function calcular() {

    let ingreso = document.querySelector("#number").value;

    let paraTodaLaVida = ingreso * 0.10;

    let sueldoReal = ingreso - paraTodaLaVida;

    let gastosBasicos = sueldoReal * 0.60;
    let gustosCortoPlazo = sueldoReal *0.10;
    let gustosLargoPlazo = sueldoReal *0.10;
    let colchon = sueldoReal *0.20;

    console.log(ingreso,paraTodaLaVida,sueldoReal);

    alert(`Tu sueldo es ${ingreso} y vas a ahorra para toda la vida: ${paraTodaLaVida}, con lo que queda podes gastar en: Gastos Basicos:${gastosBasicos},
    Gustos de largo plazo: ${gustosLargoPlazo}, Gustos de corto plazo: ${gustosCortoPlazo} y para emeregencias esta el coclchon; ${colchon}`);
}

