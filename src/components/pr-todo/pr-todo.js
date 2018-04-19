import React from 'react';
import PrSearch from '../pr-search/pr-search';
import PrList from '../pr-list/pr-list';

class PrTodo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            search: {},
            list: [
                { id: 1, name: 'Tomar Agua', done: false },
                { id: 2, name: 'Hacer ejercicio', done: false }
            ],
            originalList: []
        }

        this.onAgregar = this.onAgregar.bind(this);
        this.onBuscar = this.onBuscar.bind(this);
    }

    render () {
        return (
            <div className="pr-todo">
                <h1>TODO</h1>
                <PrSearch onAgregar={this.onAgregar} onBuscar={this.onBuscar}/>
                <PrList items={this.state.list}/>
            </div>
        );
    }

    componentDidMount () {
        this.setState({ originalList: this.state.list });
    }
    
    onAgregar (data) {
        this.setState((prev) => ({ list: [...prev.originalList, data] }));
        this.setState((prev) => ({ originalList: prev.list }));
    }

    onBuscar (data) {
        this.setState({
            list: this.state.originalList.filter(item => {
                        return item.name.toLowerCase().includes(data.text.toLowerCase())
                    })
        });
    }

    componentDidUpdate () {
        console.log('State: ', this.state);
    }
}

export default PrTodo;