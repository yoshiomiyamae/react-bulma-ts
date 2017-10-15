import * as React from 'react';
import {classNameBuilder} from '../common';
import {MobileColumns} from './responsiveness';
import {ColumnSizes, Offset, Narrow, TwelveColumnsSystem, TwelveColumnsSystemOffset} from './sizes';
import {Alignments as ModifiersAlignments} from '../modifiers';

interface ColumnsProps {
  children?: any;
  multiline?: boolean;
  mobileColums?: MobileColumns;
  alignment?: ModifiersAlignments;
}

interface ColumnProps {
  children?: any;
  size?: ColumnSizes | TwelveColumnsSystem;
  offset?: Offset | TwelveColumnsSystemOffset;
  narrow?: Narrow;
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
