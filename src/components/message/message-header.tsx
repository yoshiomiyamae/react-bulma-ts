import React from 'react';
import { BaseComponent, BaseProps} from '../../common';

interface MessageHeaderProps extends BaseProps<HTMLDivElement> {
}

export class MessageHeader extends BaseComponent<MessageHeaderProps> {
  render() {
    return <div className="message-header" {...this.props}>
      {this.props.children}
    </div>
  }
}