import React from 'react';
import {BaseComponent, BaseProps, HorizontalAlignment, classNameBuilder} from '../../common';
import { CardFooterItemType } from './card-option';

interface CardFooterItemProps extends BaseProps<HTMLParagraphElement> {
  itemType: CardFooterItemType;
  alignment?: HorizontalAlignment;
}

export class CardFooterItem extends BaseComponent<CardFooterItemProps> {
  render () {
    return React.createElement(
      this.props.itemType,
      {
        ...this.props,
        className: 'card-footer-item',
      },
      this.props.children
    );
  }
}