import React from 'react';
import Chat from './src/Chat';
import { ChatProvider } from './src/hook/chat';

export default function App() {
    return (
        <ChatProvider>
            <Chat />
        </ChatProvider>
    );
}
