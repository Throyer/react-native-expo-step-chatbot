import React, { FC } from 'react';
import { Container, TypingBubble, typingStyle } from './styles';
import { TypingAnimation } from 'react-native-typing-animation';

const Typing: FC = () => (
    <Container>
        <TypingBubble>
            <TypingAnimation
                style={typingStyle}
                dotColor="#B0B0B0"
                dotMargin={6}
            />
        </TypingBubble>
    </Container>
);

export default Typing;
