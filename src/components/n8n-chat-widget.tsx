"use client";

import { useLanguage } from "@/context/language-context";
import { useEffect, useRef } from "react";

export function N8nChatWidget() {
  const { language } = useLanguage();
  const chatInitialized = useRef(false);

  useEffect(() => {
    // Ensure this only runs on the client
    if (typeof window === "undefined" || chatInitialized.current) {
      return;
    }

    const initChat = async () => {
      try {
        const n8nChat = await import(
          "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"
        );

        if (document.querySelector(".n8n-chat-widget-container")) {
            return;
        }

        n8nChat.createChat({
          webhookUrl:
            "http://localhost:5678/webhook/102f23af-804b-43a9-a0b4-a99329d7ae48/chat",
          defaultLanguage: language,
          initialMessages:
            language === "es"
              ? [
                  "¡Hola! 👋",
                  "Soy el asistente de IA de Joao. ¿Cómo puedo ayudarte hoy?",
                ]
              : [
                  "Hi there! 👋",
                  "I'm Joao's AI assistant. How can I assist you today?",
                ],
          i18n: {
            es: {
              title: "¡Hola! Soy el asistente de IA de Joao 👋",
              subtitle: "Inicia un chat. Puedo ayudarte 24/7.",
              getStarted: "Nueva Conversación",
              inputPlaceholder: "Escribe tu pregunta...",
            },
            en: {
              title: "Hi! I'm Joao's AI assistant 👋",
              subtitle: "Start a chat. I can help you 24/7.",
              getStarted: "New Conversation",
              inputPlaceholder: "Type your question...",
            },
          },
        });
        chatInitialized.current = true;
      } catch (error) {
        console.error("Failed to load n8n chat widget:", error);
      }
    };

    initChat();

  }, [language]);

  return null;
}