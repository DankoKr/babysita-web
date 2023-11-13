import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LoginSignUpPage from "./pages/LoginSignUpPage";
import AccountPage from "./pages/AccountPage";
import PosterPage from "./pages/PostersPage";
import CreatePosterPage from "./pages/CreatePosterPage";
import PostersManagementPage from "./pages/PostersManagementPage";
import ViewPosterPage from "./pages/ViewPosterPage";
import EditPosterPage from "./pages/EditPosterPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AccessDeniedPage from "./pages/AccessDeniedPage";
import { useContext } from "react";
import AuthContext from "./auth/AuthContext";
import BabysittersPage from "./pages/BabysittersPage";
import MyPostersPage from "./pages/MyPostersPage";
import UsersManagementPage from "./pages/UsersManagementPage";
import ViewUserPage from "./pages/ViewUserPage";
import JobApplicationPage from "./pages/JobApplicationsPage";
import ChatPage from "./websockets/ChatPage";

function App() {
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user;
  const isAdmin = user?.role === "admin";
  const isParent = user?.role === "parent" || user?.role === "admin";
  const isBabysitter = user?.role === "babysitter" || user?.role === "admin";

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <div className="wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginSignUpPage />} />
              <Route path="/chat" element={<ChatPage />} />

              <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
                <Route path="/account" element={<AccountPage />} />
                <Route path="/view-poster/:id" element={<ViewPosterPage />} />
                <Route path="/my-posters" element={<MyPostersPage />} />
                <Route
                  path="/my-job-applications"
                  element={<JobApplicationPage />}
                />
              </Route>

              <Route element={<ProtectedRoute isAllowed={isParent} />}>
                <Route path="/create-poster" element={<CreatePosterPage />} />
                <Route path="/edit-poster/:id" element={<EditPosterPage />} />
                <Route path="/babysitters" element={<BabysittersPage />} />
              </Route>

              <Route element={<ProtectedRoute isAllowed={isBabysitter} />}>
                <Route path="/posters" element={<PosterPage />} />
              </Route>

              <Route element={<ProtectedRoute isAllowed={isAdmin} />}>
                <Route
                  path="/posters-table"
                  element={<PostersManagementPage />}
                />
                <Route path="/users-table" element={<UsersManagementPage />} />
                <Route path="/view-user/:id" element={<ViewUserPage />} />
              </Route>

              <Route path="/denied" element={<AccessDeniedPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
