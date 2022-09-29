addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let estudiantes = document.querySelector("#estudiantes").value;
        let con=1, notaFinal=0;
        while(estudiantes>=con){
            let notaFun = parseInt(prompt(`Ingrese la nota de Fundamentos del estudiante ${con}: `));
            let notaBD = parseInt(prompt(`Ingrese la nota de BD del estudiante ${con}: `));
            let notaEtica = parseInt(prompt(`Ingrese la nota de Etica del estudiante ${con}: `));
            notaFinal += ((notaFun*0.5)+(notaBD*0.3)+(notaEtica*0.2));
            con++;
        }
        let notaPro= notaFinal/estudiantes;
        alert(`La nota promedio de los estudiantes es de: ${notaPro}`);
    });
})
