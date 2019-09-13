import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, Size, HorizontalAlignment } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface PaginationProps extends BaseProps<HTMLElement> {
  options?: (Size | HorizontalAlignment)[];
  rounded?: boolean;
}

export class Pagination extends BaseComponent<PaginationProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <nav className={classNameBuilder(["pagination", ...options, (this.props.rounded ? 'is-rounded' : null), (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </nav>
  }
}