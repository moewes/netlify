import {LitElement} from 'lit-element';
import './my-header-panel';

/**
 * Fetch Element
 */
class OdxpView extends LitElement {
  // eslint-disable-next-line require-jsdoc
  static get properties() {
    return {
      viewName: {type: String},
    };
  }

  // eslint-disable-next-line require-jsdoc
  constructor() {
    super();
    this.viewName = 'nothing';
  }

  // eslint-disable-next-line require-jsdoc
  firstUpdated() {
    const tag = document.createElement('div');
    tag.innerHTML = this.viewName;
    this.shadowRoot.appendChild(tag);
    const header = document.createElement('my-header');
    this.shadowRoot.appendChild(header);
  }
}

customElements.define('odxp-view', OdxpView);
