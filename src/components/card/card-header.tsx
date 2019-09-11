import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface CardHeaderProps extends BaseProps<HTMLElement> {
}

export class CardHeader extends BaseComponent<CardHeaderProps> {
  render () {
    return <header className="card-header">
      {this.props.children}
    </header>
  }
}