
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/404/PageNotFound';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {
          path:'/home', 
          element: <Home></Home>
        },
        {
          path:'/topics',
          element: <Topics></Topics>
        }, 
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        }, 
        {
          path: '/about', 
          element: <About></About>
        }, 
        {
          path: '/blogs', 
          element:<Blogs></Blogs>
        },
       
      ]
    }, 
    {
      path: '*', 
      element: <PageNotFound></PageNotFound>
    }
    

  ])




  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
