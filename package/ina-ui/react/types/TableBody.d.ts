import * as React from 'react';

export interface Props {}


interface TableBodyProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface TableBodyProps extends Props {}

declare const TableBody: React.FunctionComponent<TableBodyProps>;

export default TableBody;