import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../../base/PureComponent.jsx';
import * as Diff from 'diff';
import value from '../../../config/config';

class LogItem extends PureComponent {

    render() {
        const { id, time, version, user, val, old_value, new_value } = this.props.logentries;
        const diff = Diff.diffChars(old_value, new_value);
        const mark = diff.map((part, index) => {
            const color = part.added ? 'green' :
                part.removed ? 'red' : 'black';

            return <span key={index} style={{ color: color }}>{part.value}</span>;
        });

        return (
            <tr>
                <td>{id}</td>
                <td>{time}</td>
                <td>{version}</td>
                <td>{user}</td>
                <td>{ value.searchValue }</td>
                <td>{val}</td>
                <td colSpan={2}>
                    { mark }
                </td>
            </tr>
        )
    }
}

LogItem.propTypes = {
    logentries: PropTypes.object.isRequired,
};

export default LogItem;