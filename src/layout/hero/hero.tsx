import React from 'react';
import { classNameBuilder, Color, Gradient, Size, BaseComponent, BaseProps } from '../../common';
import { TileChild } from '../tile/tile-child';

interface HeroProps extends BaseProps<HTMLElement> {
  options?: (Color | Gradient | Size | string | null | undefined)[];
}

export class Hero extends BaseComponent<HeroProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <section
      className={classNameBuilder(['hero', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </section>
  }
}