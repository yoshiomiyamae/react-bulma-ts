import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface TableProps extends BaseProps<HTMLTableElement> {
}

export class Table extends BaseComponent<TableProps> {
  render () {
    return <table className={classNameBuilder(['table', (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
        {this.props.children}
    </table>
  }
}