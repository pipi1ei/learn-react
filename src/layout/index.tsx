import { Layout as AntdLayout } from 'antd';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import { useState } from 'react';

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdLayout>
      <AntdLayout.Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
        <Menu />
      </AntdLayout.Sider>
      <AntdLayout className="h-100vh">
        <AntdLayout.Header className="p0 bg-white">
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        </AntdLayout.Header>
        <AntdLayout.Content
          className="p4 m5 bg-white rounded-lg overflow-y-auto"
          style={{ scrollbarWidth: 'thin' }}
        >
          <Content />
        </AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  );
}
