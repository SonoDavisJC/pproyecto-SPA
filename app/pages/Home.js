import { HeroImage } from "../components/HeroImage.js"
import { PostHome } from "../components/PostHome.js"

// Home del sitio web

export default function Home(props) {

    return `<section class="section-home">
        ${HeroImage()}
        <article class="section-article">
            <h2 class="title">Welcome to the official Sylvester Stallone website
            </h2>
            <div class="article">
                <aside class="comments" style="width: 33%">
                    <h4>Noticias</h4>
                    <p>Obten lo ultimo</p>
                </aside>
                ${PostHome(props)}
            </div>
        </article>
    </section>`;
}