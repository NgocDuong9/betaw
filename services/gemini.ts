
import { GoogleGenAI } from "@google/genai";
import { Watch } from "../types";

// Always initialize with named parameters and use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getWatchRecommendations = async (userPrompt: string, availableWatches: Watch[]) => {
  try {
    const watchListText = availableWatches.map(w => `${w.brand} ${w.name} ($${w.price}) - ${w.description}`).join('\n');
    
    // Using gemini-3-flash-preview for basic text recommendation task
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a high-end personal shopping concierge for Betawatch, a luxury watch dealer.
      
      User request: "${userPrompt}"
      
      Available Inventory:
      ${watchListText}
      
      Instructions:
      1. Recommend exactly 2 watches from the inventory provided.
      2. Explain why each fits the user's specific request.
      3. Use a sophisticated, professional, and luxury-oriented tone.
      4. Be concise (under 150 words total).
      5. If no watch fits well, explain why and suggest the closest luxury alternative from the list.`,
      config: {
        temperature: 0.75,
        topP: 0.9,
      }
    });

    // Directly access the .text property from the response object
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our archival systems are currently undergoing maintenance. However, based on our typical collection, I suggest looking at our Patek Philippe or Rolex pieces for ultimate refinement.";
  }
};
