export function renderSetting() {
    return `
        <div class="setting__container">
            <div class="setting__sidebar">
                <div class="setting__nav-item setting--active" data-target="general">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span>General</span>
                </div>
                <div class="setting__nav-item" data-target="users">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>Users</span>
                </div>
                <div class="setting__nav-item" data-target="network">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <span>Network</span>
                </div>
                <div class="setting__nav-item" data-target="notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    <span>Notifications</span>
                </div>
                <div class="setting__nav-item" data-target="docker">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span>Docker</span>
                </div>
                <div class="setting__nav-item" data-target="about">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    <span>About</span>
                </div>
            </div>

            <div class="setting__content-area">
                <div class="setting__panel setting__panel--active" id="panel-general">
                    <div class="setting__card">
                        <h3>General</h3>
                        <div class="form-group">
                            <label>Application Name</label>
                            <input type="text" value="PulseDeck">
                        </div>
                        <div class="form-group">
                            <label>Language</label>
                            <select>
                                <option>English</option>
                                <option>Indonesian</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Temperature Unit</label>
                            <select>
                                <option>°C</option>
                                <option>°F</option>
                            </select>
                        </div>
                    </div>

                    <div class="setting__card">
                        <h3>Services</h3>
                        <div class="service-toggle-row">
                            <span>Check Plex</span>
                            <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                        </div>
                        <div class="service-toggle-row">
                            <span>qBittorrent</span>
                            <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                        </div>
                        <div class="service-toggle-row">
                            <span>Home Assistant</span>
                            <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
                        </div>
                        <div class="service-toggle-row">
                            <span>Pi-hole</span>
                            <label class="switch"><input type="checkbox"><span class="slider"></span></label>
                        </div>
                    </div>

                    <div class="setting__card">
                        <h3>API Key</h3>
                        <div class="form-group">
                            <label>API Key</label>
                            <input type="text" value="API keys spleation API key" readonly>
                        </div>
                    </div>

                    <div class="setting__card">
                        <h3>User Management</h3>
                        <table class="setting__table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Admin</td>
                                    <td>user:deck@pulsedeck.com</td>
                                </tr>
                                <tr>
                                    <td>pulscadress</td>
                                    <td>user:deck@pulsedeck.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Panel Dummy untuk menu lain agar interaktif -->
                <div class="setting__panel" id="panel-users">
                    <div class="setting__card">
                        <h3>User Management & Access Control</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">Kelola izin akses pengguna dan peran admin pada panel ini.</p>
                    </div>
                </div>
                <div class="setting__panel" id="panel-network">
                    <div class="setting__card">
                        <h3>Network & Proxy Configuration</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">Atur port server, reverse proxy, dan konfigurasi jaringan lokal.</p>
                    </div>
                </div>
                <div class="setting__panel" id="panel-notifications">
                    <div class="setting__card">
                        <h3>Notification Preferences</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">Konfigurasi webhook Discord, Telegram, atau Email untuk alert sistem.</p>
                    </div>
                </div>
                <div class="setting__panel" id="panel-docker">
                    <div class="setting__card">
                        <h3>Docker Daemon Settings</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">Hubungkan soket Docker eksternal dan kelola direktori kontainer.</p>
                    </div>
                </div>
                <div class="setting__panel" id="panel-about">
                    <div class="setting__card">
                        <h3>About PulseDeck</h3>
                        <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">PulseDeck v1.0.0 - Home Server & Dashboard Management System[cite: 1].</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function initSettingListeners() {
    const navItems = document.querySelectorAll('.setting__nav-item');
    const panels = document.querySelectorAll('.setting__panel');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('setting--active'));
            item.classList.add('setting--active');

            const target = item.getAttribute('data-target');
            panels.forEach(panel => {
                if (panel.id === `panel-${target}`) {
                    panel.classList.add('setting__panel--active');
                } else {
                    panel.classList.remove('setting__panel--active');
                }
            });
        });
    });
}