import { Chart, ChartItem, ChartType } from 'chart.js/auto';
import { html, HTMLTemplateResult, LitElement, PropertyValues } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import {
  SAMPLE_BAR_DATA,
  SAMPLE_DOUGHNUT_DATA,
  SAMPLE_PIE_DATA,
} from './chart-types.interface';

export class ChartJsComponent extends LitElement {
  @property({ type: String, attribute: 'chart-type' })
  chartType: ChartType | undefined;

  @state()
  chart: Chart | undefined;

  @query('canvas')
  canvasElement: HTMLCanvasElement | undefined;

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const ctx = this.canvasElement?.getContext('2d') as ChartItem;
    let data;
    switch (this.chartType) {
      case 'bar':
        data = { ...SAMPLE_BAR_DATA };
        break;
      case 'pie':
        data = { ...SAMPLE_PIE_DATA };
        break;
      case 'doughnut':
        data = { ...SAMPLE_DOUGHNUT_DATA };
        break;
      default:
        break;
    }
    this.chart = new Chart(ctx, { ...data });
  }

  render(): HTMLTemplateResult {
    return html`<canvas></canvas>`;
  }
}
