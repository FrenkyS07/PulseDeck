export function renderDashboard(){
    return `
    <div class="dashboard__grid">
        <div class="deck__content" style="grid-area: deck-1;">
        <span>CPU USAGE</span>
        </div>  

        <div class="deck__content" style="grid-area: deck-2;">
        <span>RAM USAGE</span>
        </div>

        <div class="deck__content" style="grid-area: deck-3;">
        <span>Storage</span>
        </div>

        <div class="deck__content" style="grid-area: deck-4;">
        <span>Services</span>
        </div>

        <div class="deck__content" style="grid-area: deck-5;">
        <span>Media Automation</span>
        </div>

        <div class="deck__content" style="grid-area: deck-6;">
        <span>Media Player</span>
        </div>

        <div class="deck__content" style="grid-area: deck-7;">
        <span>Automation Log</span>
        </div>
    </div>
    `;
}