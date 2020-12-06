import { Dimensions, Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

const window = Dimensions.get('window');

interface BubbleStyleProps {
    isBot?: boolean;
}

export const Container = styled.View<BubbleStyleProps>`
    align-items: center;
    flex-direction: ${({ isBot }) => (isBot ? 'row' : 'row-reverse')};
    width: ${window.width * 0.8}px;
`;

export const AvatarWrapper = styled.View`
    justify-content: flex-start;
    height: 100%;
`;

export const Avatar = styled.Image`
    margin: 8px;
`;

export const Content = styled.View`
    flex-direction: column;
    margin-left: 8px;
`;

export const TextWrapper = styled.View<BubbleStyleProps>`
    margin: 4px 0;
    max-width: 271px;
    background-color: ${({ isBot }) => (isBot ? '#FFF' : '#7962f7')};
    border-radius: 8px;

    ${({ isBot }) =>
        isBot
            ? 'border-bottom-left-radius: 0'
            : 'border-bottom-right-radius: 0'};

    ${Platform.OS === 'android'
        ? 'elevation: 2'
        : 'box-shadow: 0px 4px 4px rgba(66, 70, 86, 0.1)'};
`;

export const ChatText = styled.Text<BubbleStyleProps>`
    margin: 8px 12px;
    color: ${({ isBot }) => (isBot ? '#424656' : '#FFF')};
    /* font-family: 'Inter-Regular'; */
    /* font-family: sans-serif; */
    font-size: 16px;
`;
