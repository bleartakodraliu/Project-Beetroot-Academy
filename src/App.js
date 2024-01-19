import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterDetails from "./pages/CharacterDetails";
import Characters from "./pages/Characters";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters></Characters>}></Route>
        <Route path="character/:id" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
