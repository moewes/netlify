import {LitElement, html} from 'lit-element';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Timeline';
import '@ui5/webcomponents/dist/TimelineItem';
import './my-header';
import './fetch-element';

/**
 * Fetch view
 */
class MyFetchView extends LitElement {
  // eslint-disable-next-line require-jsdoc
  render() {
    return html`
    <my-header pageTitle="Fetch Testseite" showBackIcon></my-header>
    <ui5-panel fixed="true">
        <ui5-title level="H3">fetch view</ui5-title>
        <div>Lorem ipsum lorem ipsum tbd</div>
        <fetch-element></fetch-element>
    </ui5-panel>
   
      
      `;
  }
}

customElements.define('my-fetch-view', MyFetchView);
