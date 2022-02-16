import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../class/contacto.class';


const ContactForm = ({ add, length }) => {


    const nameRef = useRef('');
    const emailRef = useRef('');


    function addContact(e){
      e.preventDefault();
      
      const newContact = new contacto(nameRef.current.value, emailRef.current.value, true);
      
      add(newContact);
    }
  
  return (
    <div className='row'>
      <form onSubmit={addContact}>
        <div className='col'>
          <input ref={nameRef} name="name" placeholder="Nombre contacto" className="form-control mb-2"   />
        </div>
        <div className='col'>
          <input ref={emailRef} name="email" type="email" placeholder="Email contacto" className="form-control mb-2"  />
        </div>
        <div className='col'>
          <button className="btn btn-outline-dark mb-2" onClick={addContact} type='submit'>Añadir</button>
        </div>
      </form>
    </div>

  )
}


ContactForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default ContactForm;