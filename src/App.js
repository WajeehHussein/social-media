import './App.scss'
import {Home, Profile} from "./pages";
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import { LeftBar,Navbar, RightBar } from './components';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
function App() {
  const {currentUser} =useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext);

  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{display:"flex"}}>
          <LeftBar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser) {
      return children;
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>),
      children:[
        {
          path:"/*",
          element: <Home />
        },
        {
          path:"/profile/:id",
          element: <Profile />
        }
      ]
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
