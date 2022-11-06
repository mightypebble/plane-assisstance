const selectors = {
    menu: '.navbar',
    menuToggleOn: '.menu-toggle--on',
}

class Header{
    constructor (container) {
        this.container = container;
        this.menu = this.container.querySelector(selectors.menu);
        this.menuToggleOn = this.container.querySelector(selectors.menuToggleOn);

        this.initEvents();
    }

    toggleMenu() {
        this.menuToggleOn.addEventListener('click', () => {
            if (this.menu.style.top !== '0px') {
                this.menu.style.top = '0';
            } else {
                this.menu.style.top = `-${this.menu.offsetHeight - 36}px`;
            }
        })
    }

    initEvents() {
        this.toggleMenu();
    }
}

export default Header;