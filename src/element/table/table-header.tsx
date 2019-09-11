import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface TableHeaderProps extends BaseProps<HTMLTableSectionElement> {
}

export class TableHeader extends BaseComponent<TableHeaderProps> {
  render () {
    return <thead>
        {this.props.children}
    </thead>
  }
}