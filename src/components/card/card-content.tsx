import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface CardContentProps extends BaseProps<HTMLDivElement> {
}

export class CardContent extends BaseComponent<CardContentProps> {
  render () {
    return <div className="card-content">
      {this.props.children}
    </div>
  }
}