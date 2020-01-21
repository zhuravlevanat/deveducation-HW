import React from 'react';
import LogItem from './components/LogItem.jsx';
import Header from './components/LogsTabHeader.jsx';
import PureComponent from '../../base/PureComponent.jsx';
import PropTypes from 'prop-types';

class LogModule extends PureComponent {

    render() {
        const fillTable = this.props.logentry.map((logentries, index) => {
            return (
                <LogItem key={index} logentries={logentries} />
            );
        });

        return (
            <table className='table' style={{
                borderCollapse: 'collapse',
            }}>
                <thead>
                    <Header/>
                </thead>
                <tbody>
                    { fillTable }

                </tbody>
            </table>
        );
    }
}

LogModule.propTypes = {
    logentries: PropTypes.object,
};

export default LogModule;