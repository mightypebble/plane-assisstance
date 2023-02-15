const selectors = {
    button: '.services__icon',
    text: '.services__text',
}

class Services{
    constructor (container) {
        this.container = container;
        this.buttons = this.container.querySelectorAll(selectors.button);
        this.text = this.container.querySelectorAll(selectors.text);
        this.textClass = null;
        this.index = null;

        this.initEvents();
    }

    rearrangeText(textClass, index) {
        /* eslint-disable */
        this.textClass = textClass;
        this.index = index;

        this.text.forEach(textElement => {
            textElement.style.order = this.index;
            if (textElement.classList.contains(this.textClass)) {
                textElement.style.transform = 'translate(calc(-50% - 20px))';
                textElement.style.left = '50%';
            } else {
                textElement.style.left = `${this.index * 100}%`;
                if (index == -1) {
                    this.index += 2;
                } else {
                    this.index += 1;
                }
            }
        })
        /* eslint-enable */
    }

    toggleService() {
        this.buttons.forEach(buttonElement => {
            buttonElement.addEventListener('click', () => {
                this.buttons.forEach(buttonEl => {
                    buttonEl.classList.remove('services__icon-active');
                });
                this.text.forEach(textElement => {
                    textElement.style.transform = null; // eslint-disable-line
                })
                buttonElement.classList.add('services__icon-active');
                if (buttonElement.classList.contains('exterior')) {
                    const index = 1;
                    const textClass = 'services__text-exterior';
                    this.rearrangeText(textClass, index);
                }
                if (buttonElement.classList.contains('interior')) {
                    const index = -1;
                    const textClass = 'services__text-interior';
                    this.rearrangeText(textClass, index);
                }
                if (buttonElement.classList.contains('repairs')) {
                    const index = -2;
                    const textClass = 'services__text-repairs';
                    this.rearrangeText(textClass, index);
                }
            })
        });
    }

    initEvents() {
        this.toggleService();
    }
}

export default Services;