import { items } from '../data/information.mjs';

const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('menu');

if (hamburger && primaryNav) {
    hamburger.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        hamburger.textContent = primaryNav.classList.contains('open') ? '✕' : '☰';
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const visitorMessageElement = document.getElementById('visitor-message');
    const storageKey = 'site-visited';
    const hasVisited = localStorage.getItem(storageKey);

    if (visitorMessageElement) {
        if (!hasVisited) {
            visitorMessageElement.textContent = "Welcome! Let us know if you have any questions.";
            localStorage.setItem(storageKey, 'true');
        } else {
            visitorMessageElement.textContent = "Welcome back to Our Mind While We Sleep!";
        }
    }

    const findContainer = document.getElementById('find-container');

    if (findContainer) {
        items.forEach(item => {
            const card = document.createElement('article');
            card.classList.add('card-item');

            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button type="button" class="learn-more-btn">Learn more</button>
            `;

            findContainer.appendChild(card);
        });
    }

    const yearSpan = document.getElementById('currentyear');
    const lastModP = document.getElementById('lastModified');

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModP) lastModP.textContent = `Last Modification: ${document.lastModified}`;
});