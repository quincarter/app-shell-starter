import { HTMLTemplateResult, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ViewMixin } from '../view.mixin';

@customElement('home-page')
export class HomePage extends ViewMixin(LitElement) {
  tagName = 'home-page';
  featureIsEnabled = true;
  
  connectedCallback(): void {
    super.connectedCallback();
    // this.featureIsEnabled = true;
  }
  render(): HTMLTemplateResult {
    return html`${this.renderComponent()}`;
  }
}
