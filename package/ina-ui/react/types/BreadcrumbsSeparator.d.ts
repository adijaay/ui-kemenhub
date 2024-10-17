import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
}


interface BreadcrumbsSeparatorProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface BreadcrumbsSeparatorProps extends Props {}

declare const BreadcrumbsSeparator: React.FunctionComponent<BreadcrumbsSeparatorProps>;

export default BreadcrumbsSeparator;