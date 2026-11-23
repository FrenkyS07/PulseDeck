import { renderDashboard } from '../javascript/views/dashboard.js';
import { renderDownloads } from '../javascript/views/downloads.js';

const modeContainer = document.querySelector('.deck__mode');
const darkModeBtn = document.querySelector('.dark__mode');
const lightModeBtn = document.querySelector('.light__mode');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    darkModeBtn.classList.remove('mode--active');
    lightModeBtn.classList.add('mode--active');
}

modeContainer.addEventListener('click', (e) => {
    const target = e.target.closest('div');
    if (!target) return;

    if (target.classList.contains('light__mode')) {
        document.body.classList.add('light-mode');
        lightModeBtn.classList.add('mode--active');
        darkModeBtn.classList.remove('mode--active');
        localStorage.setItem('theme', 'light');
    } 
    else if (target.classList.contains('dark__mode')) {
        document.body.classList.remove('light-mode');
        darkModeBtn.classList.add('mode--active');
        lightModeBtn.classList.remove('mode--active');
        localStorage.setItem('theme', 'dark');
    }
});

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