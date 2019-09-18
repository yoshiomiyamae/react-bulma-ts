import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { State } from '../../common/state';

interface SelectProps extends BaseProps<HTMLSelectElement> {
  options?: (Color | Size | State | string | null | undefined)[];
  disabled?: boolean;
  readOnly?: boolean;
}

export class Select extends BaseComponent<SelectProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['select', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}>
      <select {...this.props}>
        {this.props.children}
      </select>
    </div>
  }
}