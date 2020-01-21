import React from 'react';
import PropTypes from 'prop-types';
// import '../editModule/EditModule.css';
import PureComponent from '../../base/PureComponent.jsx';
import { ListPageModule } from '../listPageModule/ListPageModule.jsx';
import EditModule from '../editModule/EditModule.jsx';
import LogModule from '../logTableModule/LogModule.jsx';

export default class EditMain extends PureComponent {
    render() {
        const renderListEditLog = () => {
            if (this.props.selectedTab === 'edit' && this.props.selectEdit === 'list') {
                return (
                    <ListPageModule
                        handleButtonChange={this.props.handleButtonChange}
                        list={this.props.list}
                    />
                );
            } else if (this.props.selectedTab === 'edit' && this.props.selectEdit === 'edit') {
                return (
                    <EditModule
                        handleButtonSave={this.props.handleButtonSave}
                        handleButtonMerge={this.props.handleButtonMerge}
                        handleButtonCancel={this.props.handleButtonCancel}
                        personBody={this.props.personBody}
                        handleTextAreaChange={this.props.handleTextAreaChange}
                        handleEditFormSubmit={this.props.handleEditFormSubmit}
                        // changingValues={this.props.changingValues}
                    />
                );
            } else {
                return (
                    <LogModule
                        logentry={this.props.logentry}
                    />
                );
            }
        };
        return (
            <div className={'tabset__wrap wrap'}>
                <div className='wrap__content'>
                    {renderListEditLog()}
                </div>
            </div>
        );
    }
}

//export default React.memo(EditMain);