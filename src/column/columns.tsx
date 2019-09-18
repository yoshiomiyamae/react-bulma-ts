import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Responsiveness, VerticalAlignment, HorizontalAlignment } from '../common';
import { ColumnGap } from './column-gap';
import { ColumnMultiline } from './column-multiline';
import { TileChild } from '../layout/tile/tile-child';

interface ColumnsProps extends BaseProps<HTMLDivElement> {
  options?: (Responsiveness | ColumnGap | ColumnMultiline | VerticalAlignment | HorizontalAlignment | string | null | undefined)[];
}

export class Columns extends BaseComponent<ColumnsProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['columns', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}