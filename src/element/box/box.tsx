import React from 'react';
import { classNameBuilder, BaseComponent } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';


export class Box extends BaseComponent {
  render () {
    return <div
      className={classNameBuilder(['box', (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}