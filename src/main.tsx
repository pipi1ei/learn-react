import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { App as AppContainer, ConfigProvider } from 'antd';
import 'virtual:uno.css';
import App from './App.tsx';

dayjs.locale('zh-cn');

createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <AppContainer component={false}>
      <App />
    </AppContainer>
  </ConfigProvider>
);
