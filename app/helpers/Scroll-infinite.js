import { PostCard } from '../components/posts/PostCard.js';
import { ResultSearch } from '../components/ResultSearch.js';
import { ajax } from './ajax.js';
import api from './wp_api.js';

export async function Scrollinfinite() {

    let query = localStorage.getItem('wpSearch')
    let urlApi; 
    let Conponent; // High Order Components; 
    let $posts = document.getElementById('posts');

    if(!query) return false;

    window.addEventListener('scroll', async (e) => {
        let {  scrollTop, clientHeight, scrollHeight  } = document.documentElement;
        let hash = location.hash;

        if(scrollTop + clientHeight >= scrollHeight) {
            api.page += 1;
            //console.log('CARGAR MAS');
            //console.log(api.page);

            if (hash.includes('#/news')){
                urlApi = `${api.POSTS}&page=${api.page}`;
                Conponent = PostCard;
            }
            else if(hash.includes('#/search')){ 
                urlApi = `${api.SEARCH}${query}&page=${api.page}`;
                Conponent = ResultSearch;
            }
            else {
                return false;
            }

            await ajax ({
                url: urlApi,
                cbSucces: (posts) => {
                    let html = ``;
                    posts.forEach(e => { html += Conponent(e)});
                    $posts.insertAdjacentHTML('beforeend', html);
                }
            })
        }
    });
}