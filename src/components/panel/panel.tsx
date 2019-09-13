import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface PanelProps extends BaseProps<HTMLElement> {
}

export class Panel extends BaseComponent<PanelProps> {
  render() {
    return <nav className="panel" {...this.props}>
      {this.props.children}
    </nav>
  }
}