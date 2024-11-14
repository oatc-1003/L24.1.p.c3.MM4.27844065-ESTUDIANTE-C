// ESTUDIANTE-C
// Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
// máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
// Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
// inserte un estudiante en una posición dada (siendo 0 la primera posición).
// La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
// Función: insertarEstudEnPosicion.
// Parámetros: estudiantes (array de objetos estudiante), nombre, semestre, nota y posición.
// Retorno: array de objetos estudiante con el estudiante insertado en la posición indicada
// (siendo 0 la primera posición). 

import Estudiante from "./clases/estudiantes.js";
import GrupoEstudiantes from "./clases/grupoEstudiantes.js";
import datos from "./datos.js";

let _grupoEstudiantes=new GrupoEstudiantes()
let $salida=document.getElementById("salida")
let $insertarBtn=document.getElementById("insertar")
datos.forEach(dato=>{
    let _nuevoEstudiante=new Estudiante(dato)
    _grupoEstudiantes.agregarEstudiante(_nuevoEstudiante)

})

$salida.innerHTML=`
    <h2>Los estudiantes son:</h2>
    <br>
    <ul>
        ${_grupoEstudiantes.estudiantes.map(estudiante=>{
            return `<li>${estudiante.nombre} - ${estudiante.semestre} semestre </li>`
        })}
    </ul>

`

let insertarEstudEnPosicion=(estudiantes, {nombre, semestre,nota}, posicion)=>{
    let nuevoEstudiante=new Estudiante({nombre, semestre,nota})
        estudiantes.splice(posicion,0,nuevoEstudiante)
    return estudiantes 

}

$insertarBtn.addEventListener("click",e=>{

let nombre=prompt("Nombre del estudiante nuevo")
let semestre=+prompt("Semestre del estudiante nuevo")
let nota=+prompt("Nota del estudiante nuevo")
let posicion=+prompt("En que posicion de la lista deseas insertar al estudiante?(la posicion 1 correponde al nro 0)")

    let nuevaListaEstudiantes=insertarEstudEnPosicion(_grupoEstudiantes.estudiantes, {nombre, semestre,nota}, posicion)
    $salida.innerHTML=` 
    <h2>Los estudiantes son:</h2>
    <br>
    <ul>
        ${nuevaListaEstudiantes.map(estudiante=>{
            return `<li>${estudiante.nombre} - ${estudiante.semestre} semestre </li>`
        })}
    </ul>

`
})