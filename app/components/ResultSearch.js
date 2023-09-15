export function ResultSearch(props) {
    let { url, title, id } = props;



    let slug = url.replace('https://sylvesterstallone.com/','');

    return `<article class="post-card">
    <h3>${title}</h3>
    <p><a href="#/${slug}" data-id="${id}">Ver publicación</a></p>
    </article>`;
}