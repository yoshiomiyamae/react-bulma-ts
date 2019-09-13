import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalProps extends BaseProps<HTMLDivElement> {
}

export class Modal extends BaseComponent<ModalProps> {
  render() {
    return <div className={classNameBuilder(["modal", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}