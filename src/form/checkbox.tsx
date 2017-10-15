import * as React from 'react';
import {classNameBuilder, getEventHandlerFromProps} from '../common';

interface CheckboxProps {
  children?: any;
  disabled?: boolean;
  value?: any;

  [x: string]: any;
}

export class Checkbox extends React.Component<CheckboxProps> {
  render () {
    return (
      <label className={classNameBuilder(['checkbox'])}>
        <input type="checkbox"
               disabled={this.props.disabled}
               value={this.props.value}
               {...getEventHandlerFromProps(this.props)}
               />
        {this.props.children}
      </label>
    );
  }
}
