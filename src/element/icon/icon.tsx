import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, TextColor, Size, HorizontalAlignment } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface IconProps extends BaseProps<HTMLSpanElement> {
  iconName: string;
  options?: (TextColor | Size | HorizontalAlignment)[];
}

export class Icon extends BaseComponent<IconProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <span className={classNameBuilder(['buttons', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      <i className={this.props.iconName} />
    </span>
  }
}