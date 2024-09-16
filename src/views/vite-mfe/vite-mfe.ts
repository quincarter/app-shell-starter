import { HTMLTemplateResult, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ViewMixin } from '../view.mixin';

@customElement('vite-mfe')
export class HomePage extends ViewMixin(LitElement) {
  tagName = 'my-element';
  featureIsEnabled = true;
  isMfe = true;

  render(): HTMLTemplateResult {
    return html`isMfe = ${this.isMfe}${this.renderMfe()}`;
  }
}
