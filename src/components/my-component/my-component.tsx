import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import "@esri/calcite-components"

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private buildSeriesList(): HTMLCalciteValueListElement {
    return (
      <calcite-value-list>
        <calcite-value-list-item label="Dogs" description="Man's best friend" value="dogs"></calcite-value-list-item>
        <calcite-value-list-item label="Cats" description="Independent and fluffy" value="cats"></calcite-value-list-item>
      </calcite-value-list>
    );
  }

  render() {
    return <div>
      Hello, World! I'm {this.getText()}
      {this.buildSeriesList()}
    </div>;
  }
}
