import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import LoginFlow from "./components/pages/LoginFlow/LoginFlow";
import Homepage from "./components/pages/Homepage/Homepage";
import VerificationCard from "./components/templates/VerificationCard/VerificationCard";
import LogInCard from "./components/templates/LogInCard/LoginInCard";
import PrivateHomepageRoute from "./routes/PrivateHomepageRoute";
import PrivateLoginRoute from "./routes/PrivateLoginRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateHomepageRoute element={Homepage} />} />
        <Route path="/login" element={<PrivateLoginRoute element={LoginFlow} />}>
          <Route index element={<PrivateLoginRoute element={LogInCard} />} />
          <Route path="/login/verify" element={<PrivateLoginRoute element={VerificationCard} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
