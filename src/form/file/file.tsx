import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { State } from '../../common/state';

interface FileProps extends BaseProps<HTMLInputElement> {
  options?: (Color | Size | State | string | null | undefined)[];
  disabled?: boolean;
  readOnly?: boolean;
}

export class File extends BaseComponent<FileProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <input
      className={classNameBuilder([
        'file-input',
        ...options,
        (this.props.isTileChild ? TileChild.TileChild : null),
      ])}
      type="file"
      {...this.props}
      />
  }
}