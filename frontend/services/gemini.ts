
import { GoogleGenAI } from "@google/genai";
import { Watch } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getWatchRecommendations = async (userPrompt: string, availableWatches: Watch[]) => {
  try {
    const watchListText = availableWatches.map(w => `${w.brand} ${w.name} ($${w.price})`).join('\n');
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a luxury concierge for Betawatch.
      User request: "${userPrompt}"
      Inventory:
      ${watchListText}
      Recommend 2 watches. Be elegant and concise.`,
    });
    return response.text;
  } catch (error) {
    return "Our concierge is currently attending to another client. Please browse our exquisite collection.";
  }
};
