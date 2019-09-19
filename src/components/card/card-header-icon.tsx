import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { ButtonType } from '../../element/button/button-type';

export interface CardHeaderIconProps extends BaseProps<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement | HTMLSpanElement> {
  iconType: ButtonType;
  options?: (Color | Size | State | string | null | undefined)[];
}

export class CardHeaderIcon extends BaseComponent<CardHeaderIconProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return React.createElement(
      this.props.iconType,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'card-header-icon',
            ...options,
            (this.props.isTileChild ? TileChild.TileChild : null),
          ]
        ),
      },
      this.props.children
      );
  }
}