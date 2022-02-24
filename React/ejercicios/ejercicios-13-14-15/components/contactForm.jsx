import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/* MODELO */

import { contacto } from '../class/contacto.class';


const ContactForm = ({ add }) => {

/* 
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

  ) */

  //valores iniciales para las variables nombre y email
  const initialValues = {
    nameRef: '',
    emailRef: ''
  }

  
  //Esquema del modelo

  const contactSchema = Yup.object().shape(
    {
      nameRef: Yup.string()
        .min(5, 'Debe terner como mínimo 5 caracteres')
        .max(12, 'Debe terner como máximo 12 caracteres')
        .required('Campo obligatorio'),
      emailRef: Yup.string()
        .email('Email invalido')
        .required('Campo obligatorio')
    }
  )

  return (
    <div>
      <Formik
        initialValues={ initialValues }
        // Esquema de validación de YUP
        validationSchema={contactSchema}
        // Evento onSubmit
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          let newContact = new contacto(values.nameRef, values.emailRef,true);
          add(newContact);
        }}
      >
        {({
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur
        }) => (
          <Form>
            <div className='col'>
              <Field id='nameRef' type='text' name='nameRef' placeholder='Nombre del contacto' className="form-control mb-2" />
              { 
                errors.nameRef && touched.nameRef &&
                (
                  <ErrorMessage name='nameRef' component='div' className='mb-2'></ErrorMessage>
                )
              }
            </div>
            <div className='col'>
              <Field id='emailRef' type='text' name='emailRef' placeholder='Email del contacto' className="form-control mb-2" />
              { 
                errors.emailRef && touched.emailRef &&
                (
                  <ErrorMessage name='emailRef' component='div' className='mb-2'></ErrorMessage>
                )
              }
            </div>
            <div className='col'>
              <button className="btn btn-outline-dark mb-2" type='submit'>Añadir</button>
            </div>
          </Form>
        )

        }
        
      </Formik>
    </div>
  )
}


ContactForm.protoTypes = {
    add: PropTypes.func.isRequired, 
}

export default ContactForm;