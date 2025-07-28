import { validateTemplateRequest, generateTemplate } from '../functions/api/helpers';

export async function TemplateGenerationHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    const contentType = req.headers.get('content-type');
    if (!contentType || contentType !== 'application/json') {
      return new Response(JSON.stringify({ error: 'Unsupported content type' }), { status: 415 });
    }

    const body = await req.json();
    const validationError = validateTemplateRequest(body);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400 });
    }

    const template = generateTemplate(body);
    return new Response(JSON.stringify({ template }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
