import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface PaginationNextProps extends BaseProps<HTMLAnchorElement> {
}

export class PaginationNext extends BaseComponent<PaginationNextProps> {
  render() {
    return <a className="pagination-next" {...this.props}>
      {this.props.children}
    </a>
  }
}