import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface RadioButtonProps extends BaseProps<HTMLInputElement> {
  disabled?: boolean;
  readOnly?: boolean;
}

export class RadioButton extends BaseComponent<RadioButtonProps> {
  render() {
    const inputProps = { ...this.props };
    delete inputProps.children;
    return <label className={classNameBuilder(['radio', (this.props.isTileChild ? TileChild.TileChild : null)])}>
      <input type="radio" {...inputProps}/>
      {this.props.children}
    </label>
  }
}