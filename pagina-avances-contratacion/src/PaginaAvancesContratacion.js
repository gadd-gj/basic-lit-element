import { html, css, LitElement } from 'lit';

export class PaginaAvancesContratacion extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--pagina-avances-contratacion-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      listRsrc: { type: Array },
      _listTempRsrc: { type: Array },
      _url: { type: String }
    };
  }

  constructor() {
    super();
    this.listRsrc = [];
    this._listTempRsrc = [];
    this._url = 'https://datos.gob.mx/busca/api/3/action/package_search?q=naicm';
    this._getApiRsrc().then(response => {
      console.log(response);
    })
  }

  async _getApiRsrc() {
    const response = await fetch(this._url);
    return await response.json();
  }


  render() {
    return html`

    `;
  }
}
