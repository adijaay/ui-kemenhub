import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  colors?: {
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    titleMd?: string;
  };
}


interface MessagesTitleProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface MessagesTitleProps extends Props {}

declare const MessagesTitle: React.FunctionComponent<MessagesTitleProps>;

export default MessagesTitle;