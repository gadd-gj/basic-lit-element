import { html, css, LitElement } from 'lit';

export class InputSample extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--input-sample-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      miDato: { type: String },
      
    };
  }

  constructor() {
    super();
    this.miDato = 'Valor de inicialización';
  }



  render() {
    return html`
     <p>Soy my element</p>
     <my-text-input .value=${this.miDato} 
     @change="${this.inputCambiado}"></my-text-input>

    <p>El dato descrito es ${this.miDato}</p>
    <button  @click=${this.resetTexto}>Borrar Texto</button>
    `;
  }

  inputCambiado(e) {
    this.miDato = e.detail;
  }

  resetTexto() {
    this.miDato = '';
  }
  
}
