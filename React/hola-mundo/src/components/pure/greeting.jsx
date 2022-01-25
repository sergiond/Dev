import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    
    constructor(props) { 
        super(props);
        this.state = {
            age: 33
        }
    }

    render() {
        return (
            <div>
                <h1>Como te va {this.props.name}</h1>
                <h2> feliz cumple n&uacute;mero {this.state.age}</h2>

                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div> 
        );
    }
    
    birthday = () => { 
        this.setState(prevState => ({age: prevState.age + 1}))
    }

}
    

Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
