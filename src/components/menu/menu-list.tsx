import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface MenuListProps extends BaseProps<HTMLUListElement> {
}

export class MenuList extends BaseComponent<MenuListProps> {
  render() {
    return <ul className="menu-list">
      {this.props.children}
    </ul>
  }
}