import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface MenuProps extends BaseProps<HTMLElement> {
}

export class Menu extends BaseComponent<MenuProps> {
  render() {
    return <aside className={classNameBuilder(["menu", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </aside>
  }
}