import { html, css, LitElement } from 'lit';
import '../e-contact.js'

export class EContactList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--e-contact-text-color, #000);
      }
    `;
  }

  static get properties () {
    return {
        contactos: {
            type: Array
        }
    }
  }

  constructor() {
    super();
   this.contactos = [
        {
            nombre: 'Gadd',
            email: 'gadd@mail.com'
        },
        {
            nombre: 'hola',
            email: 'hola@mail.com'
        },
        {
            nombre: 'Karla',
            email: 'karla@mail.com'
        }
   ]
  }





  render() {
    return html`
      <div>
        ${this.contactos.map(contacto => 
            html`<e-contact
            nombre="${contacto.nombre}"
            email="${contacto.email}"></e-contact>` 
            )}
      </div>
    `;
  }


}
