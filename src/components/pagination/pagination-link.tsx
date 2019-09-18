import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder, State } from '../../common';

interface PaginationLinkProps extends BaseProps<HTMLAnchorElement> {
  options?: (State | null | undefined)[];
}

export class PaginationLink extends BaseComponent<PaginationLinkProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <li>
      <a className={classNameBuilder(["pagination-link", ...options])} {...this.props}>
        {this.props.children}
      </a>
    </li>
  }
}