export async function validateRequest(req: Request): Promise<{ valid: boolean, error?: string }> {
  if (req.method !== 'POST') {
    return { valid: false, error: 'Invalid request method. Only POST is allowed.' };
  }

  try {
    const data = await req.json();
    if (!data.resumeContent || !data.jobDescription) {
      return { valid: false, error: 'Missing required fields: resumeContent or jobDescription.' };
    }
  } catch (err) {
    return { valid: false, error: 'Invalid JSON format.' };
  }

  return { valid: true };
}

export function optimizeForATS(data: { resumeContent: string, jobDescription: string }): { optimizedContent: string } {
  // Here, you would implement the actual optimization logic.
  // For this example, we'll assume the function returns the input as optimized content.

  // This is a placeholder implementation.
  const optimizedContent = data.resumeContent + '\n\nOptimized for: ' + data.jobDescription;
  return { optimizedContent };
}
