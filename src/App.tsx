import { RouterProvider } from 'react-router';
import router from './router';

function App() {
  console.log('render App');

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
