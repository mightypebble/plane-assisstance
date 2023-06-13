const selectors = {
    map: '.map-image',
    dot: '.dot',

}

class Map {
    constructor (container) {
        this.container = container;
        this.dots = this.container.querySelectorAll(selectors.dot);
        this.map = this.container.querySelector(selectors.map);

        this.initEvents();
    }

    dotDetails() {
        const dotArray = this.dots;
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const timeout = setTimeout(() => {
                    let iterations = 0;
                    const interval = setInterval(() => {
                        dot.firstElementChild.innerHTML = dot.firstElementChild.innerHTML.split('') // eslint-disable-line
                            .map((letter, index) => {
                                if (index < iterations) {
                                    return dot.dataset.city[index];
                                }

                                return letters[Math.floor(Math.random() * 52)]
                            }).join('');

                        if(iterations >= dot.dataset.city.length){ 
                            clearInterval(interval);
                        }

                        iterations += 1 / 2;
                    }, 25);
                }, 200);
                if (dot === this.dots[this.dots.length - 1]) { // Malta text gets hidden outside of container...
                    if (dot.style.top === '97%') { // ...so we push it up a little when active
                        dot.style.top = '95%' // eslint-disable-line
                    }
                    else if (dot.style.top === '95%') {
                        dot.style.top = '97%' // eslint-disable-line
                    }
                    dot.classList.toggle('dot-active');
                } else {
                    dot.classList.toggle('dot-active');
                }
            });
            this.map.addEventListener('click', function(event) {
                if (!dot.contains(event.target)) {
                    dot.classList.remove('dot-active');
                    if (dot === dotArray[dotArray.length - 1]) dot.style.top = '97%' // eslint-disable-line
                } 
            });
        });
    }

    initEvents() {
        this.dotDetails();
    }
}

export default Map;