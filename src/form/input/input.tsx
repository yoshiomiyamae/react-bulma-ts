import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size, State } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface InputProps extends BaseProps<HTMLInputElement> {
  options?: (Color | Size | State | string)[];
  disabled?: boolean;
  readOnly?: boolean;
}

export class Input extends BaseComponent<InputProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <input
      className={classNameBuilder([
        'input',
        ...options,
        (this.props.isTileChild ? TileChild.TileChild : null),
      ])}
      {...this.props}
      />
  }
}