import { html, css, LitElement } from 'lit';

export class LitelementTemplates extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--litelement-openwc-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },

      myString: { type: String },
      myArrray: { type: Array },
      myBoolean: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;

    this.myString = 'Hello world';
    this.myArrray = ['an', 'array', 'of', 'test', 'data'];
    this.myBoolean = true;

  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <hr/>
      <p>array loops and conditionals</p>
      <p>${this.myString}</p>
      <ul>
        ${this.myArrray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBoolean ?
        html`<p>Render some HTML myBoolean is true</p>` :
        html`<p>Render some other HTML if myBoolean is false</p>`}
      `;
  }
}
