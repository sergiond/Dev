import React from 'react';
import FilterContainer from '../containers/FilterContainer';


const Filteroptions = () => {

       return (
           <div className='filters'>
               
               <h2>Filters</h2>
               { /* Cada filtro tendrá sus propios contenedores */}
               <FilterContainer
                   filter='SHOW_ALL'
               >
                   ALL
               </FilterContainer>
               <FilterContainer
                   filter='SHOW_ACTIVE'
               >
                   ACTIVE
               </FilterContainer>
               <FilterContainer
                   filter='SHOW_COMPLETED'
               >
                   COMPLETED
               </FilterContainer>
               
        </div>
    );
};



export default Filteroptions;
