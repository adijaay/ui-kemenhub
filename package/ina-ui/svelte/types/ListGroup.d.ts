import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;}


interface ListGroupProps {}
interface ListGroupProps extends Props {}

declare class ListGroup extends SvelteComponent<
  ListGroupProps & HTMLAttributes<HTMLLIElement>,
  {  },
  {
    'default': {};
  }
> {}

export default ListGroup;