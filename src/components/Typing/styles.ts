import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    margin-left: 15%;
    margin-bottom: 16px;
    width: 53px;
    height: 32px;
    background-color: transparent;
    border-radius: 8px;
    border-bottom-left-radius: 0;
    margin-bottom: 8px;
    background-color: #fff;

    ${Platform.OS === 'android'
        ? 'elevation: 2'
        : 'box-shadow: 0px 4px 4px rgba(66, 70, 86, 0.1)'};
`;
