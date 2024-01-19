import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterDetails from "./pages/CharacterDetails";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters></Characters>}></Route>
        <Route path="characters/:id" element={<CharacterDetails />} />
        <Route path="characters/:id/comics/" element={<Comics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
