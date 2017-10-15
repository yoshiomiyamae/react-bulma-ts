import * as React from 'react';
import {classNameBuilder} from '../common';

interface MediaProps {
  children?: any;
}
interface MediaLeftRightProps {
  children?: any;
}
interface MediaItemProps {
  children?: any;
}

export class Media extends React.Component<MediaProps> {
  render () {
    return (
      <div className={classNameBuilder(['media'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaLeft extends React.Component<MediaLeftRightProps> {
  render () {
    return (
      <div className={classNameBuilder(['media-left'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaRight extends React.Component<MediaLeftRightProps> {
  render () {
    return (
      <div className={classNameBuilder(['media-right'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaItem extends React.Component<MediaItemProps> {
  render () {
    return (
      <div className={classNameBuilder(['media-item'])}>
        {this.props.children}
      </div>
    );
  }
}
