import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface PanelHeadingProps extends BaseProps<HTMLParagraphElement> {
}

export class PanelHeading extends BaseComponent<PanelHeadingProps> {
  render() {
    return <p className="panel-heading" {...this.props}>
      {this.props.children}
    </p>
  }
}