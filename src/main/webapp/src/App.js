
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigator from "./components/Navigator";
import Main from "./pages/Main.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";

function App() {
  return (
    <BrowserRouter as='main'>
      <Navigator />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
