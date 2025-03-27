import { AgentConfig } from "@/app/types";
import { injectTransferTools } from "./utils";

// Function to get URL parameters
function getUrlParams() {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    return {
      name: params.get('name') || "Assistente SAC Solvus",
      publicDescription: params.get('publicDescription') || "Assistente SAC.",
      instructions: params.get('instructions') || "Você é um assistente da solvus que ajuda o usuário a encontrar qual assistente de IA ele deseja pois os parametros da url que ele enviou estao errados."
    };
  }
  return {
    name: "Assistente SAC Solvus",
    publicDescription: "Assistente SAC.",
    instructions: "Você é um assistente da solvus que ajuda o usuário a encontrar qual assistente de IA ele deseja pois os parametros da url que ele enviou estao errados."
  };
}

const { name,  publicDescription, instructions } = getUrlParams();

// Define agents
const assistente: AgentConfig = {
  name,
  publicDescription,
  instructions,
  tools: [],
};

// add the transfer tool to point to downstreamAgents
const agents = injectTransferTools([assistente]);

export default agents;
