import { html, css, LitElement } from 'lit';
import '../login-calidad-aire.js'
import '../tabla-calidad-aire.js'
export class PaginaCalidadAire extends LitElement {


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
      html`<tabla-calidad-aire></tabla-calidad-aire>` :
      html`<login-calidad-aire @success="${this._hiddenLogin}"></login-calidad-aire>`}
    `;
  }


  _hiddenLogin() {
    this._isLogin = !this._isLogin;
  }

}
