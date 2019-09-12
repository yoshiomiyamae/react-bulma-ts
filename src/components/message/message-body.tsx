import React from 'react';
import { BaseComponent, BaseProps} from '../../common';

interface MessageBodyProps extends BaseProps<HTMLDivElement> {
}

export class MessageBody extends BaseComponent<MessageBodyProps> {
  render() {
    return <div className="message-header">
      {this.props.children}
    </div>
  }
}