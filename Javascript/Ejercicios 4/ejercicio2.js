/**En el archivo "ejercicio2.js" crea un bucle que haga 10 iteraciones y en cada una indique el número de esta. Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo". */

primo:
for (i = 0; i < 10; i++) {
     if (i == 0 || i == 1) {
            console.log(i)
            continue primo
        }
    for (j = 2; j <= i; j++) { 
        if (i % j == 0) {
            if (i == j) {
                console.log('Numero primo')
            }
            else {
                console.log(i)
            }
            continue primo
        } 
            
    } 
    
}
