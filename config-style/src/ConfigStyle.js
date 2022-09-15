import { html, css, LitElement } from 'lit';

export class ConfigStyle extends LitElement {
  static get styles() {
    return css`
      :host {
        color: var(--themColor, yellowgreen);
      }
    `;
  }



  render() {
    return html`
      <section>
        didjalidaiwejaipwejpaew 
      </section>
    `;
  }
}
