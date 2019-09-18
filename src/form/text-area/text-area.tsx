import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { State } from '../../common/state';
import { TextAreaHasFixedSize } from './text-area-fixed-size';

interface TextAreaProps extends BaseProps<HTMLTextAreaElement> {
  options?: (Color | Size | State | string | null | undefined)[];
  disabled?: boolean;
  readOnly?: boolean;
  fixedSize?: boolean;
}

export class TextArea extends BaseComponent<TextAreaProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <textarea
      className={classNameBuilder([
        'textarea',
        ...options,
        (this.props.isTileChild ? TileChild.TileChild : null),
        (this.props.fixedSize ? TextAreaHasFixedSize.HasFixedSize : null)
      ])}
      {...this.props}
      >
        {this.props.children}
    </textarea>
  }
}