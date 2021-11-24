
open class Usuario (val nombre: String){

    open val rol = "Usuario"
    val logging = nombre

    fun mostrar () {
        println ("El rol del usuario $nombre es $rol")
    }
    fun login (){
        println("Introduce usuario de $nombre :")
        val valorNombre = readLine()

        if (valorNombre == logging){
            println("login correcto")
        }else
            println("login incorrecto")
    }
}