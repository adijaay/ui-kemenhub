import * as React from 'react';

export interface Props {
  /**
   * Enables Tabbar with labels
   *
   * @default false
   */
  labels?: boolean;

  /**
   * Enables Tabbar with icons
   *
   * @default false
   */
  icons?: boolean;
}


interface TabbarProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface TabbarProps extends Props {}

declare const Tabbar: React.FunctionComponent<TabbarProps>;

export default Tabbar;