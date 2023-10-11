import api from '../helpers/wp_api.js';
import {ajax} from '../helpers/ajax.js';

import Home from '../pages/home.js';
import { PostCard } from './posts/PostCard.js';
import { Post } from './posts/Post.js';
// import { SearchForm } from './header/SearchForm.js';
import { ResultSearch } from './ResultSearch.js';
import { ContacForm } from './ContacForm.js';

export async function Router() {
    let {hash} = location;
    let $posts = document.getElementById('posts');
    let $loader = document.querySelector('.loader');


    if(!hash || hash === "#/"){
        await ajax({
            url: `${api.POSTS}&page=${api.page}`,
            cbSucces: (posts) => {
                let html = Home(posts[0]);
                $posts.innerHTML = html;
            }
        });
    }
    else if (hash.includes('#/news')){
        await ajax({
            url: `${api.POSTS}&page=${api.page}`,
            cbSucces: (posts) => {
                // console.log(posts);
                let html = ``;
                posts.forEach(e => { html += PostCard(e)});
                $posts.innerHTML = html;
            }
        })
    }
    else if(hash.includes('#/search')) {

        let query = localStorage.getItem('wpSearch');

        if(!query) {
            $loader.style.display = 'none';
            return false;
        }
        location.hash = `#/search?search=${query}`;


        await ajax ({
            url: `${api.SEARCH}${query}`,
            cbSucces: (postSearch) => {
                //console.log(postSearch);
                let html = ``;
                if (postSearch.length === 0) {
                    html = `<p>No se encontraron resultados de busqueda con el termino <b>${query}</b><p>`;
                    $posts.innerHTML= html;
                }
                postSearch.forEach(e => html += ResultSearch(e));
                let results = postSearch.length >= 10 
                ? `More than ${postSearch.length} results`
                : `${postSearch.length} results`
                $posts.innerHTML = `<div>${results}</div>${html}`;
            }
        })
    }
    else if(hash.includes('#/contact')) {
        $posts.appendChild(ContacForm())
    }
    else {
        let slugHash = location.hash;
        //console.log(slugHash);
        let slug = slugHash.replace('#/', '');

        await ajax({
            url: `${api.POST}?slug=${slug}`,
            cbSucces: (post) => {
                //console.log(post)
                let html = ``;
                html = Post(post);
                $posts.innerHTML = html;
            }
        })
    }

    $loader.style.display = 'none';

}