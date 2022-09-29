addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let avion=20,proyec=10,distacia=0;
        while(distacia<10000){
            avion=avion*2;
            proyec= proyec*2;
            distacia = avion+proyec;
        }
        alert(`La distancia ya es mayor de 10000 y la distancia de diferencia es de: ${distacia}`);
    });
})
