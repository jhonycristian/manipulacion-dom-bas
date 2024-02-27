const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const textToCopy = document.querySelector("#textToCopy");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult  = document.querySelector("#result");


form.addEventListener( "submit", btnOnclick)

function btnOnclick(f){
    f.preventDefault();
    const sumaImputs =  Number(input1.value) + Number(input2.value); 
    //Se muestra el resultado en la pantalla
    pResult.innerHTML ="resultado:" + sumaImputs;
}

