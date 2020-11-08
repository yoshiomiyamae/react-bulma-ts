import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface NavbarBurgerProps extends BaseProps<HTMLAnchorElement> {
  options?: (State | string | null | undefined)[];
}

export class NavbarBurger extends BaseComponent<NavbarBurgerProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <a className={classNameBuilder(["navbar-burger", ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      <span></span>
      <span></span>
      <span></span>
    </a>
  }
}