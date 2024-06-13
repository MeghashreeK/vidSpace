import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
import Error from './components/Error';

const App=()=> {
  return (
    <Provider store={store}>
    <div>
      <Header/>
     <RouterProvider router={AppRouter}/>
    </div>
    </Provider>
  );
}

const AppRouter=createBrowserRouter(
  [{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
    },
      {
        path:"/watch",
        element:<WatchPage/>
    }
    ],
    errorElement:<Error/>
  }]
)

export default App;
