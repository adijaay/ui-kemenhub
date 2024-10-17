import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'span'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-primary'
     */
    iconIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    iconMaterial?: string;
  };
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-8 h-8'
   * */
  size?: string;
}


interface PreloaderProps {}
interface PreloaderProps extends Props {}

declare class Preloader extends SvelteComponent<
  PreloaderProps & HTMLAttributes<HTMLSpanElement>,
  {  },
  {
    'default': {};
  }
> {}

export default Preloader;