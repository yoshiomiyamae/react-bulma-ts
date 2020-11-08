import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface NavbarMenuProps extends BaseProps<HTMLDivElement> {
  options?: (State | string | null | undefined)[];
}

export class NavbarMenu extends BaseComponent<NavbarMenuProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(["navbar-menu", ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}