import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State, Ability } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { NavbarItemOption } from './navbar-option';

interface NavbarItemProps extends BaseProps<HTMLDivElement | HTMLAnchorElement> {
  option?: (State | Ability | NavbarItemOption)[]
  hasDropdown?: boolean;
}

export class NavbarItem extends BaseComponent<NavbarItemProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return React.createElement(
      this.props.buttonType,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'navbar-item',
            ...options,
            (this.props.hasDropdown ? 'has-dropdown' : null),
            (this.props.isTileChild ? TileChild.TileChild : null),
          ]
        ),
      },
      this.props.children
    );
  }
}