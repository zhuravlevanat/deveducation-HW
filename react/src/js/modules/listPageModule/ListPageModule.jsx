import React from 'react';
import ListBlock from './ListBlock.jsx'
// import classes from '../editModule/EditModule.css';

export class ListPageModule extends React.Component {

    render() {
        let names = this.props.list;

        const personesBlock = Object.values(names).map((item) => {
            return(
                <ListBlock
                    key={item.id}
                    id={item.id}
                    keyNames={item.searchValue}
                    handleButtonChange={this.props.handleButtonChange}
                />
            );
        });

        return (
            <div className={'tabset__wrap wrap'}>
                <div className={'wrap__content content'} id='editor'>
                    {personesBlock}
                </div>
            </div>
        );
    }
}