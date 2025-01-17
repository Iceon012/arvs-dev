"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Loader2, Send, X } from "lucide-react";

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages,
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const closeChat = async () => {
    await setMessages([]);
    toggleChat();
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-5 z-50">
      {isOpen ? (
        <div
          className="bg-white rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden flex flex-col"
          style={{ height: "500px" }}
        >
          <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Chat</h3>
            <button
              onClick={closeChat}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="flex-grow p-2 border rounded text-black"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-900 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Open chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
