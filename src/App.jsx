import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import LoginSignUpPage from './pages/LoginSignUpPage';
import AccountPage from './pages/AccountPage';
import PosterPage from './pages/PostersPage';
import CreatePosterPage from './pages/CreatePosterPage';
import AdminPage from './pages/AdminPage';
import ViewPosterPage from './pages/ViewPosterPage';
import EditPosterPage from './pages/EditPostePage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import AccessDeniedPage from './pages/AccessDeniedPage';
import { useContext } from 'react';
import AuthContext from './auth/AuthContext'; 

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const isLoggedIn = !!user;
  const isAdmin = user?.role === 'admin';
  const isParent = user?.role === 'parent' || user?.role === 'admin';
  const isBabysitter = user?.role === 'babysitter' || user?.role === 'admin';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginSignUpPage />} />

              <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
                <Route path="/account" element={<AccountPage />} />
                <Route path="/view/:id" element={<ViewPosterPage />} />
              </Route>

              <Route element={<ProtectedRoute isAllowed={isParent} />}>
                <Route path="/create-poster" element={<CreatePosterPage />} />
                <Route path="/edit/:id" element={<EditPosterPage />} />
              </Route>

              <Route element={<ProtectedRoute isAllowed={isBabysitter} />}>
                <Route path="/posters" element={<PosterPage />} />
              </Route>

              <Route path="/admin" element={
                <ProtectedRoute isAllowed={isAdmin}>
                  <AdminPage />
                </ProtectedRoute>
              } />
              
              <Route path="/denied" element={<AccessDeniedPage />}/>
              <Route path="*" element={<NotFoundPage />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;


