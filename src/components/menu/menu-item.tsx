import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface MenuItemProps extends BaseProps<HTMLLIElement> {
}

export class MenuItem extends BaseComponent<MenuItemProps> {
  render() {
    return <li {...this.props}>
      {this.props.children}
    </li>
  }
}