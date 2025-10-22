import type { RouteObject } from 'react-router';
import type { MenuProps } from 'antd';
import { BorderlessTableOutlined, AppstoreOutlined } from '@ant-design/icons';
import Home from '../views/Home';
import TicTacToe from '../views/TicTacToe';
import LearnComponent from '@/views/LearnComponent';
import Base from '@/views/LearnComponent/views/Base';
import Communication from '@/views/LearnComponent/views/Communication';
import Controlled from '@/views/LearnComponent/views/Controlled';

type MenuItem = Required<MenuProps>['items'][number];

export type LayoutRouterConfig = MenuItem &
  RouteObject & { key: string; children?: LayoutRouterConfig[] };

export const layoutRouterConfig: LayoutRouterConfig[] = [
  {
    key: '',
    label: '首页',
    icon: <div className="i-mdi:home-outline" />,
    index: true,
    Component: Home,
  },
  {
    key: 'tic-tac-toe',
    label: '井字棋',
    icon: <BorderlessTableOutlined />,
    Component: TicTacToe,
  },
  {
    key: 'component',
    label: '组件',
    icon: <AppstoreOutlined />,
    Component: LearnComponent,
    children: [
      { key: 'base', label: '认识组件', Component: Base },
      { key: 'communication', label: '组件通信', Component: Communication },
      { key: 'controlled', label: '受控组件', Component: Controlled },
    ],
  },
];

export function generateLayoutRouter(routerConfig: LayoutRouterConfig[]) {
  return routerConfig.map(item => {
    const routeObject: RouteObject = item.index
      ? {
          index: true,
          Component: item.Component,
        }
      : {
          path: item.key,
          Component: item.Component,
        };
    if (item.children?.length) {
      routeObject.children = generateLayoutRouter(item.children);
    }
    return routeObject;
  });
}

export function generateLayoutMenus(routerConfig: LayoutRouterConfig[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return routerConfig.map((item: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const menuItem: any = {
      key: item.key,
      label: item.label,
      icon: item.icon,
    };
    if (item.children?.length) {
      menuItem.children = generateLayoutMenus(item.children);
    }
    return menuItem as MenuItem;
  });
}

export const layoutRoutes = generateLayoutRouter(layoutRouterConfig);
export const layoutMenuItems = generateLayoutMenus(layoutRouterConfig);
