import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalCardHeadProps extends BaseProps<HTMLElement> {
}

export class ModalCardHead extends BaseComponent<ModalCardHeadProps> {
  render() {
    return <header className={classNameBuilder(["modal-card-head", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </header>
  }
}