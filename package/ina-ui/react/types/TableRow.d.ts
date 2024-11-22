import * as React from 'react';

export interface Props {
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Table Row hover bg color
     *
     * @default 'hover:bg-black/5 dark:hover:bg-white/10'
     */
    bgIos?: string;
    /**
     * Table Row hover bg color
     *
     * @default 'hover:bg-md-light-secondary-container dark:hover:bg-md-dark-secondary-container'
     */
    bgMaterial?: string;
    /**
     * Table Row divider color
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    dividerMaterial?: string;
  };
  /**
   * Is located inside the TableHead
   */
  header?: boolean;
}


interface TableRowProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface TableRowProps extends Props {}

declare const TableRow: React.FunctionComponent<TableRowProps>;

export default TableRow;