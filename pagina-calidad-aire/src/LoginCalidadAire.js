import { html, css, LitElement } from "lit";
import { users } from "./_user.js";
export class LoginCalidadAire extends LitElement {

    static get styles() {
        return css`

            :host {
                border: 1px solid;
                background-color: cyan;
                display: block;
            }

            form {
                padding: 10px;
                text-align: center;
            }

            input {
                margin: 30px;
                width: 300px;
            }

            button {
                background-color: #b2c01337;
                display: inline-block;
                text-align: center;
                width: 10%;
            }
        
        `;
    }


    render() {
        return html`
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="Username" id="username" name="username" />
                <input type="password" placeholder="Password" id="password" name="password" />
                <button @click="${this._login}" id="btn-login"> Login </button>
            </form>
        `;
    }

    _login(event) {

        const user = this.shadowRoot.getElementById('username').value;
        const pass = this.shadowRoot.getElementById('password').value;

        let res = users.find(u => u.username === user && u.password === pass);
        if (res) {
            this.dispatchEvent(new CustomEvent('success'), {
                detail: { login: true },
                bubbles: true, composed: true
            })
        } else {
            alert('Datos invalidos');
        }

    }


}
