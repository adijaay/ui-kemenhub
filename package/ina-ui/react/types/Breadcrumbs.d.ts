import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Font size in iOS theme
   *
   * @default 'text-[17px]'
   */
  fontSizeIos?: string;
  /**
   * Font size in Material theme
   *
   * @default 'text-[14px]'
   */
  fontSizeMaterial?: string;
}


interface BreadcrumbsProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface BreadcrumbsProps extends Props {}

declare const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps>;

export default Breadcrumbs;