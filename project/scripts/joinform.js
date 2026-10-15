document.addEventListener("DOMContentLoaded", () => {
    const currentUrlParams = new URLSearchParams(window.location.search);

    console.log("Parámetros recibidos en la URL:", window.location.search);

    function getParamValue(paramName) {
        const value = currentUrlParams.get(paramName);
        if (!value || value.trim() === "") {
            return "Not provided";
        }
        return decodeURIComponent(value.replace(/\+/g, " "));
    }

    function setElementText(elementId, textValue) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = textValue;
        } else {
            console.warn(`No se encontró el elemento con ID: ${elementId}`);
        }
    }

    const clubAreas = {
        "lucid-dreams": "Lucid Dreaming & Subconscious Mastery",
        "deep-rest": "Deep Sleep & Circadian Reset",
        "mind-clarity": "Morning Clarity & Mental Sharpness",
        "stress-relief": "Evening Wind-Down & Anxiety Relief",
        "peak-brain": "Peak Brain Performance & Cognitive Flow"
    };


    const selectElement = document.getElementById("option-select");
    if (selectElement) {
        Object.entries(clubAreas).forEach(([value, text]) => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = text;
            selectElement.appendChild(option);
        });
    }

    const rawOption = getParamValue("option");
    const formattedOption = clubAreas[rawOption] || rawOption;

    setElementText("display-flname", getParamValue("flname"));
    setElementText("display-email", getParamValue("email"));
    setElementText("display-product", formattedOption);
    setElementText("display-startdate", getParamValue("startDate"));
    setElementText("display-review", getParamValue("writtenReview"));

    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
    }
});