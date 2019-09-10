import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size } from '../common';
import { TileChild } from '../layout/tile/tile-child';
import { State } from './state';
import { InputStatic } from './input-static';

interface InputProps extends BaseProps<HTMLInputElement> {
  options?: (Color | Size | State | string)[];
  disabled?: boolean;
  readOnly?: boolean;
  isStatic?: boolean;
}

export class Input extends BaseComponent<InputProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <input
      className={classNameBuilder([
        'input',
        ...options,
        (this.props.isTileChild ? TileChild.TileChild : null),
        (this.props.isStatic ? InputStatic.Static : null)
      ])}
      {...this.props}
      />
  }
}