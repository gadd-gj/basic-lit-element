import { html, css, LitElement } from 'lit';

export class BotonClics extends LitElement {

  static get properties() {
    return {
      hidden: { type: Boolean },
      state: { type: Number },
    };
  }

  constructor() {
    super();
    this.hidden = false;
    this.state = 0;
  }

  handleClick(e) {
    this.hidden = !this.hidden;
    this.state += (1 + this.hidden);
    console.log(this.state);
  }

  handleClock(e) {
    this.hidden = !this.hidden;
    this.state += (2 + this.hidden);
    console.log(this.state);
  }

  render() {
    return html`
      ${this.hidden ? 
      html`<button @click="${this.handleClick}">Cambiar de botón (click)</button>`:
      html`<button @click="${this.handleClock}">Cambiar de botón (clock)</button>`}
    `;
  }
}
