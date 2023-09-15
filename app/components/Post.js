import { FormatDate } from "../helpers/FormatFecha.js";

export function Post(props) {
    let { content, title, date } = props[0];

    return `
    <section class="post-page">
        <aside>
            <h2>${title.rendered}</h2>
            <time datetime="${date}">${FormatDate(date)}</time>
        </aside>
        <hr>
        <article>${content.rendered}</article>
    </section>
    `;
}