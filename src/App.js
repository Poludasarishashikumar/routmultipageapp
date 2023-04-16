import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import NewPage from './components/Newpage';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Navigateus from './components/Navigateus';


const router=createBrowserRouter([
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
      }
    ]
  },

]
);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
