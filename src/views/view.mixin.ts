import { consume } from '@lit/context';
import { HTMLTemplateResult, LitElement, PropertyValues, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { AccessesContext } from '../shared/contexts/accesses.context';
import { MfeLoaderContext } from '../shared/contexts/mfe-loader.context';
import { NavigationContext } from '../shared/contexts/navigation.context';
import { NavItem } from '../shared/interfaces/navigation.interface';
import { MfeLoader } from '../shared/utilities/mfe-loader.utility';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class ViewMixinInterface {
  navItems: NavItem[];
  roles: string[];
  mfeLoader: MfeLoader | undefined;
  tagName: string;
  componentData: NavItem;
  featureIsEnabled: boolean;
  isMfe: boolean;
  renderUnderConstruction(): HTMLTemplateResult;
  renderMfe(customTemplate?: HTMLTemplateResult): HTMLTemplateResult;
}

export const ViewMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class ViewMixinClass extends superClass {
    @consume({ context: NavigationContext, subscribe: true })
    @property({ type: Array })
    navItems: NavItem[] = [];

    @consume({ context: AccessesContext, subscribe: true })
    @state()
    accesses: string[] = [];

    @consume({ context: MfeLoaderContext, subscribe: true })
    @state()
    mfeLoader: MfeLoader | undefined;

    @state()
    tagName = '';

    @state()
    componentData: NavItem = {} as NavItem;

    @state()
    featureIsEnabled = false;

    isMfe = false;

    connectedCallback(): void {
      super.connectedCallback();
      this.featureIsEnabled = true;

      if (this.isMfe) {
        this.componentData = this.navItems.filter(
          (item: NavItem) => item.mfeComponent?.tagName === this.tagName,
        )[0];
      } else {
        this.componentData = this.navItems.filter(
          (item: NavItem) => item.tagName === this.tagName,
        )[0];
      }

      this.mfeLoader?.init();
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
      super.firstUpdated(_changedProperties);
      let loadMfe;
      this.mfeLoader?.config.filter(item => {
        if (item.tagName === this.tagName) {
          loadMfe = document.createElement(this.tagName);
        }
      });

      if (loadMfe) {
        const container = this.shadowRoot?.querySelector(
          `#mfe-container-${this.tagName}`,
        );
        container?.appendChild(loadMfe);
      }
    }
    renderUnderConstruction(): HTMLTemplateResult {
      return !this.componentData?.userHasPermission
        ? html`<no-access></no-access>`
        : html`<under-construction></under-construction>`;
    }

    renderMfe(customTemplate?: HTMLTemplateResult): HTMLTemplateResult {
      if (customTemplate) {
        return html`${customTemplate}`;
      }

      return html`${this.featureIsEnabled &&
      this.componentData?.userHasPermission &&
      this.isMfe
        ? html`<div id="mfe-container-${this.tagName}"></div>`
        : this.renderUnderConstruction()}`;
    }

    protected render(): HTMLTemplateResult {
      return html`${this.renderMfe}`;
    }
  }

  return ViewMixinClass as unknown as Constructor<ViewMixinInterface> & T;
};
