import * as React from 'react';
import {classNameBuilder} from '../common';
import {Sizes} from '../modifiers';

interface SectionProps {
  children?: any;
  spacing?: Sizes;
}

export class Section extends React.Component<SectionProps> {
  render () {
    return (
      <section className={classNameBuilder(['section',
                                            this.props.spacing,
                                          ])}>
        {this.props.children}
      </section>
    );
  }
}
