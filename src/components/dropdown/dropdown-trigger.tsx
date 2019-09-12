import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface DropdownTriggerProps extends BaseProps<HTMLDivElement> {
}

export class DropdownTrigger extends BaseComponent<DropdownTriggerProps> {
  render() {
    return <div className="dropdown-trigger">
      {this.props.children}
    </div>
  }
}