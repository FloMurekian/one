import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Default from './views/Default';
import Pot from './views/Pot';
import Roll from './views/Roll';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Default />
      },
      {
        path: '/pot',
        element: <Pot />
      },
      {
        path: '/roll',
        element: <Roll />
      }
    ]
  }

],
{
  basename: '/one'
}
);


export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
