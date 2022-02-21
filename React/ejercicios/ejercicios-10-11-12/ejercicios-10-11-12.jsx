/*
En este ejercicio tendréis que crear un componente el cual contenga un elemento, puede ser un rectángulo, cuadrado.
Las dimensiones del elemento serán de ancho 255px y de alto 255px y su color inicial tiene que ser negro.
Dentro del componente crearéis varios métodos de captura del ratón que harán lo siguiente para que el color del elemento cambie:

- Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.
- Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.
- Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color. */


import React, { useState } from 'react';

const Ejercicios101112 = () => {

    const [color, setColor] = useState('#000000');
    const [manageInterval, setManageInterval] = useState(0);
    const [doubleClick, setDoubleClick] = useState(0);

    const getColor = () => Math.floor(Math.random()*256);
    
    const getHex = (red, green, blue) =>  
        '#' + [red, green, blue].map(e => {
            const hex = e.toString(16);
            return hex.lenght === 1 ? '0' + hex : hex;
        }).join('');
    
     const generateHex = () => {
        const rgb = {
            red: getColor(),
            green: getColor(),
            blue: getColor(),
        };

        setColor(getHex(rgb.red, rgb.green, rgb.blue));  
    };

    const changeColor = () => {
        setManageInterval(setInterval(generateHex, 2000));
    };
    
    const stopChangeColor = () => {
        clearInterval(manageInterval);
    };

    const clickChangeColor = () => {
        if (doubleClick === 2) {
            clearInterval(manageInterval);
        }
        else setDoubleClick(doubleClick + 1);
            
    };
 
    return (
        <div>
            <div onMouseOver={changeColor} onMouseLeave={stopChangeColor} onClick={clickChangeColor} style={{ width: '255px', height: '255px', backgroundColor: color }}>
            </div>
            <p>Color: { color } </p>
        </div>
    );
}

export default Ejercicios101112;
