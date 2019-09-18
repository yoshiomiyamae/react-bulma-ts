import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, HorizontalAlignment, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { NavbarDropdownOption } from './navbar-option';

interface NavbarDropDownProps extends BaseProps<HTMLDivElement> {
  options?: (HorizontalAlignment | State | NavbarDropdownOption)[];
}

export class NavbarDropDown extends BaseComponent<NavbarDropDownProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(["navbar-dropdown", ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}