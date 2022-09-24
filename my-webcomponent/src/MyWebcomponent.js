import { html, LitElement } from 'lit';

export class MyWebcomponent extends LitElement {

  static get properties() {
    return {
      object: { type: Object }
    };
  }

  constructor() {
    super();
    this.object = { myProp: 'Initial value' };
  }

  handleClick() {
    this.object.myProp = 'New Value';
  }

  render() {
    return html`
      <h2> ${this.object.myProp} </h2>
      <button @click=${this.handleClick}> Click me!</button>
    `;
  }

  updated() {
    console.log('Actualizado: ' + this.object.myProp);
  }
}
