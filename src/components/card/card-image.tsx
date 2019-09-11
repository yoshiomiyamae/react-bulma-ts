import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface CardImageProps extends BaseProps<HTMLDivElement> {
}

export class CardImage extends BaseComponent<CardImageProps> {
  render () {
    return <div className="card-image">
      {this.props.children}
    </div>
  }
}