import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { Delete } from '../delete';
import { ButtonType } from '../button';

interface NotificationProps extends BaseProps<HTMLDivElement> {
  options?: (Color)[];
  deleteProps?: {[key: string]: any};
}

export class Notification extends BaseComponent<NotificationProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['notification', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}>
      <Delete buttonType={ButtonType.Button} {...this.props.deleteProps}/>
      {this.props.children}
    </div>
  }
}