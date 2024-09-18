import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  onClick?: (e: any) => void;

  /**
   * Component's HTML Element
   *
   * @default 'button'
   */
  component?: string;
  /**
   * Highlights button as active
   *
   * @default false
   */
  active?: boolean;

  /**
   * Makes strong segmented button (should be used within `<Segmented strong>`)
   *
   * @default false
   */
  strong?: boolean;

  /**
   * Makes segmented button rounded (should be used within `<Segmented rounded>`)
   *
   * @default false
   */
  rounded?: boolean;
}


interface SegmentedButtonProps {}
interface SegmentedButtonProps extends Props {}

declare class SegmentedButton extends SvelteComponent<
  SegmentedButtonProps & HTMLAttributes<HTMLButtonElement>,
  {  },
  {
    'default': {};
  }
> {}

export default SegmentedButton;