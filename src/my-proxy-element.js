import {LitElement, html} from 'lit-element';

/**
 * test for communication between elements
 */
class MyProxyElement extends LitElement {
  // eslint-disable-next-line require-jsdoc
  static get properties() {
    return {pageTitle: {type: String},
      showBackIcon: {type: Boolean},
    };
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return html`
    <div>ich bin ein Proxy-Element</div>
      `;
  }

  // eslint-disable-next-line require-jsdoc
  tuWas() {
    alert('Hallo View');
  }

  // eslint-disable-next-line require-jsdoc
  getAll() {

  }
}

customElements.define('my-proxy-element', MyProxyElement);
