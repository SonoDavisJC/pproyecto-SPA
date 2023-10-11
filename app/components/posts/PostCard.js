import { FormatDate } from '../../helpers/FormatFecha.js';


export function PostCard(props,) {
    let { id } = props;

    /*document.addEventListener("click", e => {
        if(!e.target.matches('.post-card a')) return false;
        localStorage.setItem('wpPostId', e.target.dataset.id);
    })*/

    return `
    <article class="post-content">
    <a href="#/${props.slug}" data-id="${id}" class="post" >
        <img src="${props.jetpack_featured_media_url 
            ? props.jetpack_featured_media_url 
            : 'app/assets/.jpg/noImagen.jpg' }" alt="${props.slug}" class="post-image"/>
        <h3 class="post-title">${props.title.rendered}</h3>
        <p class="post-date">
            <time datetime="${props.date}">Published on ${FormatDate(props.date)}</time>
        </p>
        </a>
    </article> `
}