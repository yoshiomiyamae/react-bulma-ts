import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface PanelBlockProps extends BaseProps<HTMLDivElement> {
}

export class PanelBlock extends BaseComponent<PanelBlockProps> {
  render() {
    return <div className="panel-block" {...this.props}>
      {this.props.children}
    </div>
  }
}