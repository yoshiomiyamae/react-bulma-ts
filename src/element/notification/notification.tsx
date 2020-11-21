import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps, Color } from '../../common';
import { TileChild } from '../../layout/tile/tile-child';
import { Delete } from '../delete';
import { ButtonType } from '../button';

interface NotificationProps extends BaseProps<HTMLDivElement> {
  options?: (Color | string | null | undefined)[];
  deleteButton?: boolean,
  deleteProps?: {[key: string]: any};
}

export class Notification extends BaseComponent<NotificationProps> {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div className={classNameBuilder(['notification', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])} {...this.props}>
      {
        this.props.deleteButton ?
        <Delete buttonType={ButtonType.Button} {...this.props.deleteProps}/>:
        null
        }
      {this.props.children}
    </div>
  }
}