import type { CSSResultOrNative } from "lit";
import { html, LitElement } from "lit";
import { state } from "lit/decorators.js";
import type { ITodoItem } from "../../../shared/interfaces/todos.interface";
import "../todo-item/todo-item";
import { TodoListStyles } from "./todo-list.styles";

export class TodoList extends LitElement {
	static styles: CSSResultOrNative[] = [TodoListStyles];

	@state()
	todoItems: ITodoItem[] = [];

    connectedCallback(): void {
        super.connectedCallback();
        // get the items from the signal store for the todoItems
    }

	render() {
		return html``;
	}
}
