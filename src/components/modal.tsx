import * as React from 'react';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Sizes, Alignments} from '../modifiers';

interface ModalProps {
  children?: any;
  active?: boolean;

  [x: string]: any;
}

interface ModalBackgroundProps {
  children?: any;

  [x: string]: any;
}

interface ModalContentProps {
  children?: any;

  [x: string]: any;
}

interface ModalCloseProps {
  children?: any;
  size?: Sizes;

  [x: string]: any;
}

export class Modal extends React.Component<ModalProps> {
  render () {
    return (
      <div className={classNameBuilder(['modal',
                                        (this.props.active ? 'is-active' : '')
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalBackground extends React.Component<ModalBackgroundProps> {
  render () {
    return (
      <div className={classNameBuilder(['modal-background'])}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalContent extends React.Component<ModalContentProps> {
  render () {
    return (
      <div className={classNameBuilder(['modal-content'])}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalClose extends React.Component<ModalCloseProps> {
  render () {
    return (
      <button className={classNameBuilder(['modal-close',
                                           this.props.size
                                         ])}
              {...getEventHandlerFromProps(this.props)}
              >
        {this.props.children}
      </button>
    );
  }
}

interface ModalCardProps {
  children?: any;

  [x: string]: any;
}

interface ModalCardHeadProps {
  children?: any;

  [x: string]: any;
}

interface ModalCardTitleProps {
  children?: any;
  alignment?: Alignments;

  [x: string]: any;
}

interface ModalCardBodyProps {
  children?: any;

  [x: string]: any;
}

interface ModalCardFootProps {
  children?: any;

  [x: string]: any;
}
export class ModalCard extends React.Component<ModalCardProps> {
  render () {
    return (
      <div className={classNameBuilder(['modal-card'])}>
        {this.props.children}
      </div>
    );
  }
}

export class ModalCardHead extends React.Component<ModalCardHeadProps> {
  render () {
    return (
      <header className={classNameBuilder(['modal-card-head'])}>
        {this.props.children}
      </header>
    );
  }
}

export class ModalCardTitle extends React.Component<ModalCardTitleProps> {
  render () {
    return (
      <p className={classNameBuilder(['modal-card-title',
                                      this.props.alignment
                                    ])}>
        {this.props.children}
      </p>
    );
  }
}

export class ModalCardBody extends React.Component<ModalCardBodyProps> {
  render () {
    return (
      <section className={classNameBuilder(['modal-card-body'])}>
        {this.props.children}
      </section>
    );
  }
}

export class ModalCardFoot extends React.Component<ModalCardFootProps> {
  render () {
    return (
      <footer className={classNameBuilder(['modal-card-foot'])}>
        {this.props.children}
      </footer>
    );
  }
}
