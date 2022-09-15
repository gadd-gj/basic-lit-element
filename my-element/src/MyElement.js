import { html, css, LitElement } from 'lit';

export class MyElement extends LitElement {
	static get styles() {
		return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--my-element-text-color, #000);
      }
    `;
	}

	static get properties() {
		return {
			prop1: { type: String, reflect: true },
			prop2: { type: Number, reflect: true },
			prop3: { type: Boolean, reflect: true },
			prop4: { type: Array, reflect: true },
			prop5: { type: Object, reflect: true }
		};
	}

	constructor() {
		super();
		this.prop1 = '';
		this.prop2 = 0;
		this.prop3 = false;
		this.prop4 = [];
		this.prop5 = {};
	}



	render() {
		return html`
			<p> prop1 ${this.prop1} </p>
			<p> prop2 ${this.prop2} </p>
			<p> prop3 ${this.prop3} </p>


			<p> prop4 ${this.prop4.map((item) =>
			html`<span> [ ${item} ]: ${item} &nbsp; </span>`
		)} 
			</p>
			<p> prop5 ${Object.keys(this.prop5).map(item =>
			html`<span> ${item}: ${this.prop5[item]} &nbsp; </span>`
		)}
			</p>
			<button @click="${this.changeProperties}"> change properties </button>
			<button @click="${this.changeAttributes}"> change attributes </button>
			`;
	}

	changeAttributes() {
		let randy = Math.floor(Math.random() * 10);
		let myBool = this.getAttribute('prop3');

		this.setAttribute('prop1', randy.toString());
		this.setAttribute('prop2', randy.toString());
		this.setAttribute('prop3', myBool ? '' : null);
		this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
		this.setAttribute('prop5', JSON.stringify(
			Object.assign({}, this.prop5, { [randy]: randy })
		));

		// Solicitar una actualización que se procesa de forma asincrona 
		this.requestUpdate();
	}

	changeProperties() {
		let randy = Math.floor(Math.random() * 10);
		let myBool = this.prop3;

		this.prop1 = randy.toString();
		this.prop2 = randy;
		this.prop3 = !myBool;
		this.prop4 = [...this.prop4, randy];
		this.prop5 = Object.assign({}, this.prop5, { [randy]: randy });
	}


	// Ciclo de vida por default desde el componente web
	attributeChangedCallback(name, oldVal, newVal) {
		console.log('attribute change: ', name, newVal);
		super.attributeChangedCallback(name, oldVal, newVal);
	}

	updated(changedProperties) {
		changedProperties.forEach( (oldValue, propName) => {
			console.log(`${propName} changed. oldValue: ${oldValue}`)}
		);
	}
}
