import * as React from 'react';
import {classNameBuilder} from '../common';

interface MediaProps {
  children?: any;
}
interface MediaLeftProps {
  children?: any;
}
interface MediaRightProps {
  children?: any;
}
interface MediaContentProps {
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

export class MediaContent extends React.Component<MediaContentProps> {
  render () {
    return (
      <div className={classNameBuilder(['media-content'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaLeft extends React.Component<MediaLeftProps> {
  render () {
    return (
      <div className={classNameBuilder(['media-left'])}>
        {this.props.children}
      </div>
    );
  }
}

export class MediaRight extends React.Component<MediaRightProps> {
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
