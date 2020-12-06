import React, { FC, ReactNode } from 'react';
import { BOT_AVATAR_IMAGE } from '../../../utils/assets';
import {
    Avatar,
    AvatarWrapper,
    ChatText,
    Container,
    Content,
    TextWrapper,
} from './styles';

interface ChatBubbleProps {
    isBot?: boolean;
    content: ReactNode;
}

const ChatBubble: FC<ChatBubbleProps> = ({ isBot, content }) => {
    const isString = (content: ReactNode) => {
        return typeof content === 'string';
    };

    return (
        <Container isBot={isBot}>
            {isBot && (
                <AvatarWrapper>
                    <Avatar source={BOT_AVATAR_IMAGE} />
                </AvatarWrapper>
            )}
            <Content>
                <TextWrapper isBot={isBot}>
                    {isString(content) ? (
                        <ChatText isBot={isBot}>{content}</ChatText>
                    ) : (
                        content
                    )}
                </TextWrapper>
            </Content>
        </Container>
    );
};

export default ChatBubble;
