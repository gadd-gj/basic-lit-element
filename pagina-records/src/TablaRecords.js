import { html, css, LitElement } from "lit";

export class TablaRecords extends LitElement {

    static get styles() {
        return css`
            :host{
                display: block;
                width:100%;
            }

            form {
                background-color: steelblue;
                border: 1px solid;
                color: #fff;
                margin: 20px;
                padding: 10px;
                text-align: center;
            }

            input {
                box-sizing: border-box;
                border: none;
                width: 500px;
            }

            table {
                border: 1px solid;
                border-collapse: collapse;
                text-align: center;
            }

            th, tr, td {
                border: 1px solid black;
                border-collapse: collapse;
            }

            th {
                background-color: #0099b4;
                color: #fff
            }

            tr:hover {
                background-color: cyan;
            }
        `;
    }


    static get properties() {
        return {
            value: { type: String },
            _url: { type: String },
            listRcrds: { type: Array },
            _listTempRcrds: { type: Array }
        };
    }

    constructor() {
        super();
        this.value = '';
        this._url = 'https://api.datos.gob.mx/v2/Records';
        this.listRcrds = [];
        this._listTempRcrds = [];
        this._getApiRcrds().then(res => {
            let data = res.results;
            this.listRcrds = Object.keys(data).map(key => data[key].releases);
            this._listTempRcrds = this.listRcrds;
        });
    }


    async _getApiRcrds() {
        const response = await fetch(this._url);
        return response.json();
    }

    _handleKey(event) {
        this.value = event.target.value;
        if (this.value.length === 0) this._listTempRcrds = this.listRcrds;
        this._listTempRcrds = this.listRcrds.filter((record) =>
            record[0].planning.budget.budgetBreakdown[0].description.includes(this.value)
        );
    }

    render() {
        return html`

        <form>
            <label for="busqueda">Buscar: </label>
            <input id="busqueda" @input="${this._handleKey}" name="busqueda" type="search" placeholder="Buscar por descripción" />
        </form>

        <table>
          <thead>
              <tr>
                  <th>id</th>
                  <th>Fecha</th>
                  <th>Publicado por</th>
                  <th>Descripción</th>
                  <th>url</th>
                  <th>Tipo de contrato</th>
              </tr>
          </thead>
          <tbody>
            ${this._listTempRcrds.map(record => html`
              <tr>
                <td>${record[0].id} </td>
                <td> <time> ${record[0].date} </time> </td>
                <td>
                  ${record[0].publisher.name} 
                  <a href="${record[0].publisher.uri}"> ${record[0].publisher.uri}</a>
                </td>
                <td>${record[0].planning.budget.budgetBreakdown[0].description} </td>
                <td>
                    <a href="${record[0].planning.budget.budgetBreakdown[0].url}" >
                        ${record[0].planning.budget.budgetBreakdown[0].url}
                    </a>
                </td>
                <td>${record[0].contracts[0].contractDetails.contractType} </td>

              </tr>
            
            ` )}
          </tbody>
        </table>
        `;
    }

}