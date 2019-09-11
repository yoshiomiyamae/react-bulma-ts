import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface TableBodyProps extends BaseProps<HTMLTableSectionElement> {
}

export class TableBody extends BaseComponent<TableBodyProps> {
  render () {
    return <tbody>
        {this.props.children}
    </tbody>
  }
}