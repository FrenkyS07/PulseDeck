import { renderDashboard } from '../javascript/views/dashboard.js';
import { renderDownloads } from '../javascript/views/downloads.js';


function router() {
    const path = window.location.hash.slice(1) || 'dashboard';
    const mainContent = document.querySelector('.main__deck');

    let deckContainer = mainContent.querySelector('.deck__container');

    if(!deckContainer) {
        deckContainer = document.createElement('div');
        deckContainer.className = 'deck__container';
        mainContent.appendChild(deckContainer);
    }

    deckContainer.innerHTML = '';

    switch (path){
        case 'dashboard':
            deckContainer.innerHTML = renderDashboard();
            break;
        case 'downloads':
            deckContainer.innerHTML = renderDownloads();
            break;
        default:
            deckContainer.innerHTML = '<h2>404 Page Not Found</h2>';
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);