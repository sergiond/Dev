import React, { useState } from "react";

const ComponenteB = ({ props }) => {

    const [estado, setestado] = useState(props);

    const CambioEstado = () => { 
        setestado(!estado)
        
    }
        return (
            <div>    
                <h2> Estado: {estado ? 'Contacto En Línea': 'Contacto No Disponible'}</h2>    
                 <div>
                    <button onClick={CambioEstado}>Cambio de estado</button>
                </div>
            </div>
    );  
    
}

export default ComponenteB;
