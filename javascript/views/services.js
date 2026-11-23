// javascript/views/downloads.js
export function renderServices() {
    return `
        <div class="service__container">
            <nav class="services__navbar">
                <div class="services__search">
                    <input type="search" name="" id="servicesSearch" placeholder="Search">
                </div>
                <div class="services__feature">
                    <div class="services_all"><span>ALL</span></div>
                    <div class="services__run"><span>Running</span></div>
                    <div class="services__stop"><span>Stopped</span></div>
                    <div class="services__mar"><span>Mar</span></div>
                    <div class="services__filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-sliders-horizontal preview-icon">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-funnel preview-icon">
                            <path
                                d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                        </svg>
                    </div>
                </div>
            </nav>
            <div class="services__content"></div>
        </div>
    `;
}