import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  userMessage: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert generic history format to Gemini Chat format if needed, 
    // but for simple single-turn or stateless simulation we can use generateContent with system instruction.
    // However, keeping context is better.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm having trouble thinking of party ideas right now! 🎉 Try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! My party planning brain froze. Please check your connection or API key.";
  }
};
