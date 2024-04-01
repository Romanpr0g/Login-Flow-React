import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import LoginFlow from "./components/pages/LogIn/LoginFlow/LoginFlow";
import Homepage from "./components/pages/App/Homepage/Homepage";
import VerificationCard from "./components/templates/LogIn/VerificationCard/VerificationCard";
import LogInCard from "./components/templates/LogIn/LogInCard/LoginInCard";
import PrivateHomepageRoute from "./routes/PrivateHomepageRoute";
import PrivateLoginRoute from "./routes/PrivateLoginRoute";
import Teams from "./components/pages/App/Teams/Teams";
import MainLayout from "./components/templates/App/MainLayout/MainLayout";
import TeamDetails from "./components/templates/App/TeamDetails/TeamDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateHomepageRoute element={MainLayout} />}>
          <Route index element={<PrivateHomepageRoute element={Homepage} />} />
          <Route
            path="/teams"
            element={<PrivateHomepageRoute element={Teams} />}
          />
          <Route
            path="/teams/details"
            element={<PrivateHomepageRoute element={TeamDetails} />}
          />
          <Route
            path="/schedules"
            element={<PrivateHomepageRoute element={Homepage} />}
          />
          <Route
            path="/settings"
            element={<PrivateHomepageRoute element={Homepage} />}
          />
        </Route>

        <Route
          path="/login"
          element={<PrivateLoginRoute element={LoginFlow} />}
        >
          <Route index element={<PrivateLoginRoute element={LogInCard} />} />
          <Route
            path="/login/verify"
            element={<PrivateLoginRoute element={VerificationCard} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
