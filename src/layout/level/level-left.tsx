import React from 'react';
import { LevelItem } from "./level-item";
import { classNameBuilder } from "../../common";
import { TileChild } from '../tile/tile-child';

export class LevelLeft extends LevelItem {
  render () {
    const options = this.props.options ? this.props.options : [];
    return <div
      className={classNameBuilder(['level-left', ...options, (this.props.isTileChild ? TileChild.TileChild : null)])}
      {...this.props}
      >
        {this.props.children}
    </div>
  }
}