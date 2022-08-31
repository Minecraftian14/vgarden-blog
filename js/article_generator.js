const TEMPLATE = `
    <article class="brick">
        <div class="image"><img src="{0}" alt=""/></div>
        <a href="{1}">
            <div class="text">
                <div class="date">{2}</div>
                <div class="title"><h1>{3}</h1></div>
                <div class="desc"><p>{4}</p></div>
                <div class="tags">{5}</div>
            </div>
        </a>
    </article>
`;

class ArticleCard extends HTMLElement {

    get title() {
        return this.hasAttribute('title');
    }

    get href() {
        return this.hasAttribute('href');
    }

    get date() {
        return this.hasAttribute('date');
    }

    get image() {
        return this.hasAttribute('image');
    }

    get tags() {
        return this.hasAttribute('tags');
    }

    set title(val) {
        if (val) this.setAttribute('title', val);
        else this.removeAttribute('title');
    }

    set href(val) {
        if (val) this.setAttribute('href', val);
        else this.removeAttribute('href');
    }

    set date(val) {
        if (val) this.setAttribute('date', val);
        else this.removeAttribute('date');
    }

    set image(val) {
        if (val) this.setAttribute('image', val);
        else this.removeAttribute('image');
    }

    set tags(val) {
        if (val) this.setAttribute('tags', val);
        else this.removeAttribute('tags');
    }

    constructor() {
        super();

        this.innerHTML = String.format(TEMPLATE,
            this.getAttribute('image'),
            this.getAttribute('href'),
            this.getAttribute('date'),
            this.getAttribute('title'),
            this.innerHTML,
            this.getAttribute('tags'));
    }
}

window.customElements.define('article-card', ArticleCard);
