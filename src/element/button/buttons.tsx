import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, HorizontalAlignment, Sizes } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { ButtonAddon } from './button-addon';

interface ButtonsProps extends BaseProps<HTMLDivElement> {
  options?: (Sizes | HorizontalAlignment | null | undefined)[];
  hasAddons?: boolean;
}

export class Buttons extends BaseComponent<ButtonsProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['buttons', ...options, (this.props.isTileChild ? TileChild.TileChild : null), (this.props.hasAddons ? ButtonAddon.HasAddons : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}