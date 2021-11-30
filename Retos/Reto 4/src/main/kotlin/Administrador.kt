class Administrador(nombre: String): Usuario(nombre) {
    override val rol = "Administrador/a"
    val gestion = "Moodle"

    fun administra(){
        println(" el/la $rol $nombre administra $gestion")
    }
}