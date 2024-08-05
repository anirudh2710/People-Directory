import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonDetails from "./PersonDetails";
import DisplayParams from "./DisplayParams";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/details/:email" element={<PersonDetails />} />
            <Route path="/" element={<DisplayParams />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
};

export default App;
