import { html, css, LitElement } from "lit";

export class TablaCalidadAire extends LitElement {

    static get styles () {
        return css`

            :host {
                display:block;
                padding: 10px;
            }

            table {
                border: 1px solid;
                border-collapse: collapse;
                text-align: center;
                width: 100%;
            }

            tr, td {
                border: 1px solid;
                padding: 5px;
            }

            tr:hover {
                background-color: wheat;

            }

            form {
                border: 1px solid;
                margin: 10px;
                padding: 10px;
                text-align: center;
            }

            input {
                width: 500px;
            }

        `;
    }

    static get properties() {
        return {
            estaciones: { type: Array },
            _listStationTemp: { type: Array },
            value: { type: String },
            _url: { type: String }
        };
    }

    constructor() {
        super();
        this.estaciones = [];
        this._listStationTemp = [];
        this.value = '';
        this._url = 'https://api.datos.gob.mx/v1/calidadAire/';
        // Se carga la solicitud a la API
        this.getApiGob().then((data) => {
            let res = data.results;
            // Acceder a los valores de las key y devolverlos en un arreglo
            this.estaciones = Object.keys(res).map((key) => res[key].stations);
            // crear una copia de las estaciones con la petición ya hecha
            this._listStationTemp = this.estaciones;
        })
    }


    async getApiGob() {
        const resp = await fetch(this._url);
        return await resp.json();
    }

    _handleKey(event) {
        this.value = event.target.value; // Para 'guardar' los caracteres que se escriben en el input
        // Si el input está vacío sigue mostrando el arreglo original (this.estaciones)
        if (this.value.length === 0) this._listStationTemp = this.estaciones;
        // Se filtran los elementos que coincidan con los caracteres del nombre de la estacion 
        // que se ingresa en el input
        this._listStationTemp = this.estaciones.filter((station) => station[0].name.includes(this.value));
    }

    render() {
        return html`
            <form>
                <label for="busqueda">Filter: </label>
                <input type="search" @input="${this._handleKey}" placeholder="Buscar por nombre" id="busqueda" name="busqueda" />
            </form>

            <table>
                <tbody>
                    ${this._listStationTemp.map(
                        (estacion) => 
                        html`
                            <tr>
                                <td> ${estacion[0].source_id} </td>
                                <td> ${estacion[0].id} </td>
                                <td> ${estacion[0].name} </td>
                                <td> ${estacion[0].indexes[0].value} </td>
                                <td> ${estacion[0].location.lon} </td>
                                <td> ${estacion[0].location.lat} </td>
                            </tr>
                        `
                    )}
                </tbody>
            </table>
        `;
    }
}