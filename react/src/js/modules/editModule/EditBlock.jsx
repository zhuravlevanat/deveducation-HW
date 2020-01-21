import React from 'react';
import PropTypes from 'prop-types';

// import './EditModule.css';

const EditBlock = props => {
    return (
        <div className={'edit-form__edit-item edit-item'}>
            <label
                className={'item__label'}
                children={props.keyName} />
            <textarea
                className={'textarea-block'}
                key={props.keyName}
                id={props.keyName}
                defaultValue={props.textData}
                onChange={props.handleTextAreaChange}
            />
        </div>
    );
};

EditBlock.propTypes = {
    keyName: PropTypes.string,
    textData: PropTypes.string,
};

export default React.memo(EditBlock);