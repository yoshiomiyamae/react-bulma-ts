import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface HelpProps extends BaseProps<HTMLParagraphElement> {
}

export class Help extends BaseComponent<HelpProps> {
  render() {
    return <p className="help" {...this.props}>
      {this.props.children}
    </p>
  }
}