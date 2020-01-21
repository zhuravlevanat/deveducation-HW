import React from 'react';
import PureComponent from '../../base/PureComponent.jsx';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
import EditBlock from './EditBlock.jsx';
// import './EditModule.css';
import NameList from '../../strings/en';

export default class EditModule extends PureComponent {
    // getPersonData = () => {
    //     return {
    //         name: document.getElementById('name').value,
    //         age: document.getElementById('age').value,
    //         gender: document.getElementById('gender').value,
    //         address: document.getElementById('address').value,
    //     };
    // };
    //
    // handleButtonSave = (event) => {
    //     event.preventDefault();
    //     this.props.savePersonChanges(this.getPersonData());
    //     console.info('SAVE');
    // };
    //
    // handleButtonMerge = (event) => {
    //     event.preventDefault();
    //     this.props.mergePersonChanges(this.getPersonData());
    //     console.info('MARGE');
    // };
    //
    // handleButtonCancel = (event) => {
    //     event.preventDefault();
    //     console.info('CANCEL');
    // };

    render() {
        const person = this.props.personBody;

        const listEditBlocks = Object.keys(person).map((item) => {
            return (
                <EditBlock
                    key={item}
                    keyName={item}
                    textData={person[item]}
                    handleTextAreaChange={this.props.handleTextAreaChange}
                />
            );
        });

        return (
            <div className={'tabset__wrap wrap'}>
                <div className={'wrap__content content'}>
                    <form
                        className={'content__edit-form edit-form'}
                        // onSubmit={this.props.handleEditFormSubmit}
                    >
                        {listEditBlocks}
                        <div className={'edit-form__edit-buttons'}>
                            <Button
                                text={NameList.resources.saveBtnName}
                                value={NameList.resources.saveBtnName}
                                handleButton={this.props.handleEditFormSubmit}
                                type='submit'
                            />
                            <Button
                                text={NameList.resources.margeBtnName}
                                value={NameList.resources.margeBtnName}
                                handleButton={this.props.handleEditFormSubmit}
                                type='submit'
                            />
                            <Button
                                text={NameList.resources.cancelBtnName}
                                handleButton={this.props.handleButtonCancel}
                                type='button'
                            />
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

EditModule.propTypes = {
    savePersonChanges: PropTypes.func,
    mergePersonChanges: PropTypes.func,
    cancelPersonChanges: PropTypes.func,
    personBody: PropTypes.object,
};