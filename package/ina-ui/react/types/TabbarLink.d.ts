import * as React from 'react';

export interface Props {
  /**
   * Makes this tabbar link active
   *
   * @default false
   */
  active?: boolean;
  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Object with additional props (attributes) to pass to the Link/Button
   */
  linkProps?: any;
  /**
   * Link icon content
   */
  icon?: React.ReactNode;
  /**
   * Link label content
   */
  label?: string | React.ReactNode;
}


interface TabbarLinkProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface TabbarLinkProps extends Props {}

declare const TabbarLink: React.FunctionComponent<TabbarLinkProps>;

export default TabbarLink;