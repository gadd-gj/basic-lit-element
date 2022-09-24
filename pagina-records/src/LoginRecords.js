import { html, css, LitElement } from "lit";
import './_users.js';
import { users } from "./_users.js";

export class LoginRecords extends LitElement {

    static get styles() {
        return css`
            :host {
                display: flex;
                margin: 25%;
            }

            form {
                text-align: center;
            }

            label, input, button {
                display: inline-block;
            }

        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <form>
                <fieldset>
                    <h1>Login</h1>
                    <label for="username">Username: </label>
                    <input type="text" placeholder="Username" id="username" name="username" />
                    <label for="password">Password: </label>
                    <input type="password" placeholder="Password" id="password" name="password" />
                    <button @click="${this._login}" id="btn-login"> Login </button>
                </fieldset>
            </form>
        `;
    }

    _login() {
        const user = this.shadowRoot.getElementById('username').value;
        const pass = this.shadowRoot.getElementById('password').value;

        let res = users.find(u => u.username === user && u.password === pass);
        if (res) {
            this.dispatchEvent(new CustomEvent('success', {
                detail: { login: true },
                bubbles: true, composed: true
            }));
        } else {
            alert('Crendenciales incorrectas');
        }

    }

}