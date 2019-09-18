import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps } from '../../common';
import { TileContextual } from './tile-contextual';
import { TileDirection } from './tile-direction';
import { TileChild } from '../tile/tile-child';

interface TileProps extends BaseProps<HTMLDivElement> {
  options?: (TileContextual | TileDirection | string | null | undefined)[];
}

export class Tile extends BaseComponent<TileProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div
      className={classNameBuilder(['tile', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}