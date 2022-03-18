// es Reducer marcará un estado inicial vacio

import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

let initialState = [];

/**
 * en el primer caso del switch se envia todo lo que había previamente en el estado, y se añade lo que hay en el ID de la acción, el TEXTO de la acción, 
 * y se complementa con un variabable llamada 'completed' inicializada a false (ya que al ser una neuva tarea se entiende que no está hecha).
 * 
 * En el caso del TOGGLE_TODO, necesitamos identificar al elemento, por ello vamos a mapear el elemento por el ID, también se podría usar un filter,
 */
export const todosReducer = (state = initialState, action) => { 
    
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, 
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
                
            
        case TOGGLE_TODO:
            return state.map((todo) => (
                todo.id === action.payload.id
                    ?
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                    :
                    todo
            )
            )
    
        default:
            return state;
            
            
    }

}