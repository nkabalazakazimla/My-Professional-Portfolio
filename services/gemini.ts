import { GoogleGenAI } from "@google/genai";
import { PROJECTS, PERSONAL_INFO, SKILLS } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize client safely
try {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("Gemini API Key is missing. Chat functionality will be limited.");
  }
} catch (error) {
  console.error("Error initializing Gemini client:", error);
}

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Kazimla Nkabalaza's professional portfolio. 
Your goal is to answer questions about Kazimla's skills, projects, and background based on the provided data.

Bio: ${PERSONAL_INFO.about}
Title: ${PERSONAL_INFO.title}
Education: ${PERSONAL_INFO.education.map(e => `${e.qualification} at ${e.institution}`).join(", ")}

Skills: ${JSON.stringify(SKILLS)}

Projects: ${JSON.stringify(PROJECTS.map(p => ({ name: p.name, description: p.description, tools: p.tools })))}

Tone: Professional, helpful, enthusiastic, and concise. 
If asked about contact info, provide: ${PERSONAL_INFO.email}.
If asked for a resume, mention the download button on the site.
If asked about something not in this data, politely say you don't have that information but suggest contacting Kazimla directly.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    return "I'm sorry, I'm currently offline (API Key missing). Please contact Kazimla directly via email.";
  }

  try {
    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};