import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Todo : Importing Pages
import SplitScreenPage from "./pages/SplitScreenPage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new" element={<SplitScreenPage />} />
      </Routes>
    </Router>
  );
};

export default App;
