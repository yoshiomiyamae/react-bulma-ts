import * as React from 'react';
import {classNameBuilder} from '../common';

interface FooterProps {
  children?: any;
}

export class Footer extends React.Component<FooterProps> {
  render () {
    return (
      <footer className={classNameBuilder(['footer'])}>
        {this.props.children}
      </footer>
    );
  }
}
