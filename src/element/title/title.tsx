import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { TitleType } from './title-type';

interface TitleProps extends BaseProps<HTMLHeadingElement | HTMLParagraphElement> {
  titleType: TitleType;
  level: number;
  spaced?: boolean;
}

export class Title extends BaseComponent<TitleProps> {
  render () {;
    return React.createElement(
      this.props.titleType === TitleType.Paragraph ? TitleType.Paragraph : `${TitleType.Heading}${this.props.size}`,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'tag',
            `is-${this.props.level}`,
            (this.props.spaced ? 'is-spaced' : null),
            (this.props.isTileChild ? TileChild.TileChild : null),
          ]
        ),
      },
      this.props.children
      );
  }
}