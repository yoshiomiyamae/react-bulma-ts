import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Responsiveness } from '../common';
import { ColumnGap } from './column-gap';
import { ColumnMultiline } from './column-multiline';
import { ColumnVerticalAlignment, ColumnHorizontalAlignment } from './column-alignment';
import { TileChild } from '../layout/tile/tile-child';

interface ColumnsProps extends BaseProps {
  options?: (Responsiveness | ColumnGap | ColumnMultiline | ColumnVerticalAlignment | ColumnHorizontalAlignment | string)[];
}

export class Columns extends BaseComponent<ColumnsProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['columns', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </div>
  }
}