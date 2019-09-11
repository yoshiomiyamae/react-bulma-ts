import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface TableContainerProps extends BaseProps<HTMLDivElement> {
}

export class TableContainer extends BaseComponent<TableContainerProps> {
  render () {
    return <div className={classNameBuilder(['table-container', (this.props.isTileChild ? TileChild.TileChild : null)])}>
        {this.props.children}
    </div>
  }
}