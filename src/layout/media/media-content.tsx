import React from 'react';
import { classNameBuilder, BaseComponent } from '../../common';
import { TileChild } from '../tile/tile-child';

export class MediaContent extends BaseComponent {
  render () {
    return <div className={classNameBuilder(['media-content', (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </div>
  }
}