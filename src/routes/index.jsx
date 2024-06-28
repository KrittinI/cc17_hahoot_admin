import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MainContainer from '../layouts/MainContainer';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AdminHomePage from '../pages/AdminHomePage';
// import EventListPage from '../pages/admin/EventListPage'
// import QuizStorePage from '../pages/admin/QuizStorePage';
// import UserProfilePage from '../pages/admin/UserProfilePage';

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
      // {
      //   path: '/admin/eventList',
      //   element: <EventListPage />,
      // },
      // {
      //   path: '/admin/quizStore',
      //   element: <QuizStorePage />,
      // },
      // {
      //   path: '/admin/userProfile',
      //   element: <UserProfilePage />,
      // },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
