const selectors = {
    button: '.services__icon',
    text: '.services__text',
}

class Services{
    constructor (container) {
        this.container = container;
        this.buttons = this.container.querySelectorAll(selectors.button);
        this.text = this.container.querySelectorAll(selectors.text);

        this.initEvents();
    }

    toggleService() {
        this.buttons.forEach(buttonElement => {
            buttonElement.addEventListener('click', () => {
                this.buttons.forEach(buttonEl => {
                    buttonEl.classList.remove('services__icon-active');
                });
                this.text.forEach(textElement => {
                    textElement.classList.remove('services__text-active');
                })
                buttonElement.classList.add('services__icon-active');
                if (buttonElement.classList.contains('exterior')) {
                    this.text.forEach(textElement => {
                        if (textElement.classList.contains('services__text-exterior')) {
                            textElement.classList.add('services__text-active');
                        }
                    })
                }
                if (buttonElement.classList.contains('interior')) {
                    this.text.forEach(textElement => {
                        if (textElement.classList.contains('services__text-interior')) {
                            textElement.classList.add('services__text-active');
                        }
                    })
                }
            })
        });
    }

    initEvents() {
        this.toggleService();
    }
}

export default Services;