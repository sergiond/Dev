function simularCuota() {
var cantidad = document.getElementById('cantidad').value
var mensualidades = document.getElementById('mensualidades').value
var interes = document.getElementById('interes').value

    if (cantidad < 100 || mensualidades < 1 || interes < 0.1) {
        alert("Datos incorrectos")
    }    
    else {
        var cuota = cantidad * (Math.pow(1 + interes / 100, mensualidades) * interes / 100) / (Math.pow(1 + interes / 100, mensualidades) - 1);
        document.getElementById('CantidadCuotas').innerHTML = Math.round(cuota * 100)/100;
    }
        
}
