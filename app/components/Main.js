

export function Main(props) {
    const $main = document.createElement("main");
    $main.id = 'posts';

    let hash = location.hash;
    if(!hash || hash === "#/") {
        $main.classList.add('home');
    }
    else if(hash.includes('#/news')) {
        $main.classList.add('grid-fluid');
    }
    else if(hash.includes('#/search')) {
        $main.classList.add('results-search');
    }
    return $main;
}