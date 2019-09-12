import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, State} from '../../common';

interface BreadcrumbItemProps extends BaseProps<HTMLLIElement> {
  options?: (State)[];
}

export class BreadcrumbItem extends BaseComponent<BreadcrumbItemProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <li className={classNameBuilder([...options])}>
      {this.props.children}
    </li>
  }
}