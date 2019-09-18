import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps } from '../../common';
import { LevelTextHolizontalAlignment } from './level-alignment';
import { TileChild } from '../tile/tile-child';

interface LevelItemProps extends BaseProps<HTMLDivElement> {
  options?: (LevelTextHolizontalAlignment | string | null | undefined)[];
}

export class LevelItem extends BaseComponent<LevelItemProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div
      className={classNameBuilder(['level-item', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}