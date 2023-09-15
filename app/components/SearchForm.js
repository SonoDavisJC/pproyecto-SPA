export function SearchForm() {
    let $form = document.createElement('form');
    let $input = document.createElement('input');
    let $pTitleForm = document.createElement('p');

    $form.classList.add('search-form');

    $pTitleForm.textContent = 'Busqueda';

    $input.name = 'search';
    $input.type = 'search';
    $input.placeholder = 'Buscar...';
    $input.classList.add('inputText');
    $input.autocomplete = 'off';



    $form.appendChild($pTitleForm);
    $form.appendChild($input);

    if(location.hash.includes('#/search')){
        $input.value = localStorage.getItem('wpSearch');
    }

    document.addEventListener('search', e => {
        if(!e.target.matches('input[type=search]')) return false;
        if(!e.target.value) localStorage.removeItem('wpSearch');
    });

    document.addEventListener('submit', e => {
        if(!e.target.matches('.search-form')) return false;
            e.preventDefault();
            // target y despues el name de uno de los elementos del form
            // console.log(e.target.search.value);
            localStorage.setItem('wpSearch', e.target.search.value);
            location.hash = `#/search?search=${e.target.search.value}`;

    });
    
    return $form;
}