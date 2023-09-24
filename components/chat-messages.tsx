"use client";

import { ElementRef, useEffect, useRef, useState } from "react";
import { Yodda } from "@prisma/client";

import { ChatMessage, ChatMessageProps } from "@/components/chat-message";

interface ChatMessagesProps {
  messages: ChatMessageProps[];
  isLoading: boolean;
  yodda: Yodda
}

export const ChatMessages = ({
  messages = [],
  isLoading,
  yodda,
}: ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);

  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        isLoading={fakeLoading}
        src={yodda.src}
        role="system"
        content={`Hello, I am ${yodda.name}, ${yodda.description}`}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          src={yodda.src}
          content={message.content}
          role={message.role}
        />
      ))}
      {isLoading && (
        <ChatMessage
          src={yodda.src}
          role="system"
          isLoading
        />
      )}
      <div ref={scrollRef} />
    </div>
  );
};