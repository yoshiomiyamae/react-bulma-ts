import * as React from 'react';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States} from '../modifiers';

export enum InputTypes {
  Text = 'text',
  Password = 'password',
  Email = 'email',
  Tel = 'tel',
  Search = 'search',
  Url = 'url',
  Datetime = 'datetime',
  Date = 'date',
  Month = 'month',
  Week = 'week',
  Time = 'time',
  DateTimeLocal = 'datetime-local',
  Number = 'number',
  Range = 'range',
  Color = 'color',
}

interface InputProps {
  color?: Colors;
  size?: Sizes;
  state?: States;
  type: InputTypes;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  value?: any;

  [x: string]: any;
}

export class Input extends React.Component<InputProps> {
  render () {
    return (
      <input className={classNameBuilder(['input',
                                          this.props.color,
                                          this.props.size,
                                          this.props.state,
                                        ])}
             type={this.props.type}
             placeholder={this.props.placeholder}
             readOnly={this.props.readonly}
             disabled={this.props.disabled}
             value={this.props.value}
             {...getEventHandlerFromProps(this.props)}
             />
    );
  }
}
