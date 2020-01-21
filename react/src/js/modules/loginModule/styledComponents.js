import styled from 'styled-components';

export const Container = styled.div`
    width: 800px;
    margin: 0 auto;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #7cf3f3;
    border: 1px solid #118e8e;
    border-radius: 5px;
`;

export const Form = styled.form``;

export const FormItem = styled.div`
    width: 100%;
    margin-bottom: 20px
`;
// const TestText = styled(Text)`
//     color: #999999;
//     font-size: 20px;
// `;

// export const TextsBlock = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const FirstText = styled(Text)`
//     color: #006600;
// `;

// const SecondText = styled(Text)`
//     color: ${props => props.theme.textColor};
// `;

// TextsBlock.firstText = FirstText;
// TextsBlock.secondText = SecondText;
// Wrapper.testText = TestText;
// Wrapper.TextsBlock = TextsBlock;