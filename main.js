addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let con=1, aprueban=0,reprueban=0;
        while(con<=40){
            let nota1=parseInt(prompt(`Ingrese la nota 1 del estudiante ${con}`));
            let nota2=parseInt(prompt(`Ingrese la nota 2 del estudiante ${con}`));
            let nota3=parseInt(prompt(`Ingrese la nota 3 del estudiante ${con}`));
            let nota4=parseInt(prompt(`Ingrese la nota 4 del estudiante ${con}`));
            let nota5=parseInt(prompt(`Ingrese la nota 5 del estudiante ${con}`));
            let pro= (nota1+nota2+nota3+nota4+nota5)/5;
            if (pro<3){
                reprueban++;
            } else{
                aprueban++;
            }
            con++;
        }
        alert(`La cantidad de estudiantes que reprueban son ${reprueban}`);
        alert(`La cantidad de estudiantes que aprueban son ${aprueban}`);
    });
})
