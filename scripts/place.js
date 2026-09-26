const temp = 21;
const windSpeed = 19;
const isMetric = true;

const calculateWindChill = (t, s) =>
    isMetric
        ? (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1) + " °C"
        : (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)).toFixed(1) + " °F";


function displayWindChill() {

    const windChillElement = document.querySelector("#windchill");

    if (!windChillElement) return;

    const isValidMetric = isMetric && temp <= 10 && windSpeed > 4.8;
    const isValidImperial = !isMetric && temp <= 50 && windSpeed > 3;

    if (isValidMetric || isValidImperial) {
        windChillElement.textContent = calculateWindChill(temp, windSpeed);
    } else {
        windChillElement.textContent = "N/A";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }

    displayWindChill();
});