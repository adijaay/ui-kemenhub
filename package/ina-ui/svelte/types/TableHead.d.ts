import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;}


interface TableHeadProps {}
interface TableHeadProps extends Props {}

declare class TableHead extends SvelteComponent<
  TableHeadProps,
  {  },
  {
    'default': {};
  }
> {}

export default TableHead;