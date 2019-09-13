import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface PaginationListProps extends BaseProps<HTMLUListElement> {
}

export class PaginationList extends BaseComponent<PaginationListProps> {
  render() {
    return <ul className="pagination-list" {...this.props}>
      {this.props.children}
    </ul>
  }
}