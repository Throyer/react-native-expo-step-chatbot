import React, { FC } from 'react';
import { Container } from './styles';
import { TypingAnimation } from 'react-native-typing-animation';

const Typing: FC<{ active?: boolean }> = ({ active }) => (
    <>
        {active && (
            <Container>
                <TypingAnimation
                    style={{
                        position: 'absolute',
                        bottom: '24%',
                        top: '24%',
                        right: '24%',
                        left: '24%',
                    }}
                    dotColor="#B0B0B0"
                    dotMargin={6}
                />
            </Container>
        )}
    </>
);

export default Typing;
