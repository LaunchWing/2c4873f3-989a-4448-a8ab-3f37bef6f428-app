async function submitForm() {
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
    previewSection.innerHTML = `
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Your Customized Resume Template</h3>
        <p class="text-gray-700">${data.template}</p>
    `;
}