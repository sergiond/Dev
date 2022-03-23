
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import Todoform from '../pure/Todoform'



const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
};

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(Todoform);

export default TodoFormContainer;