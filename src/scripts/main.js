import $ from './libs/jquery.min';
import Header from './modules/header';
import Services from './modules/services';

$(document).ready(() => {
    const header = document.querySelector('header');
    const services = document.querySelector('.services');

    const headerInstance = new Header(header);
    const servicesInstance = new Services(services);
});
