import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface ProgressBarProps extends BaseProps<HTMLProgressElement> {
  options?: (Color | Size | null | undefined)[];
  value?: number;
  max: number;
}

export class ProgressBar extends BaseComponent<ProgressBarProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <progress
      className={classNameBuilder(['progress', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      />
  }
}