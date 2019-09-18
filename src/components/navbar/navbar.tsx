import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, Color } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { NavbarOption, NavbarType } from './navbar-option';

interface NavbarProps extends BaseProps<HTMLElement | HTMLBodyElement> {
  options?: (NavbarOption | Color | null | undefined)[];
  navbarType: NavbarType;
}

export class Navbar extends BaseComponent<NavbarProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return React.createElement(
      this.props.navbarType,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'navbar',
            ...options,
            (this.props.isTileChild ? TileChild.TileChild : null),
          ]
        ),
      },
      this.props.children
    );
  }
}