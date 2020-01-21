import React from 'react';
import TabsetButton from './TabsetButton.jsx';
// import '../editModule/EditModule.css';

export class TabsetModule extends React.Component {
    render() {
        return (
            <div className={'tabset__header link'} id='tabsetHeader'>
                <TabsetButton value={'editor'} text={'Editor'} id='edit' handleTabsetClick={this.props.handleTabsetClick}/>
                <TabsetButton value={'Logs'} text={'Logs'} id='logs' handleTabsetClick={this.props.handleTabsetClick}/>
            </div>
        );
    }
}