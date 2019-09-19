import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { TitleType } from './title-type';

interface SubtitleProps extends BaseProps<HTMLHeadingElement | HTMLParagraphElement> {
  titleType: TitleType;
  level: number;
  spaced?: boolean;
}

export class Subtitle extends BaseComponent<SubtitleProps> {
  render () {
    return React.createElement(
      this.props.titleType === TitleType.Paragraph ? TitleType.Paragraph : `${TitleType.Heading}${this.props.level}`,
      {
        ...this.props,
        className: classNameBuilder(
          [
            'subtitle',
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