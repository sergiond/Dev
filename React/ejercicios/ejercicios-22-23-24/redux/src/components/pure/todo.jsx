import React from 'react'

const todo = ({ onClick, completed, text, id  }) => {
  return (
      <li onClick={onClick}
          style={ 
              {
                  textDecoration: completed ? 'line-throught' : 'none',
                  textDecorationColor: completed ? 'green' : 'none',
                  color: completed ? 'green' : 'none'
              }
          }
      >
          
          
        </li>
  )
}

export default todo;