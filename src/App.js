import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import NewPage from './components/Newpage';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Navigateus from './components/Navigateus';
import Viewpage from './components/Viewpage';

const router=createBrowserRouter(
  [
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'new',
        element:<NewPage/>
      },
      {
        path:'nev',
        element:<Navigateus/>
      },
      {
        path:'new/:pId',   //dynamic path
        element:<Viewpage/>
      }
    ]
  },

]
);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
