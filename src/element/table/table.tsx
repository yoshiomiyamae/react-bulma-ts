import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps} from '../../common';
import { TableModifiers } from './table-modifiers';

interface TableProps extends BaseProps<HTMLTableElement> {
  options?: (TableModifiers | string | null | undefined)[];
}

export class Table extends BaseComponent<TableProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <table className={classNameBuilder(["table", ...options])} {...this.props}>
      {this.props.children}
    </table>
  }
}