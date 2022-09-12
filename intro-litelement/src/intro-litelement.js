import { LitElement, html } from "../node_modules/lit-element";

export class IntroLitElement extends LitElement {
    render () {
        return html`
            <p>Soy intro element</p>
        `;
    }
}

customElements.define('intro-litelement', IntroLitElement);