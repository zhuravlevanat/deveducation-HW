import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/PureComponent.jsx';
import { Header } from '../headerModule/Header.jsx';
import { TabsetModule } from '../tabsetModule/TabsetModule.jsx';
import EditMain from '../editMainModule/EditMain.jsx';

export class MainModule extends PureComponent {
    
    render() {
        // console.info(this.props.list[0].id + 'list');
        // console.info(this.props.logs + 'logs');
        // console.info(this.props.personBody + 'err');
        return (
            <div className={'wrapper__main-container main-container'} id={'mainContainer'} >
                <Header
                    handleLogoutClick={this.props.handleLogoutClick}
                    handleSelectChange={this.props.handleSelectChange}
                />
                <div className={'main-container__tabset tabset'}>
                    <TabsetModule
                        handleTabsetClick={this.props.handleTabsetClick}
                    />
                    <EditMain 
                        list={this.props.list}
                        selectedTab={this.props.selectedTab}
                        selectEdit={this.props.selectEdit}
                        handleButtonChange={this.props.handleButtonChange}
                        handleButtonSave={this.props.handleButtonSave}
                        handleButtonMerge={this.props.handleButtonMerge}
                        handleButtonCancel={this.props.handleButtonCancel}
                        personBody={this.props.personBody}
                        logentry={this.props.logentry}
                        handleTextAreaChange={this.props.handleTextAreaChange}
                        handleEditFormSubmit={this.props.handleEditFormSubmit}
                        // changingValues={this.props.changingValues}
                    />
                </div>
            </div>
        );
    }
 }

//export default React.memo(MainModule);