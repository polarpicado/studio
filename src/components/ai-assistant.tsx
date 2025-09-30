"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiPortfolioAssistant } from "@/ai/flows/ai-portfolio-assistant";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIAssistant() {
  const { dictionary } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: dictionary.aiAssistant.initialMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await aiPortfolioAssistant({ query: input });
      const assistantMessage: Message = {
        role: "assistant",
        content: result.answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: dictionary.aiAssistant.errorMessage,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        const scrollableViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollableViewport) {
            scrollableViewport.scrollTop = scrollableViewport.scrollHeight;
        }
    }
  }, [messages]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
          >
            <Sparkles className="h-8 w-8" />
            <span className="sr-only">{dictionary.aiAssistant.open}</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-lg grid-rows-[auto_1fr_auto] p-0 max-h-[90dvh]">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="flex items-center gap-2">
              <Bot /> {dictionary.aiAssistant.title}
            </DialogTitle>
            <DialogDescription>
              {dictionary.aiAssistant.description}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-full" ref={scrollAreaRef}>
            <div className="p-6 pt-0 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === "user" ? "justify-end" : ""
                  )}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-lg p-3 text-sm max-w-[80%]",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3">
                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <DialogFooter className="p-6 pt-2">
            <form
              onSubmit={handleSendMessage}
              className="flex w-full items-center space-x-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={dictionary.aiAssistant.placeholder}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">{dictionary.aiAssistant.send}</span>
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
