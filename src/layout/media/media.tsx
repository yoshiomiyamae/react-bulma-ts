import React from 'react';
import { classNameBuilder, BaseComponent } from '../../common';
import { TileChild } from '../tile/tile-child';

export class Media extends BaseComponent {
  render () {
    return <article className={classNameBuilder(['media', (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </article>
  }
}