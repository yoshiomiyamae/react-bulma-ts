import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface RadioButtonProps extends BaseProps<HTMLInputElement> {
  disabled?: boolean;
  readOnly?: boolean;
}

export class RadioButton extends BaseComponent<RadioButtonProps> {
  render () {
    return <label className={classNameBuilder(['radio', (this.props.isTileChild ? TileChild.TileChild : null)])}>
      <input type="radio" {...this.props}/>
      {this.props.children}
    </label>
  }
}