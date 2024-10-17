import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;}


interface TableProps {}
interface TableProps extends Props {}

declare class Table extends SvelteComponent<
  TableProps,
  {  },
  {
    'default': {};
  }
> {}

export default Table;