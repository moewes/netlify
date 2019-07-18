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
    <ui5-panel fixed="true">
      <ui5-title level="H1">Title level 1</ui5-title>
      <p>Hello world! automatic :-)</p>
      <ui5-button>Hello world!</ui5-button>
    </ui5-panel>
    <ui5-panel header-text="Title">
      <ui5-title level="H1">Title level 1</ui5-title>
      <p>Hello world! automatic :-)</p>
      <ui5-button>Hello world!</ui5-button>
    </ui5-panel>
    `;
  } 
}

customElements.define('my-main-view', MyMainView);