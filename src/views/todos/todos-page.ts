import { type HTMLTemplateResult, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { ViewMixin } from "../view.mixin";
import { TodosPageStyles } from "./todos-page.styles";

@customElement("todos-page")
export class CardExamples extends ViewMixin(LitElement) {
	featureIsEnabled = false;
	isMfe = false;

	static styles = [TodosPageStyles];

	render(): HTMLTemplateResult {
		return this.renderMfe(
			html`isMfe = ${this.isMfe}
      <div>Todos Page</div>
      `,
		);
	}

	listenForClicks(e: CustomEvent<{ id: string; data: string }>): void {
		console.log("item clicked", e.detail);
	}
}
