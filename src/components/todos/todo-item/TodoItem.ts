import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { TodoItemStyles } from "./todo-item.styles";

export class TodoItem extends LitElement {
	/**
	 * The title of the todo
	 * @attr item-title
	 * @type String
	 */
	@property({ type: String, attribute: "item-title" })
	title = "";

	/**
	 * Optional description
	 * @attr item-description
	 * @type String
	 */
	@property({ type: String, attribute: "item-description" })
	description = "";

	/**
	 * This is the state of the todo item in the list.
	 * @attr is-checked
	 * @type Boolean
	 * @default false
	 */
	@property({ type: Boolean, attribute: "is-checked" })
	isChecked = false;

	static styles = [TodoItemStyles];

	onChecked() {
		// update signal stores
	}

	render() {
		return html`
        <div class="todo-item">
        <input type="checkbox" name="todoItem" checked/>
        </div>
        `;
	}
}
