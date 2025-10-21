import { createBrowserRouter } from 'react-router';
import Home from '../views/home/Home';
import About from '../views/about/About';

const router = createBrowserRouter([
  {
    index: true,
    Component: Home,
  },
  {
    path: '/about',
    Component: About,
  },
]);

export default router;
