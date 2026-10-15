import { aspectCards, learnCards } from '../data/knowdata.mjs';

export function renderAspects() {
    const aspectsGrid = document.querySelector('.aspects-grid');
    if (!aspectsGrid) return;

    aspectsGrid.innerHTML = aspectCards.map(card => `
        <div class="aspect-card">
            <span class="card-number">${card.number}</span>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `).join('');
}

export function renderLearnCards() {
    const learnCardsContainer = document.querySelector('.learn-cards-container');
    if (!learnCardsContainer) return;

    learnCardsContainer.innerHTML = learnCards.map(card => `
        <div class="learn-card">
            <img src="${card.imgSrc}" alt="${card.imgAlt}" loading="lazy">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `).join('');
}