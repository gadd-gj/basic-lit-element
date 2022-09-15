import { html, css, LitElement } from 'lit';

export class MyConverter extends LitElement {

  static get properties() {
    return {
      myProp: {
        reflect: true,
        converter: {
          toAttribute(value) {
            console.log('myProp\'s to Attribute. ');
            console.log('Processing: ', value, typeof (value));
            let retVal = String(value);
            console.log('Returning: ', retVal, typeof (retVal));
            return retVal;
          },

          fromAttribute(value) {
            console.log('myProp\'s to fromAttribute. ');
            console.log('Processing: ', value, typeof (value));
            let retVal = Number(value);
            console.log('Returning: ', retVal, typeof (retVal));
            return retVal;
          }
        }
      },

      theProp: {
        converter: {
          converter(value) {
            console.log('myProp\'s to Attribute. ');
            console.log('Processing: ', value, typeof (value));
            let retVal = String(value);
            console.log('Returning:', retVal, typeof (retVal));
            return retVal;
          }
        }
      }
    };
  }

  constructor() {
    super();
    this.myProp = 'myProp';
    this.theProp = 'theProp';
  }


  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
  }


  render() {
    return html`
      <p>myProp: ${this.myProp} tipo:${typeof(this.myProp)}</p>
      <p>theProp: ${this.theProp} tipo:${typeof(this.theProp)}</p>

      <button @click="${this.changesProperties}">changesProperties</button>
      <button @click="${this.changesAttribute}">changesAttributes</button>
    `;
  }

  changesAttribute() {
    let randomsString = Math.floor(Math.random() * 100).toString();
    this.setAttribute('myprop', 'myprop ' + randomsString);
    this.setAttribute('theprop', 'theprop ' + randomsString);
    this.requestUpdate();
  }

  changesProperties() {
    let randomsString = Math.floor(Math.random() * 100).toString();
    this.myProp='myProp ' + randomsString; 
    this.theProp='theProp ' + randomsString; 
  }

}
