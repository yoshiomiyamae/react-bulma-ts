import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface MenuLabelProps extends BaseProps<HTMLParagraphElement> {
}

export class MenuLabel extends BaseComponent<MenuLabelProps> {
  render() {
    return <p className="menu-label">
      {this.props.children}
    </p>
  }
}