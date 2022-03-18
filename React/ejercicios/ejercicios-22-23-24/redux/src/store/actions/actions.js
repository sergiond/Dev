//Las acciones son funciones que devuelven un type y un payload.
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Creamos un ID incremental para cada tarea
let todoID = 0;

//funcion que añade una tarea, recibe un texto y devuelve una acción
export const addTodo = (text) => { 
    return {
        //va a tener un tipo el tipo que yo indique
        type: ADD_TODO,
        //El payload puede ser lo que yo quiera, en este caso será el ID incremental y el texto de la acción
        payload: {
            id: todoID++,
            text
        }

    }
}

//La siguiente es una función que indica al reducer que cambia el estado de completo a incompleo y viceversa

export const toggleTodo = (id) => { 
    return {

        type: TOGGLE_TODO,
        //se devuelve el ID para que lo encuentre el reducer y lo actualice
        payload: {
            id
        }
    
    }
}

//recibimos un filtro y devolvemos la acción del tipo SET_VISBILITY FILTER
export const setVisibilityFilter = (filter) => { 
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}
