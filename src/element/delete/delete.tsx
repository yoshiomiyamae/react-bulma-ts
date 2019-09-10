import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { ButtonType } from '../button/button-type';

export interface DeleteProps extends BaseProps<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement | HTMLSpanElement> {
  buttonType: ButtonType;
  options?: (Size)[];
}

export class Delete extends BaseComponent<DeleteProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return React.createElement(
      this.props.buttonType,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'delete',
            ...options,
            (this.props.isTileChild ? TileChild.TileChild : null),
          ]
        ),
      },
      this.props.children
      );
  }
}