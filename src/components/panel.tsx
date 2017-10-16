import * as React from 'react';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Alignments} from '../modifiers';

export enum PanelBlockTypes {
  Anchor,
  Div
}

interface PanelProps {
  children?: any;

  [x: string]: any;
}

interface PanelTabsProps {
  children?: any;

  [x: string]: any;
}

interface PanelBlockProps {
  children?: any;
  type?: PanelBlockTypes;
  href?: string;

  [x: string]: any;
}

export class Panel extends React.Component<PanelProps> {
  render () {
    return (
      <div className={classNameBuilder(['panel'])}>
        {this.props.children}
      </div>
    );
  }
}

export class PanelTabs extends React.Component<PanelTabsProps> {
  render () {
    return (
      <p className={classNameBuilder(['panel-tabs'])}>
        {this.props.children}
      </p>
    );
  }
}

export class PanelBlock extends React.Component<PanelBlockProps> {
  render () {
    switch (this.props.type) {
      case PanelBlockTypes.Anchor:
        return (
          <a className={classNameBuilder(['panel-block'])}
             {...(() => {
               if(this.props.href){
                 return {href: this.props.href}
               }
             })()}
             {...getEventHandlerFromProps(this.props)}
             >
            {this.props.children}
          </a>
        );
      case PanelBlockTypes.Div:
      default:
        return (
          <div className={classNameBuilder(['panel-block'])}>
            {this.props.children}
          </div>
        );
    }
  }
}
