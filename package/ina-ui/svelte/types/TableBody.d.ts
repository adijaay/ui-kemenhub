import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;}


interface TableBodyProps {}
interface TableBodyProps extends Props {}

declare class TableBody extends SvelteComponent<
  TableBodyProps,
  {  },
  {
    'default': {};
  }
> {}

export default TableBody;