import React from 'react';
import { classNameBuilder, BaseComponent } from '../../common';
import { TileChild } from '../tile/tile-child';

export class MediaLeft extends BaseComponent {
  render () {
    return <figure className={classNameBuilder(['media-left', (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </figure>
  }
}