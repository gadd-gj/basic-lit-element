import { html, css, LitElement } from 'lit';

export class BecaCells extends LitElement {
  
  static get styles() {
    return css`
      p {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        color: greenyellow;
        background-color: black;
      }
      .fuchsia {
        color: fuchsia;
      }
      .cyan {
        color: cyan;
      }
      .amarillo {
        color: yellow;
      }
    `;
  }


  static get properties() {
    return {
      message: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean },
      myString: { type: String }
    };
  }

  constructor() {
    super();
    this.myString = 'amarillo';
    this.myBool = false;
  }



  render() {
    return html`
      <p>Soy un texto</p>
      <p class="${this.myBool?'fuchsia':'cyan'}">Soy texto dos</p>
      <p class="${this.myString}">Soy texto tres</p>
      <button @click="${this.clickHandler}">Click</button>
    `;
  }

  clickHandler(event) {
    this.myBool = !this.myBool;
  }

}
