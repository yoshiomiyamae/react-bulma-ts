import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalContentProps extends BaseProps<HTMLDivElement> {
}

export class ModalContent extends BaseComponent<ModalContentProps> {
  render() {
    return <div className={classNameBuilder(["modal-content", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}