import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { FieldOption } from './field-option';
import { TileChild } from '../../layout/tile/tile-child';

interface FieldProps extends BaseProps<HTMLDivElement> {
  options?: (FieldOption | null | undefined)[];
}

export class Field extends BaseComponent<FieldProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(["field", ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {this.props.children}
    </div>
  }
}