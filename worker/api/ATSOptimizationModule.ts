import { validateRequest, optimizeForATS } from '../functions/api/helpers';

export async function ATSOptimizationModuleHandler(req: Request): Promise<Response> {
  try {
    const { valid, error } = await validateRequest(req);
    if (!valid) {
      return new Response(JSON.stringify({ error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const requestData = await req.json();
    const optimizedResume = optimizeForATS(requestData);

    return new Response(JSON.stringify({ optimizedResume }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
