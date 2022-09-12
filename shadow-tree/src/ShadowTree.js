import { html, css, LitElement } from 'lit';

/**
 * 
 * SHADOW TREE
 * 
 */

export class ShadowTree extends LitElement {
  static get styles() {
    return css`
      * {
        color: red;
      }

      p {
        font-family: sans-serif;
      }

      .myclass {
        margin: 100px;
      }

      #main {
        padding: 30px;
      }

      h1 {
        font-size: 4em;
      }
    `;
  }


  render() {
    return html`
      <p>Lorem ipson ksnfklnalnfliaenfla</p>
      <p class="myclass"> Parrafo 1</p>
      <p class="main"> Parrafo 2</p>
      <h1> T I T U L O</h1>
    `;
  }
}
