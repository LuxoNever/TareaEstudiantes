class Persona {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre 
        this.edad = edad
        this.tipo = tipo      
    }


    presentar(){

        console.log (`Hola soy ${this.nombre} y tengo edad ${this.edad} años`)

    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, carrera){

        super(nombre, edad)
        this.carrera = carrera
        this.tipo = "Estudiante"
    }

    infoEstudiantes(){

        console.log (`Soy estudiante de ${this.carrera}`)}

    presentar(){
        console.log (`Hola soy ${this.nombre} tengo ${this.edad} años `)
    }    

}

class Docente extends Persona{
    constructor(nombre, edad, materia){

        super(nombre, edad)
        this.materia = materia
        this.tipo = "Docente"
    }

    infoEstudiantes(){

        console.log (`Soy docente de ${this.materia}`)}

    presentar(){
        console.log (`Hola soy ${this.nombre} tengo ${this.edad} años `)
}      

}


class Administrativo extends Persona{
    constructor(nombre, edad, puesto){

        super(nombre, edad)
        this.puesto = puesto
        this.tipo = "Administrativo"
    }

    infoEstudiantes(){

        console.log (`Soy administrativo en el puesto de ${this.puesto}`)}
    presentar(){

        console.log (`Hola soy ${this.nombre} tengo ${this.edad} años`)
    }  

}

function mostrarInfoGeneral(Persona) {
    Persona.presentar()
    Persona.infoEstudiantes();
}

const estudiante = new Estudiante('Juan', 20, 'Ingeniería');
const docente = new Docente('María', 35, 'Matemáticas');
const administrativo = new Administrativo('Pedro', 40, 'Secretario');
mostrarInfoGeneral(estudiante); // "Hola, soy Juan, estudiante de Ingeniería."
mostrarInfoGeneral(docente); // "Hola, soy María, docente de Matemáticas."
mostrarInfoGeneral(administrativo);