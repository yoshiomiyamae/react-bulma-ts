import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, Color, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface MessageProps extends BaseProps<HTMLElement> {
  options?: (Color | Size)[]
}

export class Message extends BaseComponent<MessageProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <article className={classNameBuilder(["message", ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </article>
  }
}