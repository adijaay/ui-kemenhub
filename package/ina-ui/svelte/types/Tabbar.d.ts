import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
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
interface TabbarProps extends Props {}

declare class Tabbar extends SvelteComponent<
  TabbarProps & HTMLAttributes<HTMLAnchorElement>,
  {  },
  {
    'default': {};
  }
> {}

export default Tabbar;