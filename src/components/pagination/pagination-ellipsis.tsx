import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface PaginationEllipsisProps extends BaseProps<HTMLSpanElement> {
}

export class PaginationEllipsis extends BaseComponent<PaginationEllipsisProps> {
  render() {
    return <li>
      <span className="pagination-ellipsis" {...this.props}>
        {this.props.children}
      </span>
    </li>
  }
}

export const ELIPSIS_CHARACTER = '&hellip;';