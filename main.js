addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let vendedores = document.querySelector("#vendedores").value;
        let con=1;
        while(vendedores>=con){
            let sueldo = parseInt(prompt(`Ingrese el sueldo del vendedor ${con}`));
            let venta1= parseInt(prompt("Ingrese la venta numero 1"));
            let venta2= parseInt(prompt("Ingrese la venta numero 2"));
            let venta3= parseInt(prompt("Ingrese la venta numero 3"));
            let sueldoTotal = sueldo+ ((venta1+venta2+venta3)*0.10);
            alert(`El sueldo del vendedor ${con} es de ${sueldoTotal}`);
            con++;
        }
    });
})
