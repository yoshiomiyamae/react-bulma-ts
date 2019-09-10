import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Size } from '../common';
import { TileChild } from './tile/tile-child';

interface SectionProps extends BaseProps<HTMLElement> {
  children?: React.ReactNode;
  size?: Size;
}

export class Section extends BaseComponent<SectionProps> {
  render () {
    return <section
      className={classNameBuilder(['section', this.props.size, (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </section>
  }
}