import * as React from 'react';
import {classNameBuilder} from '../common';

interface ContainerProps {
  children?: any;
  fluid?: boolean;
}

export class Container extends React.Component<ContainerProps> {
  render () {
    return (
      <div className={classNameBuilder(['container',
                                        (this.props.fluid ? 'is-fluid' : ''),
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}
