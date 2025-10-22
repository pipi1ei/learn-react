import { useLocation } from 'react-router';
import { Menu as AntdMenu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { layoutMenuItems } from '@/router/layout.config';

export default function Menu() {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState('');
  const [openKeys, setOpenKeys] = useState<string[] | undefined>();
  useEffect(() => {
    const pathList = pathname.slice(1).split('/');
    if (pathList.length > 1) {
      setOpenKeys([pathList[0]]);
    }
    setCurrent(pathList.at(-1)!);
  }, [pathname]);

  const navigate = useNavigate();
  const handleMenuClick: MenuProps['onClick'] = info => {
    const path = [...info.keyPath].reverse().join('/');
    const { key } = info;
    setCurrent(key);
    navigate(path);
  };

  const handleOpenChange: MenuProps['onOpenChange'] = openKeys => {
    setOpenKeys(openKeys);
  };

  return (
    <AntdMenu
      items={layoutMenuItems}
      mode="inline"
      theme="dark"
      openKeys={openKeys}
      selectedKeys={[current]}
      style={{ height: '100vh' }}
      onClick={handleMenuClick}
      onOpenChange={handleOpenChange}
    />
  );
}
