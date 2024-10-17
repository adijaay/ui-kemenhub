import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  onClick?: (e: any) => void;

  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Text content of the back link
   *
   * @default 'Back'
   */
  text?: string
  /**
   * Defines whether to show the link text. When 'auto', it hides link text for Material theme
   *
   * @default 'auto'
   */
  showText?: boolean | 'auto';
  /**
   * Link click handler
   */
  onClick?: (e: any) => void;
}


interface NavbarBackLinkProps {}
interface NavbarBackLinkProps extends Props {}

declare class NavbarBackLink extends SvelteComponent<
  NavbarBackLinkProps & HTMLAttributes<HTMLAnchorElement>,
  {  },
  {
    'default': {};
    'text': {};
  }
> {}

export default NavbarBackLink;