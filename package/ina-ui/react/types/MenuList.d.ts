import * as React from 'react';

export interface Props {}


interface MenuListProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface MenuListProps extends Props {}

declare const MenuList: React.FunctionComponent<MenuListProps>;

export default MenuList;