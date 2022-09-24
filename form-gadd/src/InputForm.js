import { html, css, LitElement } from "lit";

export class InputForm extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                padding: 25px;
            }
        `;
    }


    static get properties() {
        return {
            msg: { type: String }
        }
    }


    constructor() {
        super();
        this.msg = '';
    }

}