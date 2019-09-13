import React from 'react';
import {BaseComponent, BaseProps, classNameBuilder} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface CardProps extends BaseProps<HTMLDivElement> {
}

export class Card extends BaseComponent<CardProps> {
  render () {
    return <div className={classNameBuilder(["card", (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}