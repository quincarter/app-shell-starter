import { html, HTMLTemplateResult, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { NavItem } from '../../shared/interfaces/navigation.interface';
import '../theme-switcher/theme-switcher';
import { AppShellHeaderStyles } from './app-shell-header.styles';

export class AppShellHeader extends LitElement {
  @property({ attribute: 'routes', type: Array })
  routes: NavItem[] = [];

  @property({ type: Boolean, attribute: 'enable-theme-switcher' })
  enableThemeSwitcher = false;

  static styles = [AppShellHeaderStyles];

  render(): HTMLTemplateResult {
    return html`${this.routes.length > 0
      ? html`<nav>
            <a href="/"
              ><img class="logo" src="/pwa-192x192.png" alt="logo"
            /></a>
            <ul>
              ${this.routes.map(
                route =>
                  html`<li><a href="${route.path}">${route.name}</a></li>`,
              )}
            </ul>
            ${this.enableThemeSwitcher
              ? html`<theme-switcher></theme-switcher>`
              : nothing}
          </nav>
          <slot></slot>`
      : nothing} `;
  }
}
