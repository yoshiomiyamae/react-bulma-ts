import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface DropdownDividerProps extends BaseProps<HTMLDivElement> {
}

export class DropdownProps extends BaseComponent<DropdownDividerProps> {
  render() {
    return <div className="dropdown-divider" {...this.props}>
      {this.props.children}
    </div>
  }
}