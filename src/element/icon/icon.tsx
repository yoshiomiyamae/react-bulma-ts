import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, TextColor, Size, HorizontalAlignment } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface IconProps extends BaseProps<HTMLSpanElement> {
  options?: (TextColor | Size | HorizontalAlignment | null | undefined)[];
}

export class Icon extends BaseComponent<IconProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <span className={classNameBuilder(['buttons', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </span>
  }
}