addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let con=1,notaPro=0;
        while(con<=5){
            let nombre=prompt(`Ingrese el nombre del estudiante ${con}`);
            let apellido = prompt(`Ingrese el apellido del estudiante ${con}`);
            let edad = parseInt(prompt(`Ingrese la edad del estudiante ${con}`));
            let nota = parseInt(prompt(`Ingrese la nota del estudiante ${con}`));
            notaPro+=nota;
            alert(`El nombre del estudiante es ${nombre} y su apellido es ${apellido} tiene una edad de ${edad} y su nota es de ${nota}`);
            con++;
        }
        let pro = notaPro/5;
        alert(`La nota promedio es de: ${pro}`);
    });
})
