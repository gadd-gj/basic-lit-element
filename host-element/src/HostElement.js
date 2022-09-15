import { html, css, LitElement } from 'lit';

export class HostElement extends LitElement {
  static get styles() {
    return css`
      :host { // selecciona el host
        display: block;
        background-color: azure;
      }

      // selecciona el elemento host si esta en hidden
      :host([hidden]) {
        display: none;
      }

      :host(.blue) {
        background-color: aliceblue;
        color: blue;
      }

      p {
        font-family: fantasy;
      }

    `;
  }




  render() {
    return html`
        <p>ahslihaoiapvjaroivhoauehvoeilvnauoivjnaisldjfnslvajjl</p>
    `;
  }
}
