import { LitElement, html } from 'lit-element';
import "@ui5/webcomponents/dist/ShellBar";

class MyHeader extends LitElement {

  render() {
    return html`
    <ui5-shellbar id="shellbar" primary-title="My Cloud Playground" secondary-title="Home" show-product-switch
      show-notifications logo="./logo.png" @productSwitchClick="${this.handleClick}">
      <ui5-icon src="nav-back" slot="icon"></ui5-icon>
    </ui5-shellbar>
    
    <ui5-popover id="popover" placement-type="Bottom">
      <div class="popover-content">
        <ui5-list separators="None">
          <ui5-li icon="sap-icon://key-user-settings" @click="${this.openKeycloak}">Keycloak</ui5-li>
          <ui5-li icon="sap-icon://database" @click="${this.openQuarkus}">Quarkus App on Openshift</ui5-li>
          <ui5-li @click="${this.openTest}">Testseite</ui5-li>
          <ui5-li @click="${this.openFetch}">Fetch Testseite</ui5-li>
          <ui5-li icon="sap-icon://sys-help" @click="${this.openAbout}">About</ui5-li>
        </ui5-list>
      </div>
    </ui5-popover>
    `;
  }

  handleClick(e) {
    let popover = this.shadowRoot.getElementById('popover');
    popover.openBy(e.detail.targetRef);
  }

  openKeycloak(e) {
    window.location = "https://oidc-mam-23701.apps.us-west-2.online-starter.openshift.com"
  }

  openQuarkus(e) {
    window.location = "https://ssl-mam-23701.apps.us-west-2.online-starter.openshift.com"
  }

  openTest(e) {
    window.location = "./test.html"
  }

  openFetch(e) {
    window.location = "./fetch.html"
  }

  openAbout(e) {
    window.location = "./about.html"
  }
}

customElements.define('my-header', MyHeader);