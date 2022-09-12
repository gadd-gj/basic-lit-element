import { LitElement, html } from "lit-element";

export class TextInput extends LitElement {
    static get properties() {
        return {
            value: { type: String }
        };
    }

    render () {
        return html`
            <p>
                <input type="text" .value="${this.value}" @input="${this.inputeChange}">
            </p>
        `;
    }

    inputeChange(e) {
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: this.value
        }));
    }

}