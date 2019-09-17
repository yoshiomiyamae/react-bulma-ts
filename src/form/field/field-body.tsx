import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface FieldBodyProps extends BaseProps<HTMLDivElement> {
  disabled?: boolean;
  readOnly?: boolean;
}

export class FieldBody extends BaseComponent<FieldBodyProps> {
  render() {
    return <div className={classNameBuilder(['field-label', (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </div>
  }
}