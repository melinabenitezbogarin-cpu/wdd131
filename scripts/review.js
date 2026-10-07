document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = Number(localStorage.getItem("reviewCount-Is")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount-Is", reviewCount);

    const counterDisplay = document.getElementById("review-counter");
    if (counterDisplay) {
        counterDisplay.textContent = reviewCount;
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