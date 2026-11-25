export function renderDownloads() {
    return `
        <div class="container_download">
            <nav class="download__navbar">
                <div class="download__feature">
                    <div class="download__button download__addNew download--active" data-filter="all">
                        <span>All</span>
                    </div>
                    <div class="download__button download__downloading" data-filter="downloading">
                        <span>Downloading</span>
                    </div>
                    <div class="download__button download__seeding" data-filter="seeding">
                        <span>Seeding</span>
                    </div> 
                    <div class="download__button download__paused" data-filter="paused">
                        <span>Paused</span>
                    </div> 
                </div>
                <div class="download__search">
                    <input type="search" name="" id="downloadSearch" placeholder="Search file name...">
                </div>
            </nav>
            <div class="download__content">
                <div class="table__download">
                    <table>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Status</th>
                                <th>Size</th>
                                <th>Download Speed</th>
                                <th>Upload Speed</th>
                                <th>Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Arknights.1080p.BluRay.AV1-Sokudo</td>
                                <td><span class="status-badge status--downloading">Downloading</span></td>
                                <td>3.14 GB</td>
                                <td>10 mbps</td>
                                <td>30 Minute</td>
                                <td>20.7%</td>
                            </tr>
                            <tr>
                                <td>'Fate⁄Grand Order, Final Singularity - Grand Temple of Time, Solomon (2021) VOSTFR 1080p 10bits BluRay x265 AAC 5.1 -Punisher694.mkv'</td>
                                <td><span class="status-badge status--seeding">Seeding</span></td>
                                <td>1.20 GB</td>
                                <td>7 mbps</td>
                                <td>17 Minute</td>
                                <td>50.9%</td>
                            </tr>
                            <tr>
                                <td>Gushing Over Magical Girls [Season 1] [BD 1080p x265 HEVC OPUS]</td>
                                <td><span class="status-badge status--paused">Paused</span></td>
                                <td>6.18 GB</td>
                                <td>14 mbps</td>
                                <td>56 Minute</td>
                                <td>34.9%</td>
                            </tr>
                            <tr>
                                <td>The Ribbon Hero [720p].mkv</td>
                                <td><span class="status-badge status--paused">Paused</span></td>
                                <td>536 Mb</td>
                                <td>18 mbps</td>
                                <td>2 Minute</td>
                                <td>90.7%</td>
                            </tr>
                            <tr>
                                <td>'[Aizu] Tenki no Ko BD [480p].mkv'</td>
                                <td><span class="status-badge status--seeding">Seeding</span></td>
                                <td>3.14 GB</td>
                                <td>10 mbps</td>
                                <td>30 Minute</td>
                                <td>20.7%</td>
                            </tr>
                            <tr>
                                <td>'Chou Kaguya-hime! 2026 [480p]v3.mkv'</td>
                                <td><span class="status-badge status--seeding">Seeding</span></td>
                                <td>1.2 GB</td>
                                <td>11 mbps</td>
                                <td>9 Minute</td>
                                <td>80.1%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

export function initDownloadsListeners() {
    const filterButtons = document.querySelectorAll('.download__feature .download__button[data-filter]');
    const searchInput = document.getElementById('downloadSearch');
    const tableRows = document.querySelectorAll('.table__download tbody tr');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('download--active'));
            button.classList.add('download--active');

            const filterValue = button.getAttribute('data-filter');

            tableRows.forEach(row => {
                const statusBadge = row.querySelector('.status-badge');
                const statusText = statusBadge ? statusBadge.textContent.trim().toLowerCase() : '';

                if (filterValue === 'all') {
                    row.style.display = '';
                } else if (filterValue === statusText) {
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
                const fileNameCell = row.querySelector('td:first-child');
                const fileName = fileNameCell ? fileNameCell.textContent.toLowerCase() : '';

                if (fileName.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}