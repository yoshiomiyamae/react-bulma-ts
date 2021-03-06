import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { ImageSize, ImageOption } from './image-size';

interface ImageProps extends BaseProps<HTMLElement> {
  src: string;
  options?: (ImageSize | Size | ImageOption | string | null | undefined)[];
  rounded?: boolean;
}

export class Image extends BaseComponent<ImageProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <figure className={classNameBuilder(['image', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      <img className={this.props.rounded ? 'is-rounded': ''} src={this.props.src}/>
    </figure>
  }
}