import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Atelier from "./pages/Atelier";
import Profil from "./pages/Profil";
import CreditsPage from "./pages/Credits";
import { useState, useEffect } from "react";
import { isFilterEnabled, setFilterEnabled } from "./utils/filterStorage";

function App() {
  const [filterEnabled, setFilter] = useState(true);

  useEffect(() => {
    setFilter(isFilterEnabled());
  }, []);

  const toggleFilter = () => {
    setFilter((prev) => {
      const newValue = !prev;
      setFilterEnabled(newValue);
      return newValue;
    });
  };

  return (
    <div>
      <div id="ResponsiveMsg">Haha c'est pas responsive du tout ...</div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Accueil
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
              />
            }
          />
          <Route
            path="/atelier"
            element={
              <Atelier
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
              />
            }
          />
          <Route
            path="/profil"
            element={
              <Profil
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
              />
            }
          />
          <Route
            path="/credits"
            element={
              <CreditsPage
                filterEnabled={filterEnabled}
                toggleFilter={toggleFilter}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
