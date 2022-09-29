addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let vehiculos = document.querySelector("#vehiculos").value;
        let con=1,amari=0,rosa=0,roja=0,verde=0,azul=0;
        while(vehiculos>=con){
            let numeroPlaca=parseInt(prompt("Ingrese el numero de la placa"));
            if (numeroPlaca == 1 || numeroPlaca==2){
                amari++;
            } else if (numeroPlaca == 3 || numeroPlaca==4){
                rosa++;
            } else if (numeroPlaca == 5 || numeroPlaca==6){
                roja++;
            } else if( numeroPlaca ==7 || numeroPlaca ==8){
                verde++;
            } else if (numeroPlaca == 9 || numeroPlaca==0){
                azul++;
            } else {
                continue;
            }
            con++;
        }
        alert(`La cantidad de vehiculos con color amarillo son: ${amari}`);
        alert(`La cantidad de vehiculos con color rosa son: ${rosa}`);
        alert(`La cantidad de vehiculos con color roja son: ${roja}`);
        alert(`La cantidad de vehiculos con color verde son: ${verde}`);
        alert(`La cantidad de vehiculos con color azul son: ${azul}`);
    });
})
