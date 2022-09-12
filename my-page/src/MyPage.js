import { html, css, LitElement } from 'lit';
import './MyHeader.js';
import './MyArticle.js';
import './MyFooter.js';
export class MyPage extends LitElement {
	static get styles() {
		return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--my-page-text-color, #000);
      }
    `;
	}


	render() {
		return html`
			<my-header></my-header>
			<my-article></my-article>
			<my-footer></my-footer>
		`;
	}
}
