import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="main-container__header header">
                <div className="header__left">
                    <select className="header__select" name="select" onChange={this.props.handleSelectChange}>
                        <option value="variant1">version 1</option>
                        <option value="variant2">version 2</option>
                        <option value="variant3">version 3</option>
                        <option value="variant4">version 4</option>
                    </select>
                </div>

                <div className="header__right">
                    <input className="header__button" onClick={this.props.handleLogoutClick} type="button" value="Log out"/>
                </div>
            </div>
        )
    }
}