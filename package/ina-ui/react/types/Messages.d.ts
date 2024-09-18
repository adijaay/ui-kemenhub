import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
}


interface MessagesProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface MessagesProps extends Props {}

declare const Messages: React.FunctionComponent<MessagesProps>;

export default Messages;