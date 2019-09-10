import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { ContentType } from './content-type';

export interface ContentProps extends BaseProps<HTMLDivElement> {
  contentType: ContentType;
  options?: (Size)[];
}

export class Content extends BaseComponent<ContentProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['content', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </div>
  }
}