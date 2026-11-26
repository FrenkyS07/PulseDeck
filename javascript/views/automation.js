export function renderAutomation() {
    return `
        <div class="automation__container>
            <nav class="automation__navbar">
                <button type="submit" class="automation__button automation__button--primary">Add Workflow</button>
                <div class="automation__navbar-right" style="margin-left: auto; display: flex; gap: 0.5rem;">
                    <button type="submit" class="automation__button">Run Flow</button>
                    <button type="submit" class="automation__button">Import</button>
                    <button type="submit" class="automation__button">Settings</button>
                </div>
            </nav>
        </div>
        <div class="automation__canvas">
            <div class="workflow__row">
                <div class="workflow__node"> Time Trigger</div>
                <div class="workflow__line"></div>
                <div class="workflow__node"> Check CPU</div>
                <div class="workflow__line"></div>
                <div class="workflow__node"> Send Notification</div>
            </div>
            <div class="workflow__row" style="margin-top: 1.5rem;">
                <div class="workflow__node"> Time Trigger</div>
                <div class="workflow__line"></div>
                <div class="workflow__node"> Check CPU</div>
                <div class="workflow__line"></div>
                <div class="workflow__node workflow__node--warning">⚡ Restart Service</div>
                <div class="workflow__line"></div>
                <div class="workflow__node workflow__node--warning">⚡ Restart Service</div>
            </div>
        </div>
    `;
}