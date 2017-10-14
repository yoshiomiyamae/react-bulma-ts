import * as React from 'react';
import {classNameBuilder} from '../common';

import Gap from './gap';
import Responsiveness from './responsiveness';
import Sizes from './sizes';
import {Alignments} from '../modifiers'

export namespace Columns {
  interface ColumnsProps {
    children?: any;
    multiline?: boolean;
    mobileColums?: Responsiveness.MobileColumns;
    alignment?: Alignments;
  }

  interface ColumnProps {
    children?: any;
    size?: Sizes.ColumnSizes | Sizes.TwelveColumnsSystem;
    offset?: Sizes.Offset | Sizes.TwelveColumnsSystemOffset;
    narrow?: Sizes.Narrow;
  }

  export class Columns extends React.Component<ColumnsProps> {
    render () {
      return (
        <div className={classNameBuilder(['columns',
                                          (this.props.multiline ? 'is-multiline' : ''),
                                           this.props.mobileColums,
                                           this.props.alignment,
                                        ])}>
          {this.props.children}
        </div>
      );
    }
  }

  export class Column extends React.Component<ColumnProps> {
    render () {
      return (
        <div className={classNameBuilder(['column',
                                           this.props.size,
                                           this.props.offset,
                                           this.props.narrow,
                                        ])}>
          {this.props.children}
        </div>
      );
    }
  }
}

export default Columns
