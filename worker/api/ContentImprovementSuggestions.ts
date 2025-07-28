export async function ContentImprovementSuggestionsHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const contentType = req.headers.get('Content-Type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Unsupported Media Type' }), { status: 415, headers: { 'Content-Type': 'application/json' } });
    }

    const body = await req.json();
    const { resumeContent } = body;

    if (typeof resumeContent !== 'string' || resumeContent.trim() === '') {
      return new Response(JSON.stringify({ error: 'Invalid resume content' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const suggestions = await generateContentImprovementSuggestions(resumeContent);

    return new Response(JSON.stringify({ suggestions }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
