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
          <ui5-li icon="sap-icon://sys-find">App Finder</ui5-li>
          <ui5-li icon="sap-icon://settings" @click="${this.popoverClick}">Settings</ui5-li>
          <ui5-li icon="sap-icon://edit">Edit Home Page</ui5-li>
          <ui5-li icon="sap-icon://sys-help" @click="${this.openAbout}">Help</ui5-li>
          <ui5-li icon="sap-icon://log">Sign out</ui5-li>
        </ui5-list>
      </div>
    </ui5-popover>
    `;
  }

  popoverClick(e) {
    console.log("Halo");
    window.dispatchEvent(
      new CustomEvent('vaadin-router-go', { detail: { pathname: '/fetch' } }));
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

  openAbout(e) {
    window.location = "./test.html"
  }
}

customElements.define('my-header', MyHeader);