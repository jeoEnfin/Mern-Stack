import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./pages/Home";
import Practice from './pages/Practice';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import Entertainment from './pages/Entertainment';

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
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
