import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
// import './EditModule.css';

const Button = props => {
    return (
            <button
                value={props.value}
                type={props.type}
                className={'edit-buttons__button'}
                children={props.text}
                onClick={props.handleButton}
                id={props.id}
            />
        );
};

Button.propType = {
    text: PropTypes.string,
    handleButton: PropTypes.func,
};

export default React.memo(Button);