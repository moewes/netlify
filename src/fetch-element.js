import { LitElement, html } from 'lit-element';

class FetchingData extends LitElement {
  static get properties() {
    return {
      response: { type: Array }
    }
  }

  constructor() {
    super();
    this.response = [];
  }

  firstUpdated() {
    fetch('http://http://my-repo-mam-23701.apps.us-west-2.online-starter.openshift.com/people')
      .then((r) => r.json())
      .then((r) => {
        this.response = r;
      });
  }

  render() {
    const { response } = this;
    return html`
        <ul>
          ${response.map(item => html`
            <li>${item.name}</li>
          `)}
        </ul>
      `;
  }
}

customElements.define('fetch-element', FetchingData);