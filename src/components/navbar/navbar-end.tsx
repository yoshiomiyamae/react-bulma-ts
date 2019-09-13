import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface NavbarEndProps extends BaseProps<HTMLDivElement> {
}

export class NavbarEnd extends BaseComponent<NavbarEndProps> {
  render() {
    return <div className={classNameBuilder(["navbar-end", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}