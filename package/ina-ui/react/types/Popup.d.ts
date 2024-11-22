import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Popup bg color
     *
     * @default 'bg-white dark:bg-black'
     */
    bg?: string;
  };
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-screen h-screen md:w-160 md:h-160'
   * */
  size?: string;
  /**
   * Allows to open/close Popup and set its initial state
   *
   * @default false
   */
  opened?: boolean;
  /**
   * Enables Popup backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
}


interface PopupProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface PopupProps extends Props {}

declare const Popup: React.FunctionComponent<PopupProps>;

export default Popup;