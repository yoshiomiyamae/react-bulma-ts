import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalCardTitleProps extends BaseProps<HTMLParagraphElement> {
}

export class ModalCardTitle extends BaseComponent<ModalCardTitleProps> {
  render() {
    return <p className={classNameBuilder(["modal-card-title", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </p>
  }
}