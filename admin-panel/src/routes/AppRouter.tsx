import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import MaterialsPage from '../pages/MaterialsPage/MaterialsPage';
import LogIn from '../modules/LogIn/LogIn';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import StatisticsPage from '../pages/StatisticsPage/StatisticsPage';
import ProtectedRoute from '../modules/ProtectedRouter/ProtectedRouter';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import UploadPage from '../pages/UploadPage/UploadPage';
import EditPage from '../pages/EditPage/EditPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/:username', // нужно передать username
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      {
        path: 'materials',
        element: (
          <ProtectedRoute>
            <MaterialsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'upload',
        element: (
          <ProtectedRoute>
            <UploadPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'statistics',
        element: (
          <ProtectedRoute>
            <StatisticsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'edit',
        element: (
          <ProtectedRoute>
            <EditPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
