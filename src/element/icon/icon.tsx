import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, TextColor } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface IconProps extends BaseProps<HTMLSpanElement> {
  iconName: string;
  options?: (TextColor)[];
}

export class Icon extends BaseComponent<IconProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <span className={classNameBuilder(['buttons', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}>
      <i className={this.props.iconName} />
    </span>
  }
}