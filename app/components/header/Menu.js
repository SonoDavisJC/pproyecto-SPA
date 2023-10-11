export function Menu() {
    let $menu = document.createElement('div');
    $menu.classList.add("menu");
    $menu.innerHTML = `<nav><ul>
        <li><a href="#/news">News</a></li>
        <li><a href="#/search">Search</a></li>
        <li><a href="#/contact">Contact</a></li>
        </ul></nav> `;

    return $menu
}