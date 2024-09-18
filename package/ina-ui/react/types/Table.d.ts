import * as React from 'react';

export interface Props {}


interface TableProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface TableProps extends Props {}

declare const Table: React.FunctionComponent<TableProps>;

export default Table;