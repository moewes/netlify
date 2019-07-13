import { LitElement, html } from 'lit-element';
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Timeline"
import "@ui5/webcomponents/dist/TimelineItem"
import "./my-header"

class MyAboutView extends LitElement {

    render() {
        return html`
    <my-header pageTitle="About" showBackIcon></my-header>
    <ui5-panel fixed="true">
        <ui5-title level="H3">About my cloud playground</ui5-title>
        <div>Lorem ipsum lorem ipsum tbd</div>
    </ui5-panel>
    <ui5-panel header-text="Changelog">
        <ui5-timeline>
            <ui5-timeline-item>
                <div>Hallo Welt</div>
            </ui5-timeline-item>
            <ui5-timeline-item>
                <div>Hallo Welt</div>
            </ui5-timeline-item>
        </ui5-timeline>
    </ui5-panel>
      
      `;
    }

}

customElements.define('my-about-content', MyAboutView);