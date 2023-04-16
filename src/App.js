import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import NewPage from './components/Newpage';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Navigateus from './components/Navigateus';
import Viewpage from './components/Viewpage';
import Loaderfetch from './components/Loaderfetch';
import Loaderfetch2,{loader as fetchLoader} from './components/Loaderfetch2';
import Showdetailspage,{loader as getLoader} from './components/Showdetailspage';
import RootLoad from './components/RootLoad';

const router=createBrowserRouter(
  [
  {
    path:'/',
    element:<Root/>,          //the loader data from the children cannot be accessed on this component
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>,
       
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
      },
      
      {
        path:'load2',
        element:<Loaderfetch/>,
        loader:fetchLoader,
      },
      {
        path:'load',
        element:<RootLoad/>,
        children:[

          {
            
            index:true,
            element:<Loaderfetch2/>,      
            loader:async ()=>{
              const response = await fetch('https://localhost:44325/api/Getstudents');
              // console.log(response);
              if (!response.ok) {
                // throw new Error('Something went wrong!');
              }
        
              const data = await response.json();
              return data;
            },
          },
              {
                
                path:':pId',   //dynamic path
                element:<Showdetailspage/>,
                loader:getLoader
              },
            
          
        ]
      }
    ]
  },

]
);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
