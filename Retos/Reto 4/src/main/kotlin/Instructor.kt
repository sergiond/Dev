class Instructor(nombre: String): Usuario(nombre) {
    val cursos: MutableList<String> = mutableListOf("Java")

    override val rol = "Instructor/a"
    val clase = "Font-end"

    fun imparte(){
        println(" el/la $rol $nombre imparte la clase de $clase")
    }
    fun asignaturasImpartidas(){
        cursos.add(clase)
        println(cursos)
    }

}