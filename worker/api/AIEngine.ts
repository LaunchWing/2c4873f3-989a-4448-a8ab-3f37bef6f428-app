import { analyzeUserData } from "../../functions/api/analyzeUserData";
import { generateResumeTemplate } from "../../functions/api/generateResumeTemplate";

export async function AIEngineHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" } });
    }

    const requestData = await req.json();
    const { careerField, experienceLevel, stylePreferences } = requestData;

    if (!careerField || !experienceLevel || !stylePreferences) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const analysisResult = analyzeUserData(careerField, experienceLevel, stylePreferences);
    const resumeTemplate = generateResumeTemplate(analysisResult);

    return new Response(JSON.stringify({ resumeTemplate }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
