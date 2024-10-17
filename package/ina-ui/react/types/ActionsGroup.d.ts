import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;

  /**
   * Renders group outer hairlines (borders). (in Material theme only)
   *
   * @default true
   */
  dividers?: boolean;
}


interface ActionsGroupProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface ActionsGroupProps extends Props {}

declare const ActionsGroup: React.FunctionComponent<ActionsGroupProps>;

export default ActionsGroup;