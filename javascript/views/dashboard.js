export function renderDashboard() {
    return `
        <div class="dashboard__grid">
            <div class="deck__content" style="grid-area: deck-1;">
                <span>CPU USAGE</span>
                <div class="dashboard__metric-box">
                    <h2 class="metric__value">38.4%</h2>
                    <p class="metric__sub">4 Cores @ 3.20GHz</p>
                </div>
            </div>  

            <div class="deck__content" style="grid-area: deck-2;">
                <span>RAM USAGE</span>
                <div class="dashboard__metric-box">
                    <h2 class="metric__value">6.2 GB / 16 GB</h2>
                    <div class="mini-progress-bar">
                        <div class="progress__fill" style="width: 38.7%;"></div>
                    </div>
                </div>
            </div>

            <div class="deck__content" style="grid-area: deck-3;">
                <span>Storage Pool</span>
                <div class="dashboard__list-snippet">
                    <div class="snippet-item"><span>NVMe SSD Cache</span> <span class="text-success">Healthy</span></div>
                    <div class="snippet-item"><span>Media Pool (RAID 5)</span> <span class="text-success">Healthy</span></div>
                </div>
            </div>

            <div class="deck__content" style="grid-area: deck-4;">
                <span>Services Status</span>
                <div class="dashboard__list-snippet">
                    <div class="snippet-item"><span>Plex Media Server</span> <span class="badge-online">Online</span></div>
                    <div class="snippet-item"><span>qBittorrent</span> <span class="badge-online">Online</span></div>
                    <div class="snippet-item"><span>Pi-hole</span> <span class="badge-offline">Paused</span></div>
                </div>
            </div>

            <div class="deck__content" style="grid-area: deck-5;">
                <span>Active Downloads & Media Automation</span>
                <div class="dashboard__list-snippet">
                    <div class="snippet-item"><span>Arknights.1080p.BluRay.AV1</span> <span class="text-accent">10 mbps</span></div>
                    <div class="snippet-item"><span>Fate⁄Grand Order (Movie)</span> <span class="text-muted">Seeding</span></div>
                </div>
            </div>

            <div class="deck__content" style="grid-area: deck-6;">
                <span>Recent Media Library</span>
                <div class="dashboard__media-row">
                    <span class="media-tag">Cyberpunk: Edgerunners</span>
                    <span class="media-tag">Suzume</span>
                    <span class="media-tag">Sousou no Frieren</span>
                </div>
            </div>

            <div class="deck__content" style="grid-area: deck-7;">
                <span>Recent Automation Log</span>
                <div class="dashboard__list-snippet">
                    <div class="snippet-item"><span>Check CPU: onrerv...</span> <span class="text-success">Success</span></div>
                    <div class="snippet-item"><span>Check CPU: qofert...</span> <span class="text-failure">Failure</span></div>
                </div>
            </div>
        </div>
    `;
}