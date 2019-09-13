import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface PaginationPreviousProps extends BaseProps<HTMLAnchorElement> {
}

export class PaginationPrevious extends BaseComponent<PaginationPreviousProps> {
  render() {
    return <a className="pagination-previous" {...this.props}>
      {this.props.children}
    </a>
  }
}