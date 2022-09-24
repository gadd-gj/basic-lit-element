import { html, css, LitElement } from 'lit';

export class CellsBeca extends LitElement {

  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array },
      anotherArray: { type: Array }
    };
  }

  constructor() {
    super();
    this.message = 'Componente my-element';
    this.myBool = true;
    this.myArray = ['Soy', 'un', 'array', 'de', 'prueba'];
    this.anotherArray = ['Soy', 'otro', 'array', 'de', 'prueba'];
  }

  render() {
    return html`
      <p>${this.message}</p>

      <ul>${this.anotherArray.map(item => html`<li>${item}</li>`)}</ul>

      ${this.myBool ? 
      html `<p>Renderizado de HTML si myBool es true</p>`  : 
      html `<p>Renderizado de HTML si myBool es false</p>` 
    }

    `;
  }
}
