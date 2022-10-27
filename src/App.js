import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Faq from './Components/Faq/Faq';
import Courses from './Components/Courses/Courses';
import Main from './Components/Main/Main';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
      
      
    },
    { path: '*', element: <div>404 Page Not Found! About is unable to reach</div> }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
