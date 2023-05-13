import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritePage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  // localhost:3000/
  // my-page.com/
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
