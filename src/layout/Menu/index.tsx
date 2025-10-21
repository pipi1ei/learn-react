import { Menu as AntdMenu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router';

export default function Menu() {
  const navigate = useNavigate();
  const handleClick: MenuProps['onClick'] = info => {
    navigate(info.key);
  };
  const menuItems: MenuProps['items'] = [
    {
      key: '/home',
      label: 'Home',
      icon: <AppstoreOutlined />,
    },
    {
      key: '/about',
      label: 'Abount',
      icon: <AppstoreOutlined />,
    },
  ];

  return <AntdMenu items={menuItems} style={{ height: '100vh' }} onClick={handleClick} />;
}
