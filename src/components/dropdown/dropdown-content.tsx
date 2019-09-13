import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface DropdownContentProps extends BaseProps<HTMLDivElement> {
}

export class DropdownContent extends BaseComponent<DropdownContentProps> {
  render() {
    return <div className="dropdown-content" {...this.props}>
      {this.props.children}
    </div>
  }
}