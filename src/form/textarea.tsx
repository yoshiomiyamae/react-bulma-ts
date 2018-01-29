import * as React from 'react';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Sizes, States} from '../modifiers';

interface TextareaProps {
  color?: Colors;
  size?: Sizes;
  state?: States;
  placeholder?: string;
  readonly?: boolean;

  cols?: number;
  maxLength?: number;
  rows?: number;
  wrap?: 'soft' | 'hard' | null | undefined;

  [x: string]: any;
}

export class Textarea extends React.Component<TextareaProps> {
  render () {
    return (
      <textarea className={classNameBuilder(['textarea',
                                             this.props.color,
                                             this.props.size,
                                             this.props.state,
                                           ])}
             placeholder={this.props.placeholder}
             readOnly={this.props.readonly}
             cols={this.props.cols}
             maxLength={this.props.maxLength}
             rows={this.props.rows}
             wrap={this.props.wrap}
             {...getEventHandlerFromProps(this.props)}
             >
      </textarea>
    );
  }
}
