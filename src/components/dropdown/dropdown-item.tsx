import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State } from '../../common';
import { DropDownItemType } from './dropdown-item-type';

interface DropdownItemProps extends BaseProps<HTMLDivElement | HTMLAnchorElement> {
  itemType: DropDownItemType;
  options?: (State | null | undefined)[];
}

export class DropdownItemm extends BaseComponent<DropdownItemProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return React.createElement(
      this.props.itemType,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'dropdown-item',
            ...options,
          ]
        ),
      },
      this.props.children
    );
  }
}