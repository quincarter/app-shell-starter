import { LitElement, css, html } from 'lit';

export class NoAccess extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`No Access!`;
  }
}
