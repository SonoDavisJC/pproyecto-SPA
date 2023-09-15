export function Menu() {
    let $menu = document.createElement('nav');
    $menu.classList.add("menu");
    $menu.innerHTML = 
    `
    <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/search">Busqueda</a></li>
        <li><a href="#/contact">Contacto</a></li>
        <li><a href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprende JS</a></li>
    </ul>
    `
    ;
    return $menu
}