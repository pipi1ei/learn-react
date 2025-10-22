import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ collapsed, setCollapsed }: HeaderProps) {
  return (
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
        fontSize: '16px',
        width: 64,
        height: 64,
      }}
    />
  );
}
