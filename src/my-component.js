import { LitElement, html } from 'lit-element';
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/ShellBar";

class MyComponent extends LitElement {

  render() {
    return html`
    <ui5-shellbar id="shellbar" primary-title="Corporate Portal" 
      secondary-title="secondary title" 
      show-product-switch
      show-notifications 
      @productSwitchClick="${this.handleClick}">
      <ui5-li slot="menuItems">Application 1</ui5-li>
      <ui5-li slot="menuItems">Application 2</ui5-li>
      <ui5-li slot="menuItems">Application 3</ui5-li>
      <ui5-li slot="menuItems">Application 4</ui5-li>
      <ui5-li slot="menuItems">Application 5</ui5-li>
    </ui5-shellbar>

    <ui5-panel>
    <ui5-title level="H1">Title level 1</ui5-title>
    <p>Hello world! automatic :-)</p>
    <ui5-button>Hello world!</ui5-button>
    </ui5-panel>
    
    
    <ui5-popover id="popover" placement-type="Bottom">
      <div class="popover-header">
        <ui5-title style="padding: 0.25rem 1rem 0rem 1rem">An Kimura</ui5-title>
      </div>
      <div class="popover-content">
        <ui5-list separators="None">
          <ui5-li icon="sap-icon://sys-find">App Finder</ui5-li>
          <ui5-li icon="sap-icon://settings" @click="${this.popoverClick}">Settings</ui5-li>
          <ui5-li icon="sap-icon://edit">Edit Home Page</ui5-li>
          <ui5-li icon="sap-icon://sys-help">Help</ui5-li>
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
}

customElements.define('my-component', MyComponent);