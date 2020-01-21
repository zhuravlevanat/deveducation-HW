import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, FormItem } from './styledComponents';

export class LoginModule extends Component {
  render() {
    return (
      <Container>
        <Form
          name='loginForm'
          onSubmit={this.props.onSubmitLoginPage}
        >
          <FormItem>
            <label>
              DB:
              <input
                className="input"
                type='text'
                name='database'
                value={this.props.database}
                onChange={this.props.onChangeLoginInput}
              />
            </label>
          </FormItem>

          <FormItem>
            <label>
              Table:
              <input
                className="input"
                type='text'
                name='tableName'
                value={this.props.table}
                onChange={this.props.onChangeLoginInput}
              />
            </label>
          </FormItem>

          <FormItem>
            <label>
              Login:
              <input
                className="input"
                type='text'
                name='user'
                value={this.props.user}
                onChange={this.props.onChangeLoginInput}
              />
            </label>
          </FormItem>

          <FormItem>
            <label>
              Pass:
              <input
                className="input"
                type='password'
                name='password'
                value={this.props.password}
                onChange={this.props.onChangeLoginInput}
              />
            </label>
          </FormItem>

          <div className="form__button">
            <input className="form__button-item" type="submit" value="Submit" />
          </div>

          <p
              className="form__warning"
              style={this.props.isError ? {visibility: 'visible'} : {visibility: 'hidden'}}
          >
              {this.props.errorMessage}
          </p>
        </Form>
      </Container>
    );
  }
}

LoginModule.propTypes = {
  onSubmitLoginPage: PropTypes.func.isRequired,
  onChangeLoginInput: PropTypes.func.isRequired,
  database: PropTypes.string,
  user: PropTypes.string,
  password: PropTypes.string,
  table: PropTypes.string,  
};
