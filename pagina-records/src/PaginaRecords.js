import { html, css, LitElement } from 'lit';
import '../tabla-records.js';
import '../login-records.js';

export class PaginaRecords extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pagina-records-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      _isLogin: { type: Boolean }
    };
  }

  constructor() {
    super();
    this._isLogin = false;
  }


  render() {
    return html`
      ${this._isLogin ?
        html`<tabla-record></tabla-record>`:
        html`<login-records @success="${this._hiddenLogin}"></login-records>`
      }        
    `;
  }

  _hiddenLogin() {
    this._isLogin = !this._isLogin;
  }
}
