import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
import LiveV from './components/LiveV';
import LiveWatchPage from './components/LiveWatchPage';
import MainPage from './components/MainPage';

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
    },
    {
      path:"/live",
      element:<LiveV/>
  },
  {
    path:"/livewatch",
    element:<LiveWatchPage/>
  },
  {
    path:"/mainpage",
    element:<MainPage/>
  }

    ]
  }]
)

export default App;
