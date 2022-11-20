import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeMain from "./components/Home/Home"

const History = lazy(() => import("./components/History/History"))
const Colours = lazy(() => import("./components/Colours/Colours"))
const Honours = lazy(() => import("./components/Honours/Honours"))
const Players = lazy(() => import("./components/Players/Players"))
const Company = lazy(() => import("./components/Company/Company"))

function App() {
  return (
    <div style={{width: "1400px"}}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeMain />} />
          <Route path="history" element={<History />} />
          <Route path="colours" element={<Colours />} />
          <Route path="honours" element={<Honours />} />
          <Route path="players" element={<Players />} />
          <Route path="company" element={<Company/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
