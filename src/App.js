import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Faq from './Components/Faq/Faq';
import Courses from './Components/Courses/Courses';
import Main from './Components/Main/Main';
import Blog from './Components/Blog/Blog';
import SingleCourse from './Components/SingleCourse/SingleCourse';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import About from './Components/About/About';

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
          path: 'faq',
          element: <Faq></Faq>
        },
        {
          path: 'courses',
          element: <Courses></Courses>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '/category/:id',
          element: <PrivateRoutes><SingleCourse></SingleCourse></PrivateRoutes>,
          loader: ({params}) => fetch(`https://p-skool-server.vercel.app/category/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
     
      ]
      
      
    },
    {path: '/bout', element: <About></About>},
    { path: '*', element: <div>404 Page Not Found! About is unable to reach</div> }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
