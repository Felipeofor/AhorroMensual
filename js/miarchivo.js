
///////////////CALCULO DE AHORRO//////////////

const enviar = document.querySelector(".add");

enviar.addEventListener("click", calcular);

function calcular(e) {



    let ingreso = document.querySelector("#number").value;

    let paraTodaLaVida = ingreso * 0.10;

    let sueldoReal = ingreso - paraTodaLaVida;

    let gastosBasicos = sueldoReal * 0.60;
    let gustosCortoPlazo = sueldoReal *0.10;
    let gustosLargoPlazo = sueldoReal *0.10;
    let emergencias = sueldoReal *0.20;

    console.log(ingreso,paraTodaLaVida,sueldoReal);


/*
    console.log(`Tu sueldo es ${ingreso} y vas a ahorra para toda la vida: ${paraTodaLaVida}, con lo que queda podes gastar en: Gastos Basicos:${gastosBasicos},
    Gustos de largo plazo: ${gustosLargoPlazo}, Gustos de corto plazo: ${gustosCortoPlazo} y para emeregencias esta el coclchon; ${emergencias}`);
*/

    //Inserto los datos en la tabla
  
    const tabla = document.querySelector (".calculadora");


    var tr = document.querySelector("tr");
    tr.setAttribute("class","table-secondary");
    tabla.appendChild(tr);

    var tr1 = document.createElement("th");
    tr1.textContent = `-`
    tabla.appendChild(tr1);

    var th4 = document.createElement("th");
    th4.textContent = `${ingreso}`;
    tabla.appendChild(th4);

    var td1 = document.createElement("th");
    td1.textContent = `${paraTodaLaVida}`;
    tabla.appendChild(td1);

    var td2 = document.createElement("th");
    td2.textContent = `${gastosBasicos}`;
    tabla.appendChild(td2);

    var td3 = document.createElement("th");
    td3.textContent = `${gustosLargoPlazo}`;
    tabla.appendChild(td3);

    var td4 = document.createElement("th");
    td4.textContent = `${gustosCortoPlazo}`;
    tabla.appendChild(td4);

    var td5 = document.createElement("th");
    td5.textContent = `${emergencias}`;
    tabla.appendChild(td5);

//cancelamos el comportamiento del evento

    e.preventDefault();

//obtenemos el elemento desde el cual se disparo el evento

    let miformulario = e.target

    miformulario.reset();
}
