import React from 'react';
import { BaseComponent, BaseProps, Size, HorizontalAlignment, Style, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface TabsProps extends BaseProps<HTMLDivElement> {
  options?: (Size | HorizontalAlignment | Style | string | null | undefined)[];
}

export class Tabs extends BaseComponent<TabsProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <nav className={classNameBuilder(["tabs", ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      <ul>
        {this.props.children}
      </ul>
    </nav>
  }
}