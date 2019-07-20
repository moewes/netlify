import { LitElement, html } from 'lit-element';
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/TextArea";
import "@ui5/webcomponents/dist/DatePicker";
import "@ui5/webcomponents/dist/Panel"
import "./my-proxy-element"
import "./my-header"

class MyTestView extends LitElement {

    render() {
        return html`
    <my-header pageTitle="Useless Test Page" showBackIcon></my-header>
    <ui5-panel header-text="Useless Testpage">
        <ui5-button @click="${this.machWas}">Hello World</ui5-button><br><br>
        <ui5-textarea placeholder="Type some text" max-length="8" show-exceeded-text></ui5-textarea><br><br>
        <ui5-datepicker style="width: 180px"></ui5-datepicker><br><br>
    </ui5-panel>
    <my-proxy-element id="proxy"></my-proxy-element>
      `;
    }

    machWas() {
        alert("Hallo Proxy")
        var proxy = this.shadowRoot.getElementById('proxy');
       //var proxy = document.getElementById('proxy');
        proxy.tuWas();
    }
}

customElements.define('my-test-view', MyTestView);



