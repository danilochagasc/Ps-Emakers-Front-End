import { BrowserRouter,Route, Routes } from "react-router-dom";  
import UserPage from "./pages/UserPage/UserPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./index.css";
function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Register/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/userpage" element= {<UserPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
