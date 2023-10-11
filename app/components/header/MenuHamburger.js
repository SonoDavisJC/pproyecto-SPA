
export function MenuHambuger() {
    let menuOpen = document.getElementsByClassName('menu-open');

    let $iconMenu = document.createElement("div");
    $iconMenu.innerHTML = `<i class="fa-solid fa-bars fa-xl"></i>`;

    $iconMenu.addEventListener('click', (e) => {
        menuOpen[0].classList.toggle('active')
    })

    return $iconMenu;
}