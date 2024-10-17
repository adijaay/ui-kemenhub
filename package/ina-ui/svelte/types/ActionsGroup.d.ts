import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
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
interface ActionsGroupProps extends Props {}

declare class ActionsGroup extends SvelteComponent<
  ActionsGroupProps & HTMLAttributes<HTMLDivElement>,
  {  },
  {
    'default': {};
  }
> {}

export default ActionsGroup;