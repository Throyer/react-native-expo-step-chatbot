import React, {
    createContext,
    FC,
    ReactNode,
    RefObject,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { FlatList } from 'react-native';
import { v4 as uuid } from 'uuid';
import Queue from '../shared/Queue';

interface Message {
    id: string;
    content: ReactNode;
    isBot?: boolean;
}

interface QueueElement {
    message: Message;
    time?: number;
    typing?: boolean;
}

interface NewMessageProps {
    content: ReactNode;
    time?: number;
    typing?: boolean;
    isBot?: boolean;
}

interface ChatContextData {
    step?: ReactNode;
    typing?: boolean;
    messages: Message[];
    setContent: (content: ReactNode) => void;
    clear: () => void;
    enqueueMessage: (newMessage: NewMessageProps) => void;
    scrollToEnd(): void;
    ref: RefObject<FlatList<Message>>;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

const ChatProvider: FC = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [step, setStep] = useState<ReactNode>();
    const [typing, setTyping] = useState(false);

    const [queue] = useState(() => {
        const queue = new Queue<QueueElement>(({ message, time, typing }) => {
            if (typing) {
                setTyping(true);
            }

            if (time) {
                setTimeout(() => {
                    setMessages(state => [...state, message]);
                }, time);
            } else {
                setMessages(state => [...state, message]);
            }
        });

        queue.start();

        return queue;
    });

    const ref = useRef<FlatList<Message>>(null);

    const enqueueMessage = useCallback(
        async ({ time, content, typing, isBot }: NewMessageProps) => {
            queue.enqueue({
                time,
                typing,
                message: {
                    id: uuid(),
                    content,
                    isBot,
                },
            });
        },
        [],
    );

    const clear = useCallback(() => {
        setMessages([]);
    }, []);

    const scrollToEnd = useCallback(() => {
        ref.current?.scrollToEnd({
            animated: true,
        });
    }, []);

    const setNewStep = useCallback((step: ReactNode) => {
        setStep(step);
    }, []);

    useEffect(() => {
        setTyping(false);
        scrollToEnd();
        queue.setProcessing(false);
    }, [messages]);

    return (
        <ChatContext.Provider
            value={{
                enqueueMessage,
                messages,
                step,
                clear,
                typing,
                scrollToEnd,
                setContent: setNewStep,
                ref,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

function useChat(): ChatContextData {
    const context = useContext(ChatContext);

    if (!context) {
        throw new Error('useChat must be used within an ChatProvider');
    }

    return context;
}

export { ChatProvider, useChat };
