
const clubAreas = {
    "lucid-dreams": "Lucid Dreaming & Subconscious Mastery",
    "deep-rest": "Deep Sleep & Circadian Reset",
    "mind-clarity": "Morning Clarity & Mental Sharpness",
    "stress-relief": "Evening Wind-Down & Anxiety Relief",
    "peak-brain": "Peak Brain Performance & Cognitive Flow"
};

const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('menu');

if (hamburger && primaryNav) {
    hamburger.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        hamburger.textContent = primaryNav.classList.contains('open') ? '✕' : '☰';
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const selectElement = document.getElementById("option-select");

    if (selectElement) {
        Object.entries(clubAreas).forEach(([value, text]) => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = text;
            selectElement.appendChild(option);
        });
    }

    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
    }
});