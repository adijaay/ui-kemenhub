import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;}


interface MenuListProps {}
interface MenuListProps extends Props {}

declare class MenuList extends SvelteComponent<
  MenuListProps & HTMLAttributes<HTMLDivElement>,
  {  },
  {
    'default': {};
  }
> {}

export default MenuList;