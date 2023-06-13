const selectors = {
    applyHiddenContainer: '.apply-hidden-container',
    applyTextContainer: '.apply-text-container',
    button: '.menu-toggle',
    menu: '.apply-menu',
}

class Apply {
    constructor (container) {
        this.container = container;
        this.applyHiddenContainer =  this.container.querySelector(selectors.applyHiddenContainer);
        this.applyTextContainer =  this.container.querySelector(selectors.applyTextContainer);
        this.button = this.container.querySelector(selectors.button);
        this.menu =  this.container.querySelector(selectors.menu);

        this.initEvents();
    }

    activateHidden() {
        this.button.addEventListener('click', () => {
            this.applyHiddenContainer.classList.add('apply-menu--active');
            this.menu.style.height = `${this.applyTextContainer.offsetHeight}px`;
            console.log(this.applyTextContainer.offsetHeight)
        });
    }

    deactivateHidden() {
        this.applyHiddenContainer.addEventListener('click', () => {
            this.applyHiddenContainer.classList.remove('apply-menu--active');
            this.menu.style.height = null;
        });
    }

    initEvents() {
        this.activateHidden();
        this.deactivateHidden();
    }
}

export default Apply;