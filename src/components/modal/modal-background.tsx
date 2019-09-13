import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalBackgroundProps extends BaseProps<HTMLDivElement> {
}

export class ModalBackground extends BaseComponent<ModalBackgroundProps> {
  render() {
    return <div className={classNameBuilder(["modal-background", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}