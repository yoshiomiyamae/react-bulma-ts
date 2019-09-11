import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface TableHeaderCellProps extends BaseProps<HTMLTableHeaderCellElement> {
}

export class TableHeaderCell extends BaseComponent<TableHeaderCellProps> {
  render () {
    return <th>
        {this.props.children}
    </th>
  }
}