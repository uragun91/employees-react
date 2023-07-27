import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserDetails } from './pages/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user-details/:userId',
    element: <UserDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
