const selectors = {
    homeHiddenContainer: '.hidden-container',
    homeTextContainer: '.home-text-container',
    button: '.home-button',
    hidden: '.home-hidden-text',
}

class Home {
    constructor (container) {
        this.container = container;
        this.homeHiddenContainer =  this.container.querySelector(selectors.homeHiddenContainer);
        this.homeTextContainer =  this.container.querySelector(selectors.homeTextContainer);
        this.button = this.container.querySelector(selectors.button);
        this.hidden =  this.container.querySelector(selectors.hidden);

        this.initEvents();
    }

    activateHidden() {
        this.button.addEventListener('click', () => {
            this.homeHiddenContainer.classList.add('hidden-container--active');
            this.hidden.style.height = `${this.homeTextContainer.offsetHeight}px`;
            console.log(this.homeTextContainer.offsetHeight)
        });
    }

    deactivateHidden() {
        this.homeHiddenContainer.addEventListener('click', () => {
            this.homeHiddenContainer.classList.remove('hidden-container--active');
            this.hidden.style.height = null;
        });
    }

    initEvents() {
        this.activateHidden();
        this.deactivateHidden();
    }
}

export default Home;