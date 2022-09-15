import { html, LitElement } from 'lit';

export class CustomHaschanged extends LitElement {

  static get properties() {
    return {
      myProp: {
        type: Number,

        hasChanged(newVal, oldVal) {
          if (newVal > oldVal) {
            console.log(`${newVal} > ${oldVal}. has changed: true `);
            return true;
          } else {
            console.log(`${newVal} <= ${oldVal}. has changed: false `);
            return false;
          }
        }
      }
    };
  }

  constructor() {
    super();
    this.myProp = 1;
  }


  render() {
    return html`
      <p>myProp: ${this.myProp}</p>
      <button @click="${this.getNewVal}" >get newVal</button>
    `;
  }

  updated() {
    console.log('updated');
  }

  getNewVal() {
    let newVal = Math.floor(Math.random() * 10);
    this.myProp = newVal;
  }

}
