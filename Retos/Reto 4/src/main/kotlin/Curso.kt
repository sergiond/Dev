class Curso(val nombre: String,val instructor: Instructor){
    val estudiantes: MutableList<String> = mutableListOf("Julio","Andrea","Sofia")

    fun nuevoEstudiante(nuevo: String){
        estudiantes.add(nuevo)
        println("Estudiante $nuevo añadido correctamente al curso")
    }
    fun estudiantesMatriculados(){
        println(estudiantes)
    }

}