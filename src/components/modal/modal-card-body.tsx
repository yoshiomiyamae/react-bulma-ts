import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalCardBodyProps extends BaseProps<HTMLElement> {
}

export class ModalCardBody extends BaseComponent<ModalCardBodyProps> {
  render() {
    return <section className={classNameBuilder(["modal-card-head", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </section>
  }
}