export function renderDownloads() {
    return `
        <div class="container_download">
            <nav class="download__navbar">
                <div class="download__feature">
                    <div class="download__button download__addNew download--active">
                        <span>Add New</span>
                    </div>
                    <div class="download__button download__pause">
                        <span>Pause All</span>
                    </div>
                    <div class="download__button download__resume">
                        <span>Resume All</span>
                    </div> 
                    <div class="download__button download__setting">
                        <span>Settings</span>
                    </div> 
                </div>
                <div class="download__search">
                    <input type="search" name="" id="downloadSearch" placeholder="Search">
                </div>
            </nav>
        </div>
    `;
}