import api from '../../helpers/wp_api.js';

export function Title() {
    const $figure = document.createElement("figure");
    /*
    $h1.innerHTML = `
    <a href="${api.DOMAIN}" target="_blank" rel="noopener"> ${api.NAME.toUpperCase()} </a>
    `;  */
    $figure.innerHTML = `<a  href="#/"> <img src="./public/images/logo.jpg" class="logo-app" /> </a> `

    return $figure;
}