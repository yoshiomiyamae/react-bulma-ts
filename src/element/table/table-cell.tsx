import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface TableCellProps extends BaseProps<HTMLTableCellElement> {
}

export class TableCell extends BaseComponent<TableCellProps> {
  render () {
    return <td>
        {this.props.children}
    </td>
  }
}