import React, { FC, useEffect } from 'react';
import { FlatList } from 'react-native';
import ChatBubble from '../components/ChatBubble';
import Typing from '../components/Typing';
import { useChat } from '../hook/chat';
import { Container } from './styles';

const Chat: FC = () => {
    const { clear, enqueueMessage, typing, messages, step, ref } = useChat();

    useEffect(() => {
        enqueueMessage({
            content: 'Olá pessoa',
            time: 1800,
            typing: true,
            isBot: true,
        });

        enqueueMessage({ content: 'Olá.' });

        enqueueMessage({
            content: 'Mais uma mensagem do Bot aqui.',
            time: 1800,
            typing: true,
            isBot: true,
        });

        enqueueMessage({ content: 'Legal...' });
        clear();
    }, []);

    return (
        <Container>
            <FlatList
                ref={ref}
                keyExtractor={({ id }) => id}
                data={messages}
                renderItem={({ item: { content, isBot } }) => (
                    <ChatBubble content={content} isBot={isBot} />
                )}
            />
            <Typing active={true} />
            {step}
        </Container>
    );
};

export default Chat;
