import React from 'react';
import PropTypes from 'prop-types';

class PrSearch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        }

        this.buscarHandler = this.buscarHandler.bind(this);
        this.agregarHandler = this.agregarHandler.bind(this);
    }

    render () {
        return (
            <form>
                <input {...this.getInputProps()} />
                <button onClick={this.agregarHandler}>Agregar</button>
            </form>
        );
    }

    getInputProps () {
        return {
            type: "text",
            value: this.state.text,
            placeholder: "Buscar tarea",
            onChange: this.buscarHandler
        };
    }

    agregarHandler (e) {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        this.props.onAgregar({
            name: this.state.text,
            id: Date.now(),
            done: false
        });
    }

    buscarHandler (e) {
        e.preventDefault();

        //Update text to be used for search or to add  a new item
        this.setState({
            text: e.target.value
        });

        // whe don´t need to check for type function because the validation is made in "propTypes" property
        if(this.props.onBuscar) {
            this.props.onBuscar({
                text: e.target.value
            });
        }
    }
}

PrSearch.propTypes = {
    onAgregar: PropTypes.func.isRequired,
    onBuscar: PropTypes.func
};

export default PrSearch;