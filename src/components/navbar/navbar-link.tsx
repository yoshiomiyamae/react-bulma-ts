import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface NavbarLinkProps extends BaseProps<HTMLAnchorElement> {
  arrowless?: boolean;
}

export class NavbarLink extends BaseComponent<NavbarLinkProps> {
  render() {
    return <a className={classNameBuilder(["navbar-link", (this.props.arrowless ? 'is-arrowless' : null), (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </a>
  }
}