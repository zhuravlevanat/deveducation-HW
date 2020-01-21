import React from 'react';
// import '../editModule/EditModule.css';

const TubsetButton = props => {
    return (
            <button className={'link__item'} id={props.id} onClick={props.handleTabsetClick}>
                {props.text}
            </button>
        );
};

export default React.memo(TubsetButton);