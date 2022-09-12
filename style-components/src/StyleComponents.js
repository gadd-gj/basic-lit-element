import { html, css, LitElement } from 'lit';

export class StyleComponents extends LitElement {
  static get styles() {
    return css`
      button {
        width: 300px;
        font-style: italic;
      }
    `;
  }

 

  render() {
    return html`
      <button>click</button>
    `;
  }
}
