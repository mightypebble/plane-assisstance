import $ from './libs/jquery.min';
import Header from './modules/header';

$(document).ready(() => {
    const header = document.querySelector('header');

    const headerInstance = new Header(header);
});
