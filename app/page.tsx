'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Chatbot with Together AI</h1>
      <div className="flex-1 overflow-y-auto border p-4 mb-4 rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.role === 'user' ? 'text-blue-600' : 'text-green-600'
            }`}
          >
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong>{' '}
            {msg.content}
          </div>
        ))}
        {isLoading && <div className="text-gray-500">Bot is typing...</div>}
      </div>
      <form onSubmit={(e) => { handleSubmit(e); setIsLoading(true); }} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </div>
  );
}
