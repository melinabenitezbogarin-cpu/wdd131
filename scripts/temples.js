const currentYearSpan = document.getElementById("currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});