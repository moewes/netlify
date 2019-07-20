import { LitElement, html } from 'lit-element';


class MyProxyElement extends LitElement {

    static get properties() {
        return { pageTitle: { type: String},
                 showBackIcon: {type: Boolean}
         };
      }

    render() {
        return html`
    <div>ich bin ein Proxy-Element</div>
      `;
    }

    tuWas() {
        alert("Hallo View");
        
    }

    getAll() {

    }

    
}

customElements.define('my-proxy-element', MyProxyElement);