import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';
import { Scrollinfinite } from './helpers/Scroll-infinite.js';


export function App() {

    let $app = document.getElementById("app")


    $app.innerHTML = '';

    $app.appendChild(Header());
    $app.appendChild(Loader());
    $app.appendChild(Main());

    Router();
    Scrollinfinite();
}