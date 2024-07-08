import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MainContainer from '../layouts/MainContainer';
import LoginPage from '../pages/LoginPage';
import AdminHomePage from '../pages/AdminHomePage';
import EventListPage from '../pages/EventListPage';
import QuizStorePage from '../pages/QuizStorePage';
import UserProfilePage from '../pages/UserProfilePage';
import RoomPage from '../pages/RoomPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <MainContainer />
      </>
    ),
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/admin',
        element: <AdminHomePage />,
      },
      {
        path: '/admin/event-list',
        element: <EventListPage />,
      },
      {
        path: '/admin/quiz-store',
        element: <QuizStorePage />,
      },
      {
        path: '/admin/user-profile',
        element: <UserProfilePage />,
      },
      {
        path: '/admin/room',
        element: <RoomPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
