import React, { useState } from 'react';
import PropTypes from 'prop-types';




const Greetingf = (props) => {

    // const [variable, método para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(29);

    const birthday = () => { 
        // este método se encargaría de actualizar el Stage
        setage(age + 1)
    }
    return (
    <div>
        <h1>Como te va {props.name}</h1>
        <h2> feliz cumple n&uacute;mero {age}</h2>
        <div>
            <button onClick={birthday}>Cumplir años</button>
        </div>
    </div> 
    );
};


Greetingf.propTypes = {
    name: PropTypes.string,
};


export default Greetingf;
