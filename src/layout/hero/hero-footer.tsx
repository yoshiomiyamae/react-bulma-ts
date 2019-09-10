import React from 'react';
import { classNameBuilder, BaseComponent } from '../../common';
import { TileChild } from '../tile/tile-child';

export class HeroFooter extends BaseComponent {
  render () {
    return <div
      className={classNameBuilder(['hero-foot', (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}