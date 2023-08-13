import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root.tsx';
import Login from './routes/login';
import App from './routes/app';

/* eslint-disable react-refresh/only-export-components */
const Foo = lazy(async () => import('./routes/foo'));
const Bar = lazy(async () => import('./routes/bar'));
/* eslint-enable react-refresh/only-export-components */

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
