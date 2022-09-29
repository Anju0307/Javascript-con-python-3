addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let con=1;
        while(con<=10){
            num1= parseInt(prompt("Ingrese el numero 1"));
            num2= parseInt(prompt("Ingrese el numero 2"));
            let suma1 =suma(num1,num2);
            let resta1 =resta(num1,num2);
            let multi1= multi(num1,num2);
            let divi1 = divi(num1,num2);
            alert("La suma de los dos numeros es: "+suma1);
            alert("La resta de los dos numeros es: "+resta1);
            alert("La multiplicacion de los dos numeros es: "+multi1);
            alert("La division de los dos numeros es: "+divi1);
            con++;
        }
    });
})

function suma(num1,num2){
    let res = num1+num2;
    return res;
}
function resta(num1,num2){
    let res = num1-num2;
    return res;
}
function multi(num1,num2){
    let res = num1*num2;
    return res;
}
function divi(num1,num2){
    let res = num1/num2;
    return res;
}