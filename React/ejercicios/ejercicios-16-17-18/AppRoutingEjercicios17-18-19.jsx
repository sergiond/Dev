/*
Crear el sistema de enrutado de la aplicación en React:

- Permitir la navegación de Login a Registro y viceversa

- No podremos acceder a Tareas a no ser que nos hayamos logeado primero. 
*/

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import AgendaContactos from './pages/AgendaContactos';
import Loginform from './pages/loginForm';
import Registform from './pages/RegistForm';

function AppRoutingEjercicios171819() {
    
    const isLoged = true;

     

    return (
        <Router>
            <div>
                <aside>
                    <Link to='/'>AGENDA_|</Link>
                    <Link to='/login'>_LOGIN_</Link>
                    <Link to='/regist'>|_REGIST</Link>

                </aside>
                <main>
                    <Switch>
                        <Route exact path='/'>
                            { 
                                isLoged ?
                                    (<Redirect from='/' to='/AgendaContactos' />)
                                    :
                                    (<Redirect from='/' to='/login' />)
                            }
                        </Route>
                        <Route exact path='/login' component={Loginform}/>
                        <Route exact path='/AgendaContactos' component={AgendaContactos}>
                            { 
                                isLoged ? () => { return (<AgendaContactos></AgendaContactos>) } :(<Redirect from='/' to='/login' />)
                            }
                        </Route>
    
                        <Route exact path='/regist' component={Registform}/>
                    </Switch>
                </main>
            </div>
         
        </Router>
    );
}
export default AppRoutingEjercicios171819;