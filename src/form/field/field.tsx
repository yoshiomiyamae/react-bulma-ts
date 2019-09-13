import React from 'react';
import { BaseComponent, BaseProps } from '../../common';

interface FieldProps extends BaseProps<HTMLDivElement> {
}

export class Field extends BaseComponent<FieldProps> {
  render() {
    return <div className="field" {...this.props}>
      {this.props.children}
    </div>
  }
}