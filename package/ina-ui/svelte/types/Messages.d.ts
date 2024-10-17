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


interface MessagesProps {}
interface MessagesProps extends Props {}

declare class Messages extends SvelteComponent<
  MessagesProps,
  {  },
  {
    'default': {};
  }
> {}

export default Messages;