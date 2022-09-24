import { html, css, LitElement } from 'lit';

export class TableGadd extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--form-gadd-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      _contenido: { type: Array },
      tabla: { type: String }
    };
  }

  constructor() {
    super();
    this._contenido = '';
  }

  stations () {
    fetch('https://api.datos.gob.mx/v1/calidadAire')
    .then(response => response.json())
    .then(response => console.log(response))
  }

  

  render() {
    return html`
      ${this.stations()}
      <table>
        <thead>
          
        </thead>
      </table>
    `;
  }



}
