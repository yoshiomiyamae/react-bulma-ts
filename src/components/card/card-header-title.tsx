import React from 'react';
import {BaseComponent, BaseProps, HorizontalAlignment, classNameBuilder} from '../../common';

interface CardHeaderTitleProps extends BaseProps<HTMLParagraphElement> {
  alignment?: HorizontalAlignment,
}

export class CardHeaderTitle extends BaseComponent<CardHeaderTitleProps> {
  render () {
    return <p className={classNameBuilder(['card-header-title', this.props.alignment])} {...this.props}>
      {this.props.children}
    </p>
  }
}