import * as React from 'react';

export interface Props {}


interface ListGroupProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface ListGroupProps extends Props {}

declare const ListGroup: React.FunctionComponent<ListGroupProps>;

export default ListGroup;