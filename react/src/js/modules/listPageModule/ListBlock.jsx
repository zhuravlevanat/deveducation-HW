import React from 'react';
import Button from '../editModule/Button.jsx';
// import classes from '../editModule/EditModule.css';

const ListBlock = props => {
    
    return (
        <li className={'list__list-item list-item'}>
            <p className={'list-item__text'}>{props.keyNames}:</p>
            <Button
                type='button'
                text={'Change'}
                handleButton={props.handleButtonChange}
                id={props.id}
            />
        </li>
    );
};

export default React.memo(ListBlock);