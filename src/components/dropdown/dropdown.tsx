import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State, Ability, HorizontalAlignment } from '../../common';
import { DropdownOption } from './dropdown-option';
import { TileChild } from '../../layout/tile/tile-child';

interface DropdownProps extends BaseProps<HTMLDivElement> {
  options?: (State | Ability | HorizontalAlignment | DropdownOption)[]
}

export class Dropdown extends BaseComponent<DropdownProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(["dropdown", ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </div>
  }
}