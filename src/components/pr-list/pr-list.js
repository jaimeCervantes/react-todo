import React from 'react';
import PrListItem from '../pr-list-item/pr-list-item';

import PropTypes from 'prop-types';
import './styles.css';

class PrList extends React.Component {

    render () {
        return (
            <ul className="pr-list">
                {this.props.items.map(item => <PrListItem item={item} key={item.id}/>)}
            </ul>
        );
    }
}

PrList.propTypes = {
    items: PropTypes.array
}

export default PrList;