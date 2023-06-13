import $ from './libs/jquery.min';
import Header from './modules/header';
import Services from './modules/services';
import Apply from './modules/apply';
import Home from './modules/home';
import Map from './modules/map';

$(document).ready(() => {
    const apply = document.querySelector('.apply');
    const header = document.querySelector('header');
    const services = document.querySelector('.services');
    const home = document.querySelector('.home');
    const map = document.querySelector('.map');
    
    const headerInstance = new Header(header);
    if (home) {
        const homeInstance = new Home(home);
    }
    if (apply) {
        const applyInstance = new Apply(apply);
    }
    if (services) {
        const servicesInstance = new Services(services);
    }
    if (map) {
        const mapInstance = new Map(map);
    }
    
});
