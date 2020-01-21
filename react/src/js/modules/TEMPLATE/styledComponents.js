import styled from 'styled-components';

export const Text = styled.span`
    color: #111111;
    font-weight: bold;
`;

export const Wrapper = styled.div``;

const TestText = styled(Text)`
    color: #999999;
    font-size: 20px;
`;

export const TextsBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

const FirstText = styled(Text)`
    color: #006600;
`;

const SecondText = styled(Text)`
    color: ${props => props.theme.textColor};
`;

TextsBlock.firstText = FirstText;
TextsBlock.secondText = SecondText;
Wrapper.testText = TestText;
Wrapper.TextsBlock = TextsBlock;