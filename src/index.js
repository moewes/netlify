import { LitElement, html } from 'lit-element';
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/Title";
import "./my-header";
import "./my-header-panel";

class MyMainView extends LitElement {

  render() {
    return html`
    <my-header pageTitle="Home"></my-header>
    <my-header-panel></my-header-panel>
    <ui5-panel header-text="Fetch Test">
      <div>
        <ui5-label>Display some UI5-Elements</ui5-label>
      </div>
      <ui5-button @click="${this.startFetch}">Start</ui5-button>
    </ui5-panel>
    <ui5-panel header-text="Useless UI5 Testseite">
      <div>
        <ui5-label>Display some UI5-Elements</ui5-label>
      </div>
      <ui5-button @click="${this.startTestseite}">Start</ui5-button>
    </ui5-panel>
    `;
  }

  startTestseite(e) {
    window.location = "./test.html";
  }

  startFetch(e) {
    window.location = "./fetch.html";
  }
}

customElements.define('my-main-view', MyMainView);