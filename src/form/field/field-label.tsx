import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface FieldLabelProps extends BaseProps<HTMLDivElement> {
  options?: (Size)[];
  disabled?: boolean;
  readOnly?: boolean;
}

export class FieldLabel extends BaseComponent<FieldLabelProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['field-label', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </div>
  }
}