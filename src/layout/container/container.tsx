import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Responsiveness } from '../../common';
import { ContainerFulid } from './container-fluid';
import { TileChild } from '../tile/tile-child';

interface ContainerProps extends BaseProps<HTMLDivElement> {
  options?: (ContainerFulid | Responsiveness | string)[];
}

export class Container extends BaseComponent<ContainerProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div
      className={classNameBuilder(['container', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}