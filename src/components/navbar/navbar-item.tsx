import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State, Ability } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { NavbarItemOption, NavbarItemType } from './navbar-option';

interface NavbarItemProps extends BaseProps<HTMLDivElement | HTMLAnchorElement> {
  itemType: NavbarItemType;
  options?: (State | Ability | NavbarItemOption)[];
}

export class NavbarItem extends BaseComponent<NavbarItemProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return React.createElement(
      this.props.itemType,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'navbar-item',
            ...options,
            (this.props.isTileChild ? TileChild.TileChild : null),
          ]
        ),
      },
      this.props.children
    );
  }
}