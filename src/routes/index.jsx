import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MainContainer from '../layouts/MainContainer';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
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
      { path: '/', element: <HomePage /> },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/admin',
        element: <AdminHomePage />,
      },
      {
        path: '/admin/eventList',
        element: <EventListPage />,
      },
      {
        path: '/admin/quizStore',
        element: <QuizStorePage />,
      },
      {
        path: '/admin/userProfile',
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
