import React from 'react';
import { classNameBuilder, BaseComponent, BaseProps} from '../../common';
import { TileChild } from '../../layout/tile/tile-child';

interface TagsProps extends BaseProps<HTMLDivElement> {
  hasAddon?: boolean;
}

export class Tags extends BaseComponent<TagsProps> {
  render () {
    return <div className={classNameBuilder(['tags', (this.props.isTileChild ? TileChild.TileChild : null), (this.props.hasAddon ? 'has-addon' : null)])}>
        {this.props.children}
    </div>
  }
}