import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface DropdownMenuProps extends BaseProps<HTMLDivElement> {
}

export class DropdownMenu extends BaseComponent<DropdownMenuProps> {
  render() {
    return <div className="dropdown-menu" role="menu">
      {this.props.children}
    </div>
  }
}