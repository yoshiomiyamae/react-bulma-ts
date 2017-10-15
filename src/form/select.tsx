import * as React from 'react';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States} from '../modifiers';

interface SelectProps {
  children?: any;
  color?: Colors;
  size?: Sizes;
  state?: States;
  multiple?: number;

  [x: string]: any;
}

export class Select extends React.Component<SelectProps> {
  render () {
    return (
      <div className={classNameBuilder(['select',
                                        this.props.color,
                                        this.props.size,
                                        this.props.state,
                                      ])}
           multiple={this.props.multiple}
           size={this.props.multiple}
           {...getEventHandlerFromProps(this.props)}
           >
        <select>
          {this.props.children}
        </select>
      </div>
    );
  }
}
