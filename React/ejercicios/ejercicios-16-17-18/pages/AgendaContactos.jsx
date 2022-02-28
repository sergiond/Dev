import React, { useState, useEffect } from 'react';
import ContactComponent from '../components/contactComponent';
import ContactForm from '../components/contactForm';
import { contacto } from '../class/contacto.class';



const AgendaContactos = () => {

    const modeloContacto1 = new contacto('Sergio', 'sergio@contacto.es', true);
    const modeloContacto2 = new contacto('prueba', 'prueba@contacto.es', false);


    const [nuevoContacto, setNuevoContacto] = useState([modeloContacto1,modeloContacto2]);
    const [loading, setLoading] = useState(true);

    //control ciclo de vida del componente
      useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
      }, [nuevoContacto])
    
 
    function connect(contacto) { 
        console.log('Cambiar estado de contacto:', contacto);
        //buscamos la tarea por el índice
        const index = nuevoContacto.indexOf(contacto)
        //variable temporal con todas las tareas que tenemos
        const tempcontacto = [...nuevoContacto];

        //Se cambia el estado del elemento 
        tempcontacto[index].estado = !tempcontacto[index].estado;
        //actualizamos el estado del componente
        setNuevoContacto(tempcontacto);
    }

    function remove(contacto) { 
        console.log('eliminar contacto:', contacto);
        const index = nuevoContacto.indexOf(contacto);
        const tempcontacto = [...nuevoContacto];
        tempcontacto.splice(index, 1);
        setNuevoContacto(tempcontacto);
    }

    function addContact(contacto) { 
        console.log('Añadir contacto:', contacto);
        const tempcontacto = [...nuevoContacto];
        tempcontacto.push(contacto);
        setNuevoContacto(tempcontacto); 
    }


     const TableContact = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col' className='px-2'>Nombre</th>
                        <th scope='col' className='px-2'>Email</th>
                        <th scope='col' className='px-2'>Estado</th>
                        <th scope='col' className='px-2'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                     {nuevoContacto.map((contacto, index) => { 
                         return (
                            
                            <ContactComponent
                                 key={index}
                                contacto={contacto}
                                connect={connect}
                                 remove={remove}
                             >    
                            </ContactComponent>
                        );
                        }
                     )} 
                </tbody>
            </table>
        );
        
    } 
    let allContactTable

    if(nuevoContacto.length > 0){
        allContactTable = <TableContact></TableContact>
    }else{
        allContactTable = (
        <div>
            <h3> No hay contactos para mostrar</h3>
            <h4>añade contacto</h4>
        </div>
        )
    }
    
    return (
        <div >
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header '>
                        <h1>
                            Contactos
                        </h1>

                    </div>
                    <div className='card-body mt-3 ' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <div className='row mb-5'>
                            {loading ? <p>Cargando contactos</p> : allContactTable}
                        </div>
             
                        <div className='row w-75'>
                            <div className='position-absolute bottom-0 start-50 translate-middle-x'>
                                <h2 className='mb-3' >Añadir Contacto: </h2>
                                <ContactForm add={ addContact } ></ContactForm>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default AgendaContactos;
