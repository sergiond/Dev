import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/actions/actions'
import Filter from '../pure/Filter'

//las ownProps, son las prop de este filter container
const mapStateToProps = (state, ownProps) => {
    /* Comprobará el filter propio con el filter del state*/
    return {
        
        active: ownProps.filter === state.filterState
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }

}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer

