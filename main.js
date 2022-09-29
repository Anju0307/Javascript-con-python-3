addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let canGallinas = document.querySelector("#canGallinas").value;
        bucle(canGallinas);
        
    });
})

function bucle(canGallinas){
    let con=1,calidad=0;
    const precio= 500;
    while(canGallinas>=con){
        let peso =parseInt(prompt(`Ingrese el peso de la gallina ${con}`)) ;
        let altura = parseInt(prompt(`Ingrese la altura de la gallina ${con}`));
        let huevos = parseInt(prompt(`Ingrese la cantidad de huevos de la gallina ${con}`));
        calidad+=(peso* altura)/huevos;
        con++;
    }
    let prom=calidad/canGallinas;
    let kilos = parseInt(prompt("Cuantos kilos de huevos quieres"));
    let res = (kilos*prom)*precio;
    alert(res);
}
