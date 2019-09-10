import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size } from '../common';
import { TileChild } from '../layout/tile/tile-child';

interface CheckBoxProps extends BaseProps<HTMLInputElement> {
  disabled?: boolean;
  readOnly?: boolean;
}

export class CheckBox extends BaseComponent<CheckBoxProps> {
  render () {
    return <label className={classNameBuilder(['checkbox', (this.props.isTileChild ? TileChild.TileChild : null)])}>
      <input type="checkbox" {...this.props}/>
      {this.props.children}
    </label>
  }
}