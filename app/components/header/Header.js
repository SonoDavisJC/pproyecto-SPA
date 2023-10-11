import { Title } from './Title.js';
import { Menu } from './Menu.js';
import { SearchForm } from './SearchForm.js';
import { MenuHambuger } from './MenuHamburger.js';

export function Header() {
    const $header = document.createElement('header');
    const $divMenu = document.createElement('div');
    const $divMenuH = document.createElement('div');

    $header.classList.add('header');

    $divMenu.classList.add('menu-open');
    $divMenu.classList.add('active');

    $divMenuH.classList.add('menu-hamburger');

    

    // Menu para Desktop
    $divMenu.appendChild(Menu());
    $divMenu.appendChild(SearchForm());
    //--------------------------



    // Menu para Tablet y Mobile
    
    $divMenuH.appendChild(MenuHambuger());
    //--------------------------



    $header.appendChild(Title());
    $header.appendChild($divMenuH);
    $header.appendChild($divMenu);


    return $header;
}