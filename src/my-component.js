import { LitElement, html } from 'lit-element';

class MyComponent extends LitElement {
  render() {
    return html`
      <p>Hello world! automatic :-)</p>
    `;
  }
}

customElements.define('my-component', MyComponent);