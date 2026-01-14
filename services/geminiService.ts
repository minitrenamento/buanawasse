
import { GoogleGenAI } from "@google/genai";
import { ALBUMS, ARTIST_INFO } from "../constants";

// Initialize the GoogleGenAI client using the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userMessage: string) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Você é o Assistente Digital oficial do músico Buanawasse Mateus. 
    Seu objetivo é ajudar os fãs a descobrir músicas, explicar o significado das letras e recomendar álbuns.
    Informações do Artista: ${JSON.stringify(ARTIST_INFO)}
    Catálogo disponível: ${JSON.stringify(ALBUMS)}
    
    Regras:
    1. Seja sempre educado, amigável e apaixonado pela cultura moçambicana.
    2. Responda em Português.
    3. Se perguntarem sobre preços, consulte o catálogo fornecido.
    4. Se perguntarem sobre o estilo, destaque a fusão de ritmos tradicionais com jazz/soul.
    5. Mantenha as respostas concisas e envolventes.
  `;

  try {
    // Generate content using the Gemini 3 Flash model with system instructions.
    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Access the generated text directly from the response object's text property.
    return response.text || "Desculpe, estou com dificuldades para processar isso agora. Tente novamente em breve!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erro de conexão com o servidor de IA.";
  }
};
