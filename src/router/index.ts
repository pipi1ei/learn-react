import { createBrowserRouter } from 'react-router';
import Layout from '../layout';
import NotFound from '../views/NotFound';
import { layoutRoutes } from './layout.config';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: layoutRoutes,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

export default router;
