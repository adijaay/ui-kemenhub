import * as React from 'react';

export interface Props {}


interface TableHeadProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface TableHeadProps extends Props {}

declare const TableHead: React.FunctionComponent<TableHeadProps>;

export default TableHead;