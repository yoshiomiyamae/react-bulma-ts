import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalCardProps extends BaseProps<HTMLDivElement> {
}

export class ModalCard extends BaseComponent<ModalCardProps> {
  render() {
    return <div className={classNameBuilder(["modal-card", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}