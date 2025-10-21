import { Layout as AntdLayout } from 'antd';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';

export default function Layout() {
  return (
    <AntdLayout>
      <AntdLayout.Sider>
        <Menu />
      </AntdLayout.Sider>
      <AntdLayout>
        <Header />
        <AntdLayout.Content>
          <Content />
        </AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  );
}
