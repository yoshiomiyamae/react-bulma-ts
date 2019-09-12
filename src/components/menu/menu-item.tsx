import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface MenuListProps extends BaseProps<HTMLLIElement> {
}

export class MenuList extends BaseComponent<MenuListProps> {
  render() {
    return <li>
      {this.props.children}
    </li>
  }
}