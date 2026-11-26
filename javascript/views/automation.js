export function renderAutomation() {
    return `
        <div class="automation__container">
            <nav class="automation__navbar">
                <button type="submit" class="automation__button automation__button--primary">Add Workflow</button>
                <div class="automation__navbar-right" style="margin-left: auto; display: flex; gap: 0.5rem;">
                    <button type="submit" class="automation__button">Run Flow</button>
                    <button type="submit" class="automation__button">Import</button>
                    <button type="submit" class="automation__button">Settings</button>
                </div>
            </nav>
            
            <div class="automation__canvas">
                <div class="workflow__row">
                    <div class="workflow__node">🕒 Time Trigger</div>
                    <div class="workflow__line"></div>
                    <div class="workflow__node">⚙️ Check CPU</div>
                    <div class="workflow__line"></div>
                    <div class="workflow__node">💬 Send Notification</div>
                </div>
                <div class="workflow__row" style="margin-top: 1.5rem;">
                    <div class="workflow__node">🕒 Time Trigger</div>
                    <div class="workflow__line"></div>
                    <div class="workflow__node">⚙️ Check CPU</div>
                    <div class="workflow__line"></div>
                    <div class="workflow__node workflow__node--warning">⚡ Restart Service</div>
                    <div class="workflow__line"></div>
                    <div class="workflow__node workflow__node--warning">⚡ Restart Service</div>
                </div>
            </div>

            <div class="automation__log-section">
                <div class="log__header-bar">
                    <span class="log__title">Automation Log</span>
                    <div class="log__search">
                        <input type="search" id="automationSearch" placeholder="Search logs...">
                    </div>
                    <div class="log__filter-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/></svg>
                    </div>
                </div>
                <div class="table__automation">
                    <table>
                        <thead>
                            <tr>
                                <th>Timestamp 🔽</th>
                                <th>Task</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2022-01-28 4:35:04</td>
                                <td>Check CPU: Check CPU: onrerv...</td>
                                <td><span class="status-badge status--success">🟢 Success</span></td>
                                <td>Plex container restarted successfully</td>
                            </tr>
                            <tr>
                                <td>2022-01-28 4:25:56</td>
                                <td>Check CPU: Check CPU: qofert...</td>
                                <td><span class="status-badge status--failure">🔴 Failure</span></td>
                                <td>Plex container restarted successfully</td>
                            </tr>
                            <tr>
                                <td>2022-01-28 4:25:38</td>
                                <td>Check CPU: Check Adion</td>
                                <td><span class="status-badge status--success">🟢 Success</span></td>
                                <td>Plex container restarted successfully</td>
                            </tr>
                            <tr>
                                <td>2022-01-28 4:39:32</td>
                                <td>Check CPU: Check Karea</td>
                                <td><span class="status-badge status--failure">🔴 Failure</span></td>
                                <td>Plex container restarted successfully</td>
                            </tr>
                            <tr>
                                <td>2022-01-28 4:35:56</td>
                                <td>Task CPUshore</td>
                                <td><span class="status-badge status--success">🟢 Success</span></td>
                                <td>Plex container restarted successfully</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

export function initAutomationListeners() {
    const searchInput = document.getElementById('automationSearch');
    const tableRows = document.querySelectorAll('.table__automation tbody tr');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            tableRows.forEach(row => {
                const rowText = row.textContent.toLowerCase();

                if (rowText.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}