import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, HorizontalAlignment, Size} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { BreadcrumbSeparator } from './breadcrumb-separator';

interface BreadcrumbProps extends BaseProps<HTMLElement> {
  options?: (HorizontalAlignment | Size | string | null | undefined)[];
  separator?: BreadcrumbSeparator;
}

export class Breadcrumb extends BaseComponent<BreadcrumbProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <nav
      className={classNameBuilder([
        'breadcrumbs',
        ...options,
        this.props.separator,
        (this.props.isTileChild ? TileChild.TileChild : null)
      ])}
      {...this.props}>
        <ul>
          {this.props.children}
        </ul>
    </nav>
  }
}