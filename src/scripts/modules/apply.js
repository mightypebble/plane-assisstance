const selectors = {
    formButton: '.apply__button-form--toggle',
    formClose: '.form__item-close',
    form: '.apply__form',
}

class Apply {
    constructor (container) {
        this.container = container;
        this.formButton = this.container.querySelector(selectors.formButton);
        this.formClose = this.container.querySelector(selectors.formClose);
        this.form = this.container.querySelector(selectors.form);
        

        this.initEvents();
    }

    formToggle() {
        this.formButton.addEventListener('click', () => {
            this.form.style.right = '0';
        });
        this.formClose.addEventListener('click', () => {
            this.form.style.right = '100%';
        });
    }

    initEvents() {
        this.formToggle();
    }
}

export default Apply;