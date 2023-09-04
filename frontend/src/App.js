import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home";
import Practice from './pages/Practice';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import Entertainment from './pages/Entertainment';
import Auth from './pages/Auth';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/practice',
          element: <Practice />
        },
        {
          path: '/entertainment',
          element: <Entertainment />
        },
        {
          path: '/auth',
          element: <Auth />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
