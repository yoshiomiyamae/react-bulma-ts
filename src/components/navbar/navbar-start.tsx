import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface NavbarStartProps extends BaseProps<HTMLDivElement> {
}

export class NavbarStart extends BaseComponent<NavbarStartProps> {
  render() {
    return <div className={classNameBuilder(["navbar-start", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}