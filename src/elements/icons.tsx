import * as React from 'react';
import {classNameBuilder} from '../common';
import {TextColors, Sizes} from '../modifiers';


interface IconProps {
  children?: any;
  color?: TextColors;
  size?: Sizes;

  [x: string]: any;
}

export class Icon extends React.Component<IconProps> {
  render () {
    return (
      <span className={classNameBuilder(['icon',
                                         this.props.color,
                                         this.props.size,
                                       ])}>
        {this.props.children}
      </span>
    );
  }
}
