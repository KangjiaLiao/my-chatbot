import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextResponse } from 'next/server';

// Initialize Together AI client
const together = createOpenAI({
  apiKey: process.env.TOGETHER_API_KEY,
  baseURL: 'https://api.together.xyz/v1',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Stream response from Together AI
    const result = await streamText({
      model: together('meta-llama/Llama-3.1-8B-Instruct-Turbo'),
      messages,
      maxTokens: 500,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
