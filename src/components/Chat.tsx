import { Bot, Send } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

interface Message {
    id: number;
    text: string;
    isBot: boolean;
}

export const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Olá! Em que posso ajudar?", isBot: true },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            isBot: false,
        };

        setMessages([...messages, newMessage]);
        setInputMessage("");

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: "Estou respondendo uma mensagem de teste.",
                isBot: true,
            };
            setMessages((prevState) => [...prevState, botResponse]);
        }, 1000);
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="flex-1 px-4">
            <div className="bg-[#E8F0F2] rounded-lg shadow-lg h-[25rem] flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${
                                message.isBot ? "justify-start" : "justify-end"
                            }`}
                        >
                            <div
                                className={`max-w-[80%] p-3 rounded-lg ${
                                    message.isBot
                                        ? "bg-white text-[#0027BD] font-semibold"
                                        : "bg-[#0027BD] text-white"
                                }`}
                            >
                                <div className="flex items-start">
                                    {message.isBot && (
                                        <Bot className="h-5 w-5 mr-2 mt-1" />
                                    )}
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="border-t p-4">
                    <div className="flex items-center space-x-2">
                        <input
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Digite sua mensagem..."
                            className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-[#0027BD] text-white rounded-full p-2 hover:bg-[#0027BD]/80 transition-colors"
                        >
                            <Send className="h-5 w-5" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
