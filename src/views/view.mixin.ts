import { consume } from '@lit/context';
import { HTMLTemplateResult, LitElement, html } from 'lit';
import { AccessesContext } from '../shared/contexts/accesses.context';
import { state } from 'lit/decorators.js';
import { NavigationContext } from '../shared/contexts/navigation.context';
import { NavItem } from '../shared/interfaces/navigation.interface';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class ViewMixinInterface {
  navItems: NavItem[];
  roles: string[];
  tagName: string;
  componentData: NavItem;
  featureIsEnabled: boolean;
  renderComponent(): HTMLTemplateResult;
}

export const ViewMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class ViewMixinClass extends superClass {
    @consume({ context: NavigationContext, subscribe: true })
    @state()
    navItems: NavItem[] = [];

    @consume({ context: AccessesContext, subscribe: true })
    @state()
    accesses: string[] = [];

    @state()
    tagName = '';

    @state()
    componentData: NavItem = {} as NavItem;

    @state()
    featureIsEnabled = false;

    connectedCallback(): void {
      super.connectedCallback();
      this.featureIsEnabled = true;
      this.componentData = this.navItems.filter(
        (item: NavItem) => item.tagName === this.tagName,
      )[0];
    }

    renderUnderConstruction(): HTMLTemplateResult {
      return !this.componentData.userHasPermission
        ? html`<no-access></no-access>`
        : html`<under-construction></under-construction>`;
    }
    renderComponent() {
      console.log(
        'feature enabled',
        this.featureIsEnabled,
        this.componentData.userHasPermission,
      );
      return html`${this.featureIsEnabled &&
      this.componentData.userHasPermission
        ? html`${this.tagName} Works!`
        : this.renderUnderConstruction()}`;
    }
  }

  return ViewMixinClass as unknown as Constructor<ViewMixinInterface> & T;
};
