import Home from './Components/Home'
import MyImages  from './Components/myImages'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="src/" element={<MyImages />} />
    </Routes>
  </BrowserRouter>
  );
}

/* <Route path="/teams" element={<Home />}></Route> */

export default App;
