import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Size} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface LabelProps extends BaseProps<HTMLLabelElement> {
  options?: (Size | string | null | undefined)[];
  disabled?: boolean;
  readOnly?: boolean;
}

export class Label extends BaseComponent<LabelProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <label className={classNameBuilder(['label', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}>
      {this.props.children}
    </label>
  }
}