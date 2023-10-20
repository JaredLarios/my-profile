import Home from './Components/Home'
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </HashRouter>
  );
}

/* <Route path="/teams" element={<Home />}></Route> */

export default App;
