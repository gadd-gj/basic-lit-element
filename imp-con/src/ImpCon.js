import { html, css, LitElement } from 'lit';

export class ImpCon extends LitElement {
  

  static get properties() {
    return {
      numbers: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    this.numbers = [1,2,3,4,5];
  }

  handleClick(e) {
    console.log('Origin: ', e.composedPath()[0]);
  }


  render() {
    return html`
      ${this.numbers.map(n => html`
      <button  id="button-${n}" @click=${this.handleClick}>${n}</button>
      `)}
    `;
  }
}
