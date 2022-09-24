import { html, css, LitElement } from 'lit';

export class LifeCycle extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'No title';
    this.icon  = undefined;
  }



  render() {
    return html`
      <h1> Title is: ${this.title}</h1>
      <h3>Icon is: ${this.icon} </h3>
    `;
  }

  //private method 
  // dont use. dont override
  // Showing here just for educational purpose only   
  _enqueueUpdate() {
    console.log('_enqueueUpdate Called');
    const result = super._enqueueUpdate();
    console.log('_enqueueUpdate returns ' + result);
    return result;
  }

  //private method 
  // dont use. dont override
  // Showing here just for educational purpose only 
  _requestUpdate(propertyName, oldValue) {
    console.log('_requestUpdated called with args: ' + 
    propertyName +', ' + oldValue
    );
    const result = super._requestUpdate(propertyName, oldValue);
    return result;
  }

  performUpdate() {
    console.log('performUpdate starts');
    const result = super.performUpdate();
    console.log('performUpdate ends');
    console.log('----------------------------------');
    return result;
  }

  shouldUpdate(args) {
    console.log('  shouldUpdate called with args ' + JSON.stringify(args));
    const result = super.shouldUpdate(args);
    console.log('  shouldUpdate returns: ' + result);
    return result;
  }

  update(args) {
    console.log(' update called with args: ' + JSON.stringify(args));
    const result = super.update(args);
    console.log('  update returns:  ' + result);
    return result;
  }

  firstUpdated(args) {
    console.log(' firstUpdate called with args: ' + JSON.stringify(args));
    const result = super.firstUpdated(args);
    console.log('  firstUpdate returns:  ' + result);
    return result; 
  }

  update(args) {
    console.log(' update called with args: ' + JSON.stringify(args));
    const result = super.update(args);
    console.log('  update returns:  ' + result);
    return result;
  }

}
