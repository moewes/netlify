import { LitElement, html } from 'lit-element';
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Label"


class MyHeaderPanel extends LitElement {

    render() {
        return html`
    
    <ui5-panel fixed="true">
        <ui5-title level="H3">My cloud playground</ui5-title>
        <ui5-label>Version Frontend 0.1.1</ui5-label><br />
        <ui5-label>Version Backend 0.1.0</ui5-label>
    </ui5-panel>   
      `;
    }
}

customElements.define('my-header-panel', MyHeaderPanel);