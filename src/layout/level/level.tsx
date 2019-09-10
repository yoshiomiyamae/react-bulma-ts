import React from 'react';
import { classNameBuilder, Responsiveness, BaseComponent, BaseProps } from '../../common';
import { TileChild } from '../tile/tile-child';

interface LevelProps extends BaseProps<HTMLDivElement> {
  children?: React.ReactNode;
  options?: (Responsiveness | string)[];
}

export class Level extends BaseComponent<LevelProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div
      className={classNameBuilder(['level', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}