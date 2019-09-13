import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface ControlProps extends BaseProps<HTMLDivElement> {
}

export class Control extends BaseComponent<ControlProps> {
  render() {
    return <div className="control" {...this.props}>
      {this.props.children}
    </div>
  }
}