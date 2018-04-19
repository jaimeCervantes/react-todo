import React from 'react';
import './styles.css';

class PrListItem extends React.Component {
    render () {
        return (
            <li className="pr-list-item">{this.props.item.name}
                {(!this.props.item.done) ? <button>Hecho</button> : ''}
            </li>
        )
    }
}

export default PrListItem;