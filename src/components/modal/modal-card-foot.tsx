import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalCardFootProps extends BaseProps<HTMLElement> {
}

export class ModalCardFoot extends BaseComponent<ModalCardFootProps> {
  render() {
    return <footer className={classNameBuilder(["modal-card-foot", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </footer>
  }
}