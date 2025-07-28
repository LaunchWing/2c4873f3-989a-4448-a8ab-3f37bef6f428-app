// Auto-generated entrypoint for Cloudflare Worker

import { UserInputFormBackendHandler } from './api/UserInputFormBackend';
import { AIEngineHandler } from './api/AIEngine';
import { TemplateGenerationHandler } from './api/TemplateGeneration';
import { ATSOptimizationModuleHandler } from './api/ATSOptimizationModule';
import { ContentImprovementSuggestionsHandler } from './api/ContentImprovementSuggestions';
import { TemplateLibraryHandler } from './api/TemplateLibrary';

const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ResumeCraft AI - Craft Your Future with AI-Driven Precision</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <script src="script.js" defer></script>
</head>
<body class="bg-gray-50">
    <header class="bg-blue-900 text-white py-4">
        <div class="container mx-auto flex justify-between items-center">
            <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-SXAZLtF56XEqJUnG3FwV0aiP.png" alt="ResumeCraft AI Logo" class="h-10">
            <h1 class="text-xl font-bold">ResumeCraft AI</h1>
        </div>
    </header>
    <main class="container mx-auto py-8">
        <section class="text-center mb-8">
            <h2 class="text-3xl font-semibold text-blue-900 mb-2">Craft Your Future with AI-Driven Precision</h2>
            <p class="text-gray-700">An AI-powered resume template generator tailored to your career needs.</p>
        </section>
        <form id="resumeForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="careerField">
                    Career Field
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="careerField" type="text" placeholder="e.g., Software Engineering">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="experienceLevel">
                    Experience Level
                </label>
                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="experienceLevel">
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="stylePreferences">
                    Style Preferences
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stylePreferences" type="text" placeholder="e.g., Modern, Professional">
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onclick="submitForm()">
                    Generate Resume
                </button>
            </div>
        </form>
        <section id="resumePreview" class="hidden bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h3 class="text-2xl font-semibold text-blue-900 mb-4">Your Customized Resume Template</h3>
            <p class="text-gray-700">Preview will be displayed here.</p>
        </section>
    </main>
    <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto text-center">
            &copy; 2023 ResumeCraft AI. All rights reserved.
        </div>
    </footer>
</body>
</html>`;
const STYLE_CSS = `body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#resumeForm, #resumePreview {
    max-width: 600px;
    margin: 0 auto;
}

@media (min-width: 640px) {
    #resumeForm, #resumePreview {
        max-width: 800px;
    }
}`;
const SCRIPT_JS = `async function submitForm() {
    const careerField = document.getElementById('careerField').value;
    const experienceLevel = document.getElementById('experienceLevel').value;
    const stylePreferences = document.getElementById('stylePreferences').value;

    const response = await fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            careerField,
            experienceLevel,
            stylePreferences
        })
    });

    if (response.ok) {
        const data = await response.json();
        displayResumePreview(data);
    } else {
        console.error('Error generating resume template');
    }
}

function displayResumePreview(data) {
    const previewSection = document.getElementById('resumePreview');
    previewSection.classList.remove('hidden');
    previewSection.innerHTML = \`
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Your Customized Resume Template</h3>
        <p class="text-gray-700">\${data.template}</p>
    \`;
}`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/UserInputFormBackend') return UserInputFormBackendHandler(request);
    if (path === '/api/AIEngine') return AIEngineHandler(request);
    if (path === '/api/TemplateGeneration') return TemplateGenerationHandler(request);
    if (path === '/api/ATSOptimizationModule') return ATSOptimizationModuleHandler(request);
    if (path === '/api/ContentImprovementSuggestions') return ContentImprovementSuggestionsHandler(request);
    if (path === '/api/TemplateLibrary') return TemplateLibraryHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
