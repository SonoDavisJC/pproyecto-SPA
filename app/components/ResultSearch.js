export function ResultSearch(props) {
    let { url, title, id } = props;
    let $styles = document.getElementById("dynamic-styles");

    $styles.innerHTML = `
    .result-post {
        width: 520px;
    }; 
    `;


    let slug = url.replace('https://sylvesterstallone.com/','');

    return `<article class="result-post">
    <h3 class="result-post-title">${title}</h3>
    <p class="result-post-link"><a href="#/${slug}" data-id="${id}">See post</a></p>
    </article>`;
}