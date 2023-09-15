import { FormatDate } from '../helpers/FormatFecha.js';


export function PostCard(props) {
    let { id } = props;

    /*document.addEventListener("click", e => {
        if(!e.target.matches('.post-card a')) return false;
        localStorage.setItem('wpPostId', e.target.dataset.id);
    })*/

    return `
    <article class="post-card">
        <img src="${props.jetpack_featured_media_url ? props.jetpack_featured_media_url : 'app/assets/.jpg/noImagen.jpg' }" alt="${props.slug}"/>
        <h2>${props.title.rendered}</h2>
        <p>
            <time datetime="${props.date}">${FormatDate(props.date)}</time>
            <a href="#/${props.slug}" data-id="${id}" >Ver Publicación</a>
        </p>
    </article>
    `;
}