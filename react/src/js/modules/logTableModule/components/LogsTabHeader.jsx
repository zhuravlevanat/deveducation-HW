import React from 'react';
import value from '../../../config/config';

function Header() {
    return (
        <tr>
        <th>ID</th>
        <th>TIME</th>
        <th>VERSION</th>
        <th>LOGGED USER</th>
        <th>{ value.val.toUpperCase() }</th>
        <th>CHANGE KEY</th>
        <th>OLD DATA</th>
        <th>NEW DATA</th>
    </tr>
    );
}

export default React.memo(Header);