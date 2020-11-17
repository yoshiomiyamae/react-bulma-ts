import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface TagsProps extends BaseProps<HTMLDivElement> {
  hasAddons?: boolean;
}

export class Tags extends BaseComponent<TagsProps> {
  render () {
    return <div className={classNameBuilder(['tags', (this.props.isTileChild ? TileChild.TileChild : null), (this.props.hasAddons ? 'has-addons' : null)])} {...this.props}>
        {this.props.children}
    </div>
  }
}