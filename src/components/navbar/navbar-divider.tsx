import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface NavbarDividerProps extends BaseProps<HTMLHRElement> {
}

export class NavbarDivider extends BaseComponent<NavbarDividerProps> {
  render() {
    return <hr className="navbar-divider"  {...this.props}/>
  }
}