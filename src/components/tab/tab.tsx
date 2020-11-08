import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface TabProps extends BaseProps<HTMLLIElement> {
  options?: (State | string | null | undefined)[];
}

export class Tab extends BaseComponent<TabProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <li className={classNameBuilder([...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      <a>
        {this.props.children}
      </a>
    </li>
  }
}