import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface TableFooterProps extends BaseProps<HTMLTableSectionElement> {
}

export class TableFooter extends BaseComponent<TableFooterProps> {
  render () {
    return <tfoot {...this.props}>
        {this.props.children}
    </tfoot>
  }
}