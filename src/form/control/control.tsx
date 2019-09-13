import React from 'react';
import { BaseComponent, BaseProps, classNameBuilder } from '../../common';
import { ControlOption } from './control-option';

interface ControlProps extends BaseProps<HTMLDivElement> {
  optons?: (ControlOption)[];
}

export class Control extends BaseComponent<ControlProps> {
  render() {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(["control", ...options])} {...this.props}>
      {this.props.children}
    </div>
  }
}