

fun main (args: Array <String>) {
    val cursos: MutableList<String> = mutableListOf("Java","HTML+CSS","SQL")

    val user = Usuario("sergio")
    user.mostrar()
    user.login() // es igual al nombre de usuario

    val user2 = Estudiante("María")
    user2.asignaturas()
    user2.matricula()

    val user3 = Instructor("Juan")
    user3.imparte()
    user3.asignaturasImpartidas()

    val user4 = Administrador("Lorena")
    user4.administra()

    val curso = Curso("Kotlin",user3)
    curso.nuevoEstudiante("Sergio")
    curso.estudiantesMatriculados()
}