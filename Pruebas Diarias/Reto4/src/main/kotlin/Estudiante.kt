class Estudiante(nombre: String): Usuario(nombre) {
    val cursos: MutableList<String> = mutableListOf("Java","HTML+CSS","SQL")

    override val rol = "Estudiante"
    val asignatura = "JUnit"

    fun matricula(){
        println(" el/la $rol $nombre está matriculado/a en $asignatura")
    }
    fun asignaturas(){
        cursos.add(asignatura)
        println(cursos)
    }

}