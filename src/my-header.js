import '@ui5/webcomponents/dist/ShellBar';
import {html, LitElement} from 'lit-element';

/**
 * Header Element
 */
class MyHeader extends LitElement {
  // eslint-disable-next-line require-jsdoc
  static get properties() {
    return {
      pageTitle: {type: String},
      showBackIcon: {type: Boolean},
    };
  }

  // eslint-disable-next-line require-jsdoc
  constructor() {
    super();
    this.pageTitle = 'PageTitle';
    this.showBackIcon = false;
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return html`
    <ui5-shellbar id="shellbar" 
      primary-title="My Cloud Playground" 
      secondary-title="${this.pageTitle}" 
      show-product-switch
      show-notifications logo="./logo.png" 
      @productSwitchClick="${this.handleClick}" 
      @logoClick="${this.goHome}">
      ${this.showBackIcon ? html`
        <ui5-icon src="nav-back" slot="icon"
           @click="${this.goHome}"></ui5-icon>` : html``}
    </ui5-shellbar>
    
    <ui5-popover id="popover" placement-type="Bottom">
      <div class="popover-content">
        <ui5-list separators="None">
          <ui5-li icon="sap-icon://key-user-settings" @click="${this.openKeycloak}">Keycloak</ui5-li>
          <ui5-li icon="sap-icon://database" @click="${this.openQuarkus}">Quarkus App on Openshift</ui5-li>
          <ui5-li @click="${this.openTest}">Testseite</ui5-li>
          <ui5-li @click="${this.openFetch}">Fetch Testseite</ui5-li>
          <ui5-li icon="sap-icon://sys-help" @click="${this.openAbout}">About</ui5-li>
          <ui5-li icon="sap-icon://sys-help" @click="${this.openGithub}">Github Pages</ui5-li>
        </ui5-list>
      </div>
    </ui5-popover>
    `;
  }

  /**
   * lorem ipsum
   * @param {*} e
   */
  handleClick(e) {
    const popover = this.shadowRoot.getElementById('popover');
    popover.openBy(e.detail.targetRef);
  }

  /**
  * foo
  * @param {*} e
  */
  goHome() {
    window.location = './index.html';
  }

  /**
   * foo
   * @param {*} e
   */
  openKeycloak() {
    window.location = 'https://oidc-mam-23701.apps.us-west-2.online-starter.openshift.com';
  }

  /**
   * foo
   * @param {*} e
   */
  openQuarkus() {
    window.location = 'https://ssl-mam-23701.apps.us-west-2.online-starter.openshift.com';
  }

  /**
   * foo
   * @param {*} e
   */
  openTest() {
    window.location = './test.html';
  }

  /**
   * foo
   * @param {*} e
   */
  openFetch() {
    window.location = './fetch.html';
  }

  /**
   * foo
   * @param {*} e
   */
  openAbout() {
    window.location = './about.html';
  }

  /**
   * foo
   * @param {*} e
   */
  openGithub() {
    window.location = 'https://moewes.github.io/mycloudplayground';
  }
}

customElements.define('my-header', MyHeader);
