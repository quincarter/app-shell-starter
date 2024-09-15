import { html, HTMLTemplateResult, LitElement, PropertyValues } from 'lit';
import { query } from 'lit/decorators.js';
import { ThemeSwitcherStyles } from './theme-switcher.styles';

export class ThemeSwitcher extends LitElement {
  @query('#theme-switch input[type="checkbox"]')
  switchBox: HTMLInputElement | undefined;

  static styles = [ThemeSwitcherStyles];

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
      this.switchBox?.setAttribute('checked', '');
    }
  }

  switchTheme(e: any) {
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      this.switchBox?.setAttribute('checked', '');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      this.switchBox?.removeAttribute('checked');
    }
  }
  render(): HTMLTemplateResult {
    return html`
      <label id="theme-switch" class="switch">
        <input type="checkbox" @click="${this.switchTheme}" />
        <span class="slider round"></span>
      </label>
    `;
  }
}
