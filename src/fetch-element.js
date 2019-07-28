import {LitElement, html} from 'lit-element';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents/dist/Table';
import {URL} from './config';

/**
 * Fetch Element
 */
class FetchingData extends LitElement {
  // eslint-disable-next-line require-jsdoc
  static get properties() {
    return {
      response: {type: Array},
    };
  }

  // eslint-disable-next-line require-jsdoc
  constructor() {
    super();
    this.response = [];
    this.url = URL + '/people';
    // this.url ='https://ssl-mam-23701.apps.us-west-2.online-starter.openshift.com/people';
    // this.url = 'http://localhost:8080/people';
  }

  /**
   * //TODO
   */
  firstUpdated() {
    fetch(this.url)
        .then((r) => r.json())
        .then((r) => {
          this.response = r;
        });
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {response} = this;
    return html`
        <p>Fetch</p>
        <div>
          <ui5-button @click="${this.initTestData}">Init Test Data</ui5-button>
          <ui5-button @click="${this.clearData}">Clear Data</ui5-button>
        </div>
        <div>
          <ui5-table no-data-text="No Data" show-no-data>
            <ui5-table-column slot="columns" width="12em">
              <span style="line-height: 1.4rem">Name</span>
            </ui5-table-column>
            <ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
              <span style="line-height: 1.4rem">Vorname</span>
            </ui5-table-column>
            ${response.map((item) => html`
            <ui5-table-row>
              <ui5-table-cell>${item.name}</ui5-table-cell>
              <ui5-table-cell>${item.vorname}</ui5-table-cell>
            </ui5-table-row>>
            `)}
          </ui5-table>
        </div>
    
      `;
  }

  /**
   * //TODO
   */
  initTestData() {
    fetch(this.url + '/initWithTestData', {method: 'post'})
        .then((r) => r.status)
        .then(() => {
          this.firstUpdated();
        });
  }

  /**
   * //TODO
   */
  clearData() {
    fetch(this.url + '/clearall', {method: 'post'})
        .then((r) => r.status)
        .then(() => {
          this.firstUpdated();
        });
  }
}

customElements.define('fetch-element', FetchingData);
