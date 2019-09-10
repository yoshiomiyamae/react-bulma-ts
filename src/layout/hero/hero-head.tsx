import React from 'react';
import { classNameBuilder, BaseComponent } from '../../common';
import { TileChild } from '../tile/tile-child';

export class HeroHead extends BaseComponent {
  render () {
    return <div
      className={classNameBuilder(['hero-head', (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}