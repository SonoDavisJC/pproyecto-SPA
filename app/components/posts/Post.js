import { FormatDate } from "../../helpers/FormatFecha.js";

export function Post(props) {
    let { content, title, date, jetpack_featured_media_url
    } = props[0];

    return `
    <section class="page-post">
        <figure>
            <img src="${jetpack_featured_media_url}" class="page-post-img"/>
        </figure>
        <div>
            <aside class="page-post-title">
                <h2>${title.rendered}</h2>
                <time datetime="${date}" class="page-post-date">Create on ${FormatDate(date)}</time>
            </aside>
            <article  class="page-post-content">${content.rendered}</article>
        </div>
    </section>
    `;
}