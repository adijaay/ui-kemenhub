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
}


interface BreadcrumbsSeparatorProps {}
interface BreadcrumbsSeparatorProps extends Props {}

declare class BreadcrumbsSeparator extends SvelteComponent<
  BreadcrumbsSeparatorProps & HTMLAttributes<HTMLDivElement>,
  {  },
  {
    'default': {};
  }
> {}

export default BreadcrumbsSeparator;