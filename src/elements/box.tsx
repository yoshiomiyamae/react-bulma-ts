import * as React from 'react';
import {classNameBuilder} from '../common';

interface BoxProps {
  children?: any;

  [x: string]: any;
}

export class Box extends React.Component<BoxProps> {
  render () {
    return (
      <div className={classNameBuilder(['box'])}>
        {this.props.children}
      </div>
    );
  }
}
