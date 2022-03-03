/*
Hacer una petición HTTP con Axios a la API descrita en la web https://api.chucknorris.io/ y crear un Componente React capaz de generar chistes aleatorios de Chuck Norris y mostrarlos.

    - Debe haber un botón que permita al usuario generar nuevos chistes.

    - También debe mostrarse un par de botones con Material UI que permitan votar (positivamente o negativamente un chiste).

    - Se debe mostrar el número de chistes te "han gustado" y cuántos "te han disgustado".
*/
import React, { useState, useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../ejercicios/css/style.scss';




import { getJoke } from './service/axiosService';


const Ejercicios192021 = () => {


    const [joke, setJoke] = useState(null);
    const [megusta, setMegusta] = useState(0);
    const [nomegusta, setNoMegusta] = useState(0);

    useEffect(() => {
        getChukJoke();
    }, []);
    

    const getChukJoke = () => { 

        getJoke()
            .then(
                (response) => { 
                    if (response.status === 200) {
                        setJoke(response.data);
                     }
                }
        )
            .catch(
                (error) => { 
                    console.log(`Somethin went wrong: ${error}`);
                }
        )
    }

    const acMeGusta = () => { 
        setMegusta(megusta + 1);
        console.log(megusta);
        
    }
    
    const acNoMeGusta = () => { 
        setNoMegusta(nomegusta + 1);
        console.log(nomegusta);
    }


    return (
        <div>
 
            {joke != null ?
                <div>
                    
                      <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                     >
                        <Grid item xs={12}>
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={ 6 }
                            >
                                <Grid item xs={3} >
                                    <h4 >Me Gustan:</h4>
                                    
                                    <p>{megusta}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <h2>Chuck Jokes</h2>
                                </Grid>
                                <Grid item xs={3}>
                                    <h4>NO Me Gustan:</h4>
                                    <p>{nomegusta}</p>
                                </Grid>
                                </Grid>
                            </Grid>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
           
                    >
                        <Grid item xs={4}>
                            <p >{joke.value}</p>
                        </Grid>
                        <Grid item xs={12}> 
                            <ButtonGroup
                                variant="contained"
                                color="primary"
                                aria-label="contained primary button group"
                               // className='buttons'
                            >
                                <Button onClick={acMeGusta}>Me gusta</Button>
                                <Button onClick={getChukJoke}>Nuevo Chiste</Button>
                                <Button onClick={acNoMeGusta}>No me gusta</Button>
                        </ButtonGroup>
                        </Grid>                        
                    </Grid>
                </div> :
            <p>ERROR</p> }

        </div>
    );
}

export default Ejercicios192021;
