import React from 'react';
import {BaseComponent, BaseProps} from '../../common';

interface CardFooterProps extends BaseProps<HTMLElement> {
}

export class CardFooter extends BaseComponent<CardFooterProps> {
  render () {
    return <header className="card-footer" {...this.props}>
      {this.props.children}
    </header>
  }
}