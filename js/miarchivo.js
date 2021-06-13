///////////////CALCULO DE AHORRO//////////////

const enviar = document.querySelector(".add");

enviar.addEventListener("click", calcular);

function calcular(e) {



    let ingreso = document.querySelector(".number").value;

    let paraTodaLaVida = ingreso * 0.10;

    let sueldoReal = ingreso - paraTodaLaVida;

    let gastosBasicos = sueldoReal * 0.60;
    let gustosCortoPlazo = sueldoReal * 0.10;
    let gustosLargoPlazo = sueldoReal * 0.10;
    let emergencias = sueldoReal * 0.20;

    console.log(ingreso, paraTodaLaVida, sueldoReal);

    //Inserto los datos en la tabla


    const th4 = document.querySelector(".td1");
    th4.textContent = `${ingreso}`;


    const td1 = document.querySelector(".td2");
    td1.textContent = `${paraTodaLaVida}`;


    const td2 = document.querySelector(".td3");
    td2.textContent = `${gastosBasicos}`;

    const td3 = document.querySelector(".td4");
    td3.textContent = `${gustosLargoPlazo}`;

    const td4 = document.querySelector(".td5");
    td4.textContent = `${gustosCortoPlazo}`;

    const td5 = document.querySelector(".td6");
    td5.textContent = `${emergencias}`;

    //cancelamos el comportamiento del evento

    e.preventDefault();

}