import * as React from 'react';
import {classNameBuilder} from '../common';

interface TableProps {
  children?: any;

  [x: string]: any;
}

interface TableRowProps {
  children?: any;
  seleted?: boolean;

  [x: string]: any;
}

export class Table extends React.Component<TableProps> {
  render () {
    return (
      <table className={classNameBuilder(['table'])}>
        {this.props.children}
      </table>
    );
  }
}

export class TableRow extends React.Component<TableRowProps> {
  render () {
    return (
      <tr className={classNameBuilder([(this.props.seleted ? 'is-selected' : '')])}>
        {this.props.children}
      </tr>
    );
  }
}
