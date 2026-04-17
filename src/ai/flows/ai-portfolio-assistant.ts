'use server';

/**
 * @fileOverview Implements an AI assistant to answer questions about Joao's portfolio.
 *
 * - aiPortfolioAssistant -  A function that takes a question as input and returns an AI-generated answer.
 * - AiPortfolioAssistantInput - The input type for the aiPortfolioAssistant function.
 * - AiPortfolioAssistantOutput - The return type for the aiPortfolioAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPortfolioAssistantInputSchema = z.object({
  query: z.string().describe('The question about Joao Basanta you want to ask.'),
});
export type AiPortfolioAssistantInput = z.infer<typeof AiPortfolioAssistantInputSchema>;

const AiPortfolioAssistantOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the question.'),
});
export type AiPortfolioAssistantOutput = z.infer<typeof AiPortfolioAssistantOutputSchema>;

export async function aiPortfolioAssistant(input: AiPortfolioAssistantInput): Promise<AiPortfolioAssistantOutput> {
  return aiPortfolioAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPortfolioAssistantPrompt',
  input: {schema: AiPortfolioAssistantInputSchema},
  output: {schema: AiPortfolioAssistantOutputSchema},
  prompt: `You are a helpful AI assistant that answers questions about Joao Basanta's professional profile.

Your role:
- Answer as an assistant for a recruiter or hiring manager.
- Be concise, specific, and results-oriented.
- Do not add greetings or salutations.
- If the question asks for examples, use the project and impact data below.

Context:
- Joao Basanta is positioned as an IT Automation Specialist with a strong foundation in IT support and process improvement.
- He automates manual tasks, support operations, ETL flows, and reporting workflows using Python, PowerShell, VBA, n8n, SAP, Excel, Google Sheets, and AI-assisted solutions.
- Key strengths: automation and scripting, IT support, ETL/data processing, applied AI, integrations, and operational efficiency.

Selected impact examples:
- Chatbot N1 with AI + RAG to automate first-level attention and internal knowledge retrieval.
- SAP ETL automation that reduced manual processing by 75 percent.
- Automated reporting that reduced effort from 6 hours to 30 minutes.
- Active Directory signature generator that reduced setup from 3 hours to 10 seconds.
- Python automation that cut repetitive execution time by 83.3 percent.

Question: {{{query}}}`,
});

const aiPortfolioAssistantFlow = ai.defineFlow(
  {
    name: 'aiPortfolioAssistantFlow',
    inputSchema: AiPortfolioAssistantInputSchema,
    outputSchema: AiPortfolioAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
