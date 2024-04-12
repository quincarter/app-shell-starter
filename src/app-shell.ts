import { provide } from '@lit/context';
import { HTMLTemplateResult, LitElement, PropertyValueMap, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { NavigationContext } from './shared/contexts/navigation.context';
import { NavItem } from './shared/interfaces/navigation.interface';
import { navigationRouting, sidePages } from './shared/configuration/nav';
import { routesBuilt } from './shared/configuration/routes';
import { AppRootUtilities } from './shared/utilities/app-root.utility';
import { AccessesContext } from './shared/contexts/accesses.context';
import { Route, Router } from '@vaadin/router';
import './shared/internal-views/no-access/no-access';
import './shared/internal-views/404-not-found/page-not-found';
import './shared/internal-views/under-construction/under-construction';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-shell')
export class AppShell extends LitElement {
  @provide({ context: NavigationContext })
  @property({ type: Object })
  routing: NavItem[] = [];

  @provide({ context: AccessesContext })
  @property({ type: Array })
  accesses: string[] = [];

  @state()
  _router: Router | undefined;

  @state()
  nonNavRoutes: NavItem[] = [] as NavItem[];

  @state()
  navRoutes: NavItem[] = [] as NavItem[];

  @state()
  notAllowedRouteList: NavItem[] = [];

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    this.accesses = ['public', 'private'];
    this.navRoutes = this.buildNavBarRoutes(navigationRouting);
  }

  buildNavBarRoutes(
    navigationRouting: NavItem[],
    includeWildcardRoute = false,
  ): NavItem[] {
    const navi = routesBuilt(
      navigationRouting,
      this.accesses,
      includeWildcardRoute,
    ) as NavItem[];

    const { notAllowed, navItems } = AppRootUtilities.getNotAllowedRoutes(
      navi,
      this.notAllowedRouteList,
    );

    this.notAllowedRouteList = notAllowed;
    return navItems;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    super.firstUpdated(_changedProperties);
    const includeWildcardRoute = true;

    const detailRoutes: NavItem[] = this.buildNavBarRoutes([...sidePages]);

    const outlet = this.shadowRoot?.getElementById('outlet');

    this.routing = routesBuilt(
      [...this.navRoutes, ...this.notAllowedRouteList, ...detailRoutes],
      this.accesses,
      includeWildcardRoute,
    ) as NavItem[];

    this._router = new Router(outlet);
    this._router.setRoutes(this.routing as Route[]);
  }

  render(): HTMLTemplateResult {
    return html`
      <nav>
        <h1>Nav Routes</h1>
        <ul>
          ${this.navRoutes.map(
            item =>
              html`<li>
                <a href="${item.path}">${item.name}</a>
              </li>`,
          )}
        </ul>
        <h2>Detail Routes</h2>
        <ul>
          ${this.nonNavRoutes.map(
            item =>
              html`<li>
                <a href="${item.path}">${item.name}</a>
              </li>`,
          )}
        </ul>
      </nav>
      <div id="outlet"></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShell;
  }
}
