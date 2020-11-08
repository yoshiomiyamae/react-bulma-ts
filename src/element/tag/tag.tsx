import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color, Size} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { TagOption } from './tag-option';
import { ButtonType } from '../button';

interface TagProps extends BaseProps<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement | HTMLSpanElement> {
  buttonType: ButtonType;
  options?: (Color | Size | TagOption | string | null | undefined)[];
}

export class Tag extends BaseComponent<TagProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return React.createElement(
      this.props.tagType,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'tag',
            ...options,
            (this.props.isTileChild ? TileChild.TileChild : null),
          ]
        ),
      },
      this.props.children
      );
  }
}