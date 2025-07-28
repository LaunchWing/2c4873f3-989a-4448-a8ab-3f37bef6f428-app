import { validateUserInput, generateResumeTemplate } from '../functions/api/helpers';

export async function UserInputFormBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    const contentType = req.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Invalid content type' }), { status: 400 });
    }

    const userInput = await req.json();
    const validationError = validateUserInput(userInput);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400 });
    }

    const resumeData = await generateResumeTemplate(userInput);
    return new Response(JSON.stringify({ success: true, data: resumeData }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}