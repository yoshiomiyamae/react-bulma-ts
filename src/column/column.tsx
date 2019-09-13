import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps } from '../common';
import { ColumnSize } from './column-size';
import { ColumnOffset } from './column-offset';
import { ColumnThickness } from './column-thickness';
import { TileChild } from '../layout/tile/tile-child';

interface ColumnProps extends BaseProps<HTMLDivElement> {
  options?: (ColumnSize | ColumnOffset | ColumnThickness | string)[];
}

export class Column extends BaseComponent<ColumnProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['column', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}