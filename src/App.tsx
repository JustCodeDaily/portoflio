import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Home/Landing";
// import Hirer from "./components/Hirer";
// import Techy from "./components/Techy";
// import TryMe from "./components/TryMe";

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/hirer" element={<Hirer />} />
        <Route path="/techy" element={<Techy />} />
        <Route path="/tryme" element={<TryMe />} /> */}
      </Routes>
    </Router>
  )
}

export default App
