addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let vehiculos = document.querySelector("#vehiculos").value;
        let con=1, autobus=0, camion=0, motocicleta=0, turismo=0, pasajeros=0;
        while(vehiculos>=con){
            let vehiculo= prompt("Ingrese el tipo de vehiculo");
            if (vehiculo=="autobus"){
                autobus++;
            } else if (vehiculo=="camion"){
                camion++;
            } else if (vehiculo=='motocicleta'){
                motocicleta++;
            } else if (vehiculo='turismo'){
                pasajeros+=parseInt(prompt("Cantidad de turistas en el vehiculo: "));
                turismo++;
            }
            con++;
        }
        alert(`La cantidad de autobuses son: ${autobus}`);
        alert(`La cantidad de camion son: ${camion}`);
        alert(`La cantidad de motocicleta son: ${motocicleta}`);
        alert(`La cantidad de turismo son: ${turismo} y sus pasajeros totales son ${pasajeros}`);
    });
})
