import { LitElement, html } from 'lit-element';
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Timeline";
import "@ui5/webcomponents/dist/TimelineItem";
import "@ui5/webcomponents/dist/Label";
import "./my-header";
import "./my-header-panel";

class MyAboutView extends LitElement {

    render() {
        return html`
    <my-header pageTitle="About" showBackIcon></my-header>
    <my-header-panel></my-header-panel>
    <ui5-panel header-text="Changelog">
        <ui5-timeline>
            <ui5-timeline-item icon="sap-icon://calendar" title-text="Github Pages for project">
    
            </ui5-timeline-item>
            <ui5-timeline-item icon="sap-icon://calendar" title-text="Init beackend project with quarkus on openshift">
    
            </ui5-timeline-item>
            <ui5-timeline-item icon="sap-icon://calendar" title-text="Init frontend project on netlify.com">
    
            </ui5-timeline-item>
        </ui5-timeline>
    </ui5-panel>
      
      `;
    }
}

customElements.define('my-about-content', MyAboutView);