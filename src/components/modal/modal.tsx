import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ModalProps extends BaseProps<HTMLDivElement> {
  options?: (State | null | undefined)[];
}

export class Modal extends BaseComponent<ModalProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(["modal", ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}