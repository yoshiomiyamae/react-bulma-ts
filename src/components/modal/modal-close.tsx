import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

export interface ModalCloseProps extends BaseProps<HTMLButtonElement> {
  options?: (Size | null | undefined)[];
}

export class ModalClose extends BaseComponent<ModalCloseProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <button className={classNameBuilder(
      [
        'modal-close',
        ...options,
        (this.props.isTileChild ? TileChild.TileChild : null),
      ]
    )} {...this.props}>
      {this.props.children}
    </button>
  }
}