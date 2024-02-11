import './App.css';
import Instagram from './Components/Instagram';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './Components/CreatePost';
import MainProfile from './Components/MainProfile';
import Logout from './Components/Logout';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Instagram />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/notifications' element={<SignUp />} />
          <Route path='/message' element={<SignUp />} />
          <Route path='/reels' element={<SignUp />} />
          <Route path='/explore' element={<SignUp />} />
          <Route path='/my-profile' element={<MainProfile />} />
          <Route path='/createpost' element={<Createpost />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
