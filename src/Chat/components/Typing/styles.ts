import { Platform, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    padding: 25px;
`;

export const TypingBubble = styled.View`
    width: 55px;
    height: 35px;
    background-color: transparent;
    border-radius: 8px;
    border-bottom-left-radius: 0;
    margin-bottom: 8px;
    background-color: #fff;

    ${Platform.OS === 'android'
        ? 'elevation: 2'
        : 'box-shadow: 0px 4px 4px rgba(66, 70, 86, 0.1)'};
`;

export const typingStyle: StyleProp<ViewStyle> = {
    bottom: '22%',
    top: '22%',
    right: '22%',
    left: '22%',
};
