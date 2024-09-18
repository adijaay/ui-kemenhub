import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  /**
   * Makes menu list item highlighted (active)
   *
   * @default false
   */
  active?: boolean;
  /**
   * Menu list item link's `href` attribute
   */
  href?: string | boolean;
  /**
   * Content of the chip media area (e.g. icon)
   */

}


interface MenuListItemProps {}
interface MenuListItemProps extends Props {}

declare class MenuListItem extends SvelteComponent<
  MenuListItemProps & HTMLAttributes<HTMLLIElement>,
  {  },
  {
    'default': {};
    'media': {};
  }
> {}

export default MenuListItem;