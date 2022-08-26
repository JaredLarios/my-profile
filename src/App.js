import Home from './Components/Home'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

/** <Route path="/teams" element={<Home />}></Route> */

export default App;
