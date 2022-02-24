import React from 'react'
import PropTypes from 'prop-types';
import { contacto } from '../class/contacto.class';
import '../estilo/style.scss'


const ContactComponent = ({ contacto, connect, remove }) =>{


    function userIsConnect() { 
        if (contacto.estado) {
            return (<i onClick={() => { connect(contacto); console.log('Usuario Conectado') }} className='bi bi-power contact-pointer' style={{ color: 'green' }}></i>);      
        }
        else { 
            return (<i onClick={() => { connect(contacto); console.log('Usuario Desconectado') }} className='bi bi-power contact-pointer' style={{ color: 'red' }}></i>);
        }
    }
  return (
      <tr>
          <th className='px-2'>
              <span >{contacto.nombre}</span>
          </th>
           <td className='px-2'>
                <span >{contacto.email}</span>
          </td>
          <td className='px-2'>
                {/* Execution of function to return icon depending on completion */}
               <span>{userIsConnect()}</span> 
          </td>
          <td className='px-2'>
                <i className='bi-trash contact-pointer ' style={{color: 'tomato'}} onClick={() => remove(contacto)}></i>
            </td>
      </tr>
  )
};


ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(contacto).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ContactComponent;
