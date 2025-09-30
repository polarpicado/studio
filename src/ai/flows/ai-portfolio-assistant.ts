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
  prompt: `You are a helpful AI assistant answering questions about Joao Basanta's work experience and skills. Use the provided context to answer the question concisely and informatively. Do not include any personal greetings or salutations.

Context: Joao Basanta is a system engineer and automation expert with experience in Python, n8n, and Cloud solutions.

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
