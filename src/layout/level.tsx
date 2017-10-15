import * as React from 'react';
import {classNameBuilder} from '../common';
import {Breakpoints} from '../modifiers';

interface LevelProps {
  children?: any;
  breakpoint?: Breakpoints;
}
interface LevelLeftRightProps {
  children?: any;
}
interface LevelItemProps {
  children?: any;
}

export class Level extends React.Component<LevelProps> {
  render () {
    return (
      <div className={classNameBuilder(['level',
                                        this.props.breakpoint
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class LevelLeft extends React.Component<LevelLeftRightProps> {
  render () {
    return (
      <div className={classNameBuilder(['level-left'])}>
        {this.props.children}
      </div>
    );
  }
}

export class LevelRight extends React.Component<LevelLeftRightProps> {
  render () {
    return (
      <div className={classNameBuilder(['level-right'])}>
        {this.props.children}
      </div>
    );
  }
}

export class LevelItem extends React.Component<LevelItemProps> {
  render () {
    return (
      <div className={classNameBuilder(['level-item'])}>
        {this.props.children}
      </div>
    );
  }
}
