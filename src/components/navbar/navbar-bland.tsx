import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface NavbarBrandProps extends BaseProps<HTMLDivElement> {
}

export class NavbarBrand extends BaseComponent<NavbarBrandProps> {
  render() {
    return <div className={classNameBuilder(["navbar-brand", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}