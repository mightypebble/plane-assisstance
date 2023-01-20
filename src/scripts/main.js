import $ from './libs/jquery.min';
import Header from './modules/header';
import Services from './modules/services';
import Apply from './modules/apply';

$(document).ready(() => {
    const apply = document.querySelector('.apply');
    const header = document.querySelector('header');
    const services = document.querySelector('.services');
    
    const headerInstance = new Header(header);
    if (apply) {
        const applyInstance = new Apply(apply);
    }
    if (services) {
        const servicesInstance = new Services(services);
    }
    
});
