import React from 'react';
import { classNameBuilder, BaseComponent } from '../../common';
import { TileChild } from '../tile/tile-child';

export class HeroBody extends BaseComponent {
  render () {
    return <div
      className={classNameBuilder(['hero-body', (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}