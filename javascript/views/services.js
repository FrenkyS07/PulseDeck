export function renderServices() {
    return `
        <div class="service__container">
            <nav class="services__navbar">
                <div class="services__search">
                    <input type="search" name="" id="servicesSearch" placeholder="Search server, files, or services...">
                </div>
                <div class="services__feature">
                    <div class="services_all services--active" data-filter="all"><span>All</span></div>
                    <div class="services__run" data-filter="running"><span>Running</span></div>
                    <div class="services__stop" data-filter="stopped"><span>Stopped</span></div>
                    <div class="services__mar" data-filter="mar"><span>Mar</span></div>
                    <div class="services__filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-sliders-horizontal">
                            <path d="M10 5H3" />
                            <path d="M12 19H3" />
                            <path d="M14 3v4" />
                            <path d="M16 17v4" />
                            <path d="M21 12h-9" />
                            <path d="M21 19h-5" />
                            <path d="M21 5h-7" />
                            <path d="M8 10v4" />
                            <path d="M8 12H3" />
                        </svg>
                    </div>
                    <div class="services__sort">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-funnel">
                            <path
                                d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                        </svg>
                    </div>
                </div>
            </nav>
            <div class="services__content">
                <div class="table__services">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Status</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">CPU Usage</th>
                                <th scope="col">RAM Usage</th>
                                <th scope="col">Uptime</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="status-badge status--online">Online</span></td>
                                <td>
                                    <div class="service-name-cell">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 512 512">
                                            <rect width="512" height="512" fill="#282a2d" rx="15%" />
                                            <path fill="#e5a00d" d="M256 70H148l108 186-108 186h108l108-186z" />
                                        </svg>
                                        <span>Plex</span>
                                    </div>
                                </td>
                                <td>CPU-16 - 8.9m</td>
                                <td>1.0 GB / 16 GB</td>
                                <td>1 Hours Ago</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="action-btn sevices__feature--active" title="Pause">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="3" width="5" height="18" rx="1" /><rect x="5" y="3" width="5" height="18" rx="1" /></svg>
                                        </button>
                                        <button class="action-btn" title="Restart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                        </button>
                                        <button class="action-btn" title="Settings">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="status-badge status--offline">Offline</span></td>
                                <td>
                                    <div class="service-name-cell">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="38" height="38" viewBox="0 0 512 512">
                                        <path
                                            d="M512 473.3c0 17.6-14.4 32-32 32H32c-17.6 0-32-14.4-32-32v-192c0-17.6 10.2-42.2 22.6-54.6L233.4 16c12.4-12.4 32.8-12.4 45.2 0l210.8 210.8c12.4 12.4 22.6 37 22.6 54.6z"
                                            style="fill:#f2f4f9" />
                                        <path
                                            d="M489.4 226.7 278.6 16c-12.4-12.4-32.8-12.4-45.2 0L22.6 226.7C10.2 239.1 0 263.7 0 281.3v192c0 17.6 14.4 32 32 32h196.8l-86.7-86.7c-4.5 1.5-9.2 2.4-14.2 2.4-24.1 0-43.7-19.6-43.7-43.7s19.6-43.7 43.7-43.7 43.7 19.6 43.7 43.7c0 5-.9 9.7-2.4 14.2l67.5 67.5V211.8c-14.5-7.1-24.5-22-24.5-39.2 0-24.1 19.6-43.7 43.7-43.7s43.7 19.6 43.7 43.7c0 17.2-10 32.1-24.5 39.2v173.4l67.1-67.1c-1.3-4.2-2-8.6-2-13.2 0-24.1 19.6-43.7 43.7-43.7s43.7 19.6 43.7 43.7-19.6 43.7-43.7 43.7c-5.3 0-10.4-1-15.1-2.8l-93.7 93.7v65.9H480c17.6 0 32-14.4 32-32v-192c0-17.6-10.2-42.2-22.6-54.7"
                                            style="fill:#18bcf2" />
                                    </svg>
                                        <span>Home Assistant</span>
                                    </div>
                                </td>
                                <td>Intel i7 - 42K</td>
                                <td>9.3 GB / 16 GB</td>
                                <td>14 Hours Ago</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="action-btn sevices__feature--active" title="Pause">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="3" width="5" height="18" rx="1" /><rect x="5" y="3" width="5" height="18" rx="1" /></svg>
                                        </button>
                                        <button class="action-btn" title="Restart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                        </button>
                                        <button class="action-btn" title="Settings">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="status-badge status--online">Online</span></td>
                                <td>
                                    <div class="service-name-cell">
                                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="38" height="38" viewBox="0 0 512 512">
                                            <linearGradient id="qbittorrent_svg__a" x1="-545.332" x2="-545.12" y1="1053.675" y2="1053.291"
                                                gradientTransform="matrix(992 0 0 -992 541102 1045278)" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" style="stop-color:#72b4f5" />
                                                <stop offset="1" style="stop-color:#356ebf" />
                                            </linearGradient>
                                            <circle cx="256" cy="256" r="248" style="fill-rule:evenodd;clip-rule:evenodd;fill:url(#qbittorrent_svg__a)" />
                                            <path
                                                d="M256 512c-34.6 0-68.1-6.8-99.6-20.1C125.9 479 98.5 460.5 75 437s-42-50.9-54.9-81.4C6.8 324.1 0 290.6 0 256s6.8-68.1 20.1-99.6C33 125.9 51.5 98.5 75 75s50.9-42 81.4-54.9C187.9 6.8 221.4 0 256 0s68.1 6.8 99.6 20.1C386.1 33 413.5 51.5 437 75s42 50.9 54.9 81.4C505.3 188 512 221.5 512 256s-6.8 68.1-20.1 99.6C479 386.1 460.5 413.5 437 437s-50.9 42-81.4 54.9c-31.5 13.3-65 20.1-99.6 20.1m0-496C123.7 16 16 123.7 16 256s107.7 240 240 240 240-107.7 240-240S388.3 16 256 16"
                                                style="fill:#daefff" />
                                            <path
                                                d="M356.5 166.2c22.2 0 39.5 7.6 51.7 22.9 12.4 15.1 18.5 36.6 18.5 64.3q0 41.7-18.6 64.8c-12.4 15.4-29.5 23-51.5 23-11 0-21.1-2-30.2-6-9-4.1-16.6-10.4-22.9-18.8h-1.9l-5.4 21.8h-18.4V98h25.6v58.3c0 13.1-.4 24.8-1.2 35.2h1.2c11.9-16.9 29.6-25.3 53.1-25.3m-3.7 21.4c-17.5 0-30.1 5.1-37.8 15.1s-11.5 26.9-11.5 50.6 4 40.8 11.9 51 20.6 15.2 38.1 15.2c15.8 0 27.5-5.7 35.2-17.1 7.7-11.5 11.5-28 11.5-49.6 0-22-3.9-38.4-11.5-49.2-7.8-10.5-19.8-16-35.9-16"
                                                style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff" />
                                            <path
                                                d="M158.6 319.8c17.1 0 29.5-4.6 37.4-13.8 7.8-9.1 12-24.6 12.5-46.3V254c0-23.6-4-40.7-12.1-51.1-8-10.4-20.8-15.6-38.1-15.6-15 0-26.6 5.9-34.6 17.6-7.9 11.6-11.9 28.1-11.9 49.4s3.9 37.5 11.8 48.8c8 11 19.6 16.6 35 16.7m-3.8 21.3c-21.8 0-38.8-7.6-51.1-23-12.2-15.4-18.3-36.7-18.3-64.2 0-27.6 6.2-49.2 18.5-64.8s29.5-23.3 51.5-23.3c23.1 0 40.9 8.8 53.4 26.2h1.4l3.7-23.1h20.2v245h-25.6v-72.3c0-10.3.6-19 1.7-26.2h-2c-11.8 17.2-29.6 25.7-53.4 25.7"
                                                style="fill-rule:evenodd;clip-rule:evenodd;fill:#c8e8ff" />
                                        </svg>
                                        <span>qBittorrent</span>
                                    </div>
                                </td>
                                <td>CPU-17 GHz</td>
                                <td>9.3 GB / 16 GB</td>
                                <td>10 Hours Ago</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="action-btn sevices__feature--active" title="Pause">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="3" width="5" height="18" rx="1" /><rect x="5" y="3" width="5" height="18" rx="1" /></svg>
                                        </button>
                                        <button class="action-btn" title="Restart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                        </button>
                                        <button class="action-btn" title="Settings">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="status-badge status--offline">Offline</span></td>
                                <td>
                                    <div class="service-name-cell">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="38" height="38" viewBox="0 0 512 512">
                                        <path d="M512 80v352c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h352c44.2 0 80 35.8 80 80"
                                            style="fill-rule:evenodd;clip-rule:evenodd;fill:#0082c9" />
                                        <path
                                            d="M256 167.2c-40.3 0-74.5 27.2-85.3 64.2-9.3-19.4-29-33-51.8-33-31.6-.1-57.6 25.9-57.6 57.6s26 57.6 57.6 57.6c22.8 0 42.5-13.6 51.8-33 10.8 36.9 45 64.2 85.3 64.2s74.5-27.2 85.3-64.2c9.3 19.4 29 33 51.8 33 31.6 0 57.6-26 57.6-57.6s-25.8-57.7-57.5-57.7c-22.8 0-42.5 13.6-51.8 33-10.9-36.9-45.1-64.1-85.4-64.1m0 34.2c30.3 0 54.5 24.2 54.5 54.5s-24.2 54.5-54.5 54.5-54.5-24.2-54.5-54.5 24.2-54.5 54.5-54.5m-137 31.2c13.1 0 23.3 10.2 23.3 23.3s-10.2 23.3-23.3 23.3S95.5 269 95.5 256s10.3-23.4 23.5-23.4m274.1 0c13.1 0 23.3 10.2 23.3 23.3s-10.2 23.3-23.3 23.3-23.3-10.2-23.3-23.2 10.2-23.4 23.3-23.4"
                                            style="fill:#fff" />
                                    </svg>
                                        <span>Nextcloud</span>
                                    </div>
                                </td>
                                <td>CPU - 10 ra</td>
                                <td>5.4 GB / 16 GB</td>
                                <td>12 Hours Ago</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="action-btn sevices__feature--active" title="Pause">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="3" width="5" height="18" rx="1" /><rect x="5" y="3" width="5" height="18" rx="1" /></svg>
                                        </button>
                                        <button class="action-btn" title="Restart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                        </button>
                                        <button class="action-btn" title="Settings">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="status-badge status--offline">Offline</span></td>
                                <td>
                                    <div class="service-name-cell">
                                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="38" height="38" viewBox="0 0 512 512">
                                        <path
                                            d="M494.2 0h-31.8v31.8h31.8zM383.1 222.4v-63.6h63.5v63.5h63.5c1.1 58.9-3.4 110.2-33.3 161.6-86.6 152.4-300.5 172.9-414 39.2C36.3 392.4 17.2 355 8.3 315c-4.5-21.7-6.5-49.2-6.5-72.5V4h127l.2 242c.6 31.3 6.3 63.5 25 88 53.9 73 167.9 66.3 212.1-13.1 15.9-26.6 17.3-68.7 17-98.5m15.8-174.8h47.6v47.6H510v63.5h-63.5V95.3h-47.6z"
                                            style="fill:#005ed9" />
                                    </svg>
                                        <span>Unifi Controller</span>
                                    </div>
                                </td>
                                <td>CPU - 10 ra</td>
                                <td>1.4 GB / 16 GB</td>
                                <td>12 Hours Ago</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="action-btn sevices__feature--active" title="Pause">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="3" width="5" height="18" rx="1" /><rect x="5" y="3" width="5" height="18" rx="1" /></svg>
                                        </button>
                                        <button class="action-btn" title="Restart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                        </button>
                                        <button class="action-btn" title="Settings">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><span class="status-badge status--online">Online</span></td>
                                <td>
                                    <div class="service-name-cell">
                                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="38" height="38" viewBox="0 0 512 512">
                                        <linearGradient id="pi-hole_svg__a" x1="1124.653" x2="1839.97" y1="-669.315" y2="-669.315"
                                            gradientTransform="matrix(.3694 0 0 -.3694 -322.747 -168.195)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" style="stop-color:#12b212" />
                                            <stop offset="1" style="stop-color:#0f0" />
                                        </linearGradient>
                                        <path
                                            d="M226.1 157.3C162.1 150.5 97.7 102.2 92.7 0 191.8 0 244.9 58.7 250 151.8c18.8-111.6 106.7-98.5 106.7-98.5 4.2 63.2-47.8 101.6-106.7 104.8-16.5-35-115.7-120.5-115.7-120.5-.1-.1-.3-.1-.4 0q-.15.15 0 .3s95.7 83.4 92.2 119.4"
                                            style="fill:url(#pi-hole_svg__a)" />
                                        <path
                                            d="M256 512c-6.2-.4-63.9-2.6-67.4-67.4-2.8-39.4 28.3-68.5 28.3-106.7-7.1-95.4-134.9-83.6-134.9 0-.1 20.9 8.2 40.9 23 55.7l95.2 95.3c14.8 14.8 34.8 23 55.8 23.1m0-348.1c6.2.4 63.9 2.6 67.4 67.4 2.8 39.4-28.3 68.5-28.3 106.7 7.1 95.4 134.8 83.6 134.8 0 .1-20.9-8.2-40.9-23-55.7L311.7 187c-14.8-14.8-34.8-23-55.7-23"
                                            style="fill:#91180c" />
                                        <path
                                            d="M430 337.9c-.4 6.2-2.6 63.9-67.4 67.4-39.4 2.8-68.5-28.3-106.7-28.3-95.4 7.1-83.6 134.8 0 134.8 20.9.1 40.9-8.2 55.7-23l95.3-95.2c14.8-14.8 23-34.8 23.1-55.7m-347.7 0c.4-6.2 2.6-63.9 67.4-67.4 39.4-2.8 68.5 28.3 106.7 28.3 95.4-7.2 83.6-134.8 0-134.8-20.9-.1-40.9 8.2-55.7 23l-95.3 95.3c-14.8 14.8-23 34.8-23 55.7"
                                            style="fill:#f42e1c" />
                                    </svg>
                                        <span>Pi-hole</span>
                                    </div>
                                </td>
                                <td>CPU - 10 ra</td>
                                <td>7.0 GB GB / 16 GB</td>
                                <td>10 Hours Ago</td>
                                <td>
                                    <div class="action-buttons">
                                        <button class="action-btn sevices__feature--active" title="Pause">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="3" width="5" height="18" rx="1" /><rect x="5" y="3" width="5" height="18" rx="1" /></svg>
                                        </button>
                                        <button class="action-btn" title="Restart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                        </button>
                                        <button class="action-btn" title="Settings">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}


export function initServicesListeners() {
    const filterButtons = document.querySelectorAll('.services__feature [data-filter]');
    const searchInput = document.getElementById('servicesSearch');
    const tableRows = document.querySelectorAll('.table__services tbody tr');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('services--active', 'sevices__feature--active'));
            button.classList.add('services--active');

            const filterValue = button.getAttribute('data-filter');

            tableRows.forEach(row => {
                const statusBadge = row.querySelector('.status-badge');
                const statusText = statusBadge ? statusBadge.textContent.trim().toLowerCase() : '';

                if (filterValue === 'all') {
                    row.style.display = '';
                } else if (filterValue === 'running' && statusText === 'online') {
                    row.style.display = '';
                } else if (filterValue === 'stopped' && statusText === 'offline') {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            tableRows.forEach(row => {
                const serviceNameEl = row.querySelector('.service-name-cell span');
                const serviceName = serviceNameEl ? serviceNameEl.textContent.toLowerCase() : '';

                if (serviceName.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}