import { html, css, LitElement } from 'lit';

export class TemplateBind extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--template-bind-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      prop1: { type: String },
      prop2: { type: String },
      prop3: { type: Boolean },
      prop4: { type: String },
      active: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.prop1 = 'Text bindindg';
    this.prop2 = 'mydiv';
    this.prop3 = true;
    this.prop4 = 'valor';
    this.active = true;
  }


  render() {
    return html`
      <!-- text binding  -->
      <div>${this.prop1}</div>
      
      <!-- attribute binding -->
      <div id="${this.prop2}"> attribute binding</div>
      
      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.prop3}" />
      </div>

      <div>
        boolean attribute binding
        <input type="text" .value="${this.prop4}" />
      </div>

      <!-- porperty binding -->
      <div>
        <button @click="${this.clickHandler}"> click</button>
      </div>

      <p> <input type="checkbox" @change="${this.doChange}" > </p>

    `;
  }

  clickHandler(e) {
    console.log(e.target);
  }

  doChange(e) {
    this.active = e.target.checked;
    console.log(e.target)
  }

}
