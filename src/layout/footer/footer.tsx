import React from 'react';
import { BaseComponent, classNameBuilder } from '../../common';
import { TileChild } from '../tile/tile-child';

export class Footer extends BaseComponent {
  render () {
    return <footer
      className={classNameBuilder(['footer', (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </footer>
  }
}