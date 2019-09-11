import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps} from '../../common';

interface BreadcrumbItemProps extends BaseProps<HTMLLIElement> {
  active?: boolean;
}

export class BreadcrumbItem extends BaseComponent<BreadcrumbItemProps> {
  render () {
    return <li className={classNameBuilder([this.props.active ? 'is-active' : null])}>
      {this.props.children}
    </li>
  }
}