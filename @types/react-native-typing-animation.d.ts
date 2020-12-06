declare module 'react-native-typing-animation' {
    import React, { Component, ComponentType } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
    import { SvgProps } from 'react-native-svg';

    interface TypingAnimationProps {
        style?: StyleProp<ViewStyle>;
        dotStyles?: StyleProp<ViewStyle>;
        dotColor?: string;
        dotMargin?: number;
        dotAmplitude?: number;
        dotSpeed?: number;
        dotRadius?: number;
        dotX?: number;
        dotY?: number;
    }

    export class TypingAnimation extends Component<TypingAnimationProps> {}
}
