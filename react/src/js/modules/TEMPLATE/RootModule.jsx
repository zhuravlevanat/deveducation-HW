import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import PureComponent from '../../base/PureComponent.jsx';
import ErrorBoundary from '../../decorators/ErrorBoundary.jsx';
import {
    Wrapper,
    TextsBlock,
} from './styledComponents';
import theme from '../../themes/darkTheme'; // TODO remove to work with REACT-REDUX

@ErrorBoundary
export default class RootModule extends PureComponent {
    render() {
        return (
            <ThemeProvider theme={theme.rootModule}>
                <Wrapper>
                    <Wrapper.testText children={'TEST NODE'}/>
                    <Wrapper.TextsBlock>
                        <TextsBlock.firstText children={'first text'}/>
                        <TextsBlock.secondText children={'second text'}/>
                    </Wrapper.TextsBlock>
                </Wrapper>
            </ThemeProvider>
        );
    }
}

RootModule.propTypes = {
    propAny: PropTypes.any,
    propBool: PropTypes.bool,
    propFunc: PropTypes.func,
    propArray: PropTypes.array,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object,
    propRequired: PropTypes.object.isRequired,
};
