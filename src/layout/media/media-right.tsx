import React from 'react';
import { classNameBuilder, BaseComponent } from '../../common';
import { TileChild } from '../tile/tile-child';

export class MediaRight extends BaseComponent {
  render () {
    return <figure className={classNameBuilder(['media-right', (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </figure>
  }
}