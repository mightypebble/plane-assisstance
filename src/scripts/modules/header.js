const selectors = {
    menu: '.navbar',
    menuToggleOn: '.menu-toggle--on',
    menuOption: '.option',
}

class Header{
    constructor (container) {
        this.container = container;
        this.menu = this.container.querySelector(selectors.menu);
        this.menuToggleOn = this.container.querySelector(selectors.menuToggleOn);
        this.menuOptions = this.container.querySelectorAll(selectors.menuOption);

        this.initEvents();
    }

    toggleMenu() {
        this.menuToggleOn.addEventListener('click', () => {
            if (this.menu.style.top !== '0px') {
                this.menu.style.top = '0';
            } else {
                this.menu.style.top = `-${this.menu.offsetHeight - 36}px`;
            }
        });
        this.menuOptions.forEach(option => {
            option.addEventListener('click', () => {
                if (document.body.clientWidth < 1024) this.menu.style.top = `-${this.menu.offsetHeight - 36}px`;
            });
        });
    }

    initEvents() {
        this.toggleMenu();
    }
}

export default Header;