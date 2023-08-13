import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root.tsx';
import Login from './routes/login';
import App from './routes/app';
import Foo from './routes/foo';
import Bar from './routes/bar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <App />,
        children: [
          {
            path: 'foo',
            element: <Foo />,
          },
          {
            path: 'bar',
            element: <Bar />,
          },
        ],
      },
    ],
  },
]);
