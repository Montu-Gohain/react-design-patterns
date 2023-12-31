import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Todo : Importing Pages
import SplitScreenPage from "./pages/SplitScreenPage";
import { ListPage } from "./pages/ListPage";
import Homepage from "./pages/Homepage";
import ModalPage from "./pages/ModalPage";
import ContainerComponent from "./pages/ContainerComponent";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/layout" element={<SplitScreenPage />} />
        <Route path="/lists" element={<ListPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/container" element={<ContainerComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
