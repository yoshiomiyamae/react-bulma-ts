import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface CardProps extends BaseProps<HTMLDivElement> {
}

export class Card extends BaseComponent<CardProps> {
  render () {
    return <div className="card">
      {this.props.children}
    </div>
  }
}