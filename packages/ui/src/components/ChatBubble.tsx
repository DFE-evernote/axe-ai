import React from 'react';

export const ChatBubble = ({ message, isUser }: { message: string; isUser: boolean }) => {
  return (
    <div className={`chat-bubble flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        {message}
      </div>
    </div>
  );
};