import * as React from 'react';
import {classNameBuilder, getEventHandlerFromProps} from '../common';
import {Colors, Alignments} from '../modifiers';

export enum NavbarItemTypes {
  Anchor,
  Div,
}

interface NavbarProps {
  children?: any;
  transparent?: boolean;
  color?: Colors;
  hasShadow?: boolean;

  [x: string]: any;
}

interface NavbarBrandProps {
  children?: any;

  [x: string]: any;
}

interface NavbarBurgerProps {
  active?: boolean;

  [x: string]: any;
}

interface NavbarMenuProps {
  children?: any;
  active?: boolean;

  [x: string]: any;
}

interface NavbarStartProps {
  children?: any;

  [x: string]: any;
}

interface NavbarEndProps {
  children?: any;

  [x: string]: any;
}

interface NavbarTabsProps {
  children?: any;

  [x: string]: any;
}

interface NavbarItemProps {
  children?: any;
  type?: NavbarItemTypes;
  hasDropdown?: boolean;
  href?: string;
  active?: boolean;
  tab?: boolean;

  [x: string]: any;
}

interface NavbarLinkProps {
  children?: any;
  href?: string;

  [x: string]: any;
}

interface NavbarDropdownProps {
  children?: any;
  alignment?: Alignments;
  boxed?: boolean;

  [x: string]: any;
}

interface NavbarDividerProps {
  [x: string]: any;
}

export class Navbar extends React.Component<NavbarProps> {
  render () {
    return (
      <div className={classNameBuilder(['navbar',
                                        (this.props.transparent ? 'is-transparent' : ''),
                                        this.props.color,
                                        (this.props.hasShadow ? 'has-shadow' : ''),
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class NavbarBrand extends React.Component<NavbarBrandProps> {
  render () {
    return (
      <div className={classNameBuilder(['navbar-brand'])}>
        {this.props.children}
      </div>
    );
  }
}

export class NavbarBurger extends React.Component<NavbarBurgerProps> {
  render () {
    return (
      <button className={classNameBuilder(['navbar-burger',
                                           (this.props.active ? 'is-active' : '')
                                         ])}
              {...getEventHandlerFromProps(this.props)}
              >
        <span />
        <span />
        <span />
      </button>
    );
  }
}

export class NavbarHMenu extends React.Component<NavbarMenuProps> {
  render () {
    return (
      <div className={classNameBuilder(['navbar-menu',
                                        (this.props.active ? 'is-active' : '')
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class NavbarStart extends React.Component<NavbarStartProps> {
  render () {
    return (
      <div className={classNameBuilder(['navbar-start'])}>
        {this.props.children}
      </div>
    );
  }
}

export class NavbarEnd extends React.Component<NavbarEndProps> {
  render () {
    return (
      <div className={classNameBuilder(['navbar-end'])}>
        {this.props.children}
      </div>
    );
  }
}

export class NavbarTabs extends React.Component<NavbarTabsProps> {
  render () {
    return (
      <div className={classNameBuilder(['navbar-tabs'])}>
        {this.props.children}
      </div>
    );
  }
}

export class NavbarItem extends React.Component<NavbarItemProps> {
  render () {
    switch(this.props.type) {
      case NavbarItemTypes.Div:
        return (
          <div className={classNameBuilder(['navbar-item',
                                            (this.props.hasDropdown ? 'has-dropdown' : ''),
                                            (this.props.active ? 'is-active' : ''),
                                            (this.props.tab ? 'is-tab' : ''),
                                          ])}>
            {this.props.children}
          </div>
        );
      case NavbarItemTypes.Anchor:
      default:
        return (
          <a className={classNameBuilder(['navbar-item',
                                          (this.props.hasDropdown ? 'has-dropdown' : ''),
                                          (this.props.active ? 'is-active' : ''),
                                          (this.props.tab ? 'is-tab' : ''),
                                        ])}
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
    }
  }
}

export class NavbarLink extends React.Component<NavbarLinkProps> {
  render () {
    return (
      <a className={classNameBuilder(['navbar-link'])}
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
  }
}

export class NavbarDropdown extends React.Component<NavbarDropdownProps> {
  render () {
    return (
      <div className={classNameBuilder(['navbar-dropdown',
                                        this.props.alignment,
                                        (this.props.boxed ? 'is-boxed' : '')
                                      ])}>
        {this.props.children}
      </div>
    );
  }
}

export class NavbarDivider extends React.Component<NavbarDividerProps> {
  render () {
    return (
      <hr className={classNameBuilder(['navbar-divider'])} />
    );
  }
}
