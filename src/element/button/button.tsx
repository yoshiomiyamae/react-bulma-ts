import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { ButtonType } from './button-type';

export interface ButtonProps extends BaseProps<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement | HTMLSpanElement> {
  buttonType: ButtonType;
  options?: (Color | Size | State | string)[];
}

export class Button extends BaseComponent<ButtonProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return React.createElement(
      this.props.buttonType,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'button',
            ...options,
            (this.props.isTileChild ? TileChild.TileChild : null),
          ]
        ),
      },
      this.props.children
      );
  }
}