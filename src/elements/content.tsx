import * as React from 'react';
import {classNameBuilder} from '../common';
import {Sizes} from '../modifiers';


interface ContentProps {
  children?: any;
  size?: Sizes;

  [x: string]: any;
}

export class Content extends React.Component<ContentProps> {
  render () {
    return (
      <div className={classNameBuilder(['content',
                                        this.props.size,
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}
