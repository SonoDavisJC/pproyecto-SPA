export function PostHome (props) {
    let $style = document.getElementById('dynamic-styles');

    $style.innerHTML = `
        .post-new {
            width: 66%;
            line-height: 1.5em;

        }

        .post-new a p:nth-child(2)   {
            margin-bottom: 1.5rem
        }

        .post-new a p:nth-child(4)   {
            margin-top: 1rem;
        }

        .post-new a {
            color: inherit;
            text-decoration: none;
            display: flex;
            flex-direction: column;

        }

        .post-new a > p, .post-new a iframe {
            width: 100%;
            color: inherit;
        }`;

    return `<aside class="post-new">
    <a href="#/${props.slug}" >
    <h4>${props.title.rendered}</h2>
    ${props.content.rendered}
    </a>
    </aside/>`;

}