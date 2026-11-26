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
    `;
}