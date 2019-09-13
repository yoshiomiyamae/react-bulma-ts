import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface TableRowProps extends BaseProps<HTMLTableRowElement> {
    selected?: boolean;
}

export class TableRow extends BaseComponent<TableRowProps> {
  render () {
    return <tr className={this.props.selected ? 'is-selected' : ''} {...this.props}>
        {this.props.children}
    </tr>
  }
}