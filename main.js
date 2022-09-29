addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let mujer = 1 ,hombre=7,con=0;
        while(mujer+hombre<=42){
            con++;
            mujer++;
            hombre++;
        }
        alert(`La mujer numero ${mujer} bailo con el hombre ${hombre}`)
        alert(`La cantidad de mujeres que habia en el baile son ${con}`);
    });
})
