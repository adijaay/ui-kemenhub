import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
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

  /**
   * Link label content
   */
  label?: string
}


interface TabbarLinkProps {}
interface TabbarLinkProps extends Props {}

declare class TabbarLink extends SvelteComponent<
  TabbarLinkProps & HTMLAttributes<HTMLAnchorElement>,
  {  },
  {
    'default': {};
    'icon': {};
    'label': {};
  }
> {}

export default TabbarLink;