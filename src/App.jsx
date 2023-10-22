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
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import AccessDeniedPage from './pages/AccessDeniedPage';

function App() {
  //const [user, setUser] = useState(null);
  const user = {id: '1', name: 'robin', role: 'parent'};

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginSignUpPage />} />

              <Route element={<ProtectedRoute redirectPath='/denied' isAllowed={!!user} />}>
                <Route path="/account" element={<AccountPage />} />
                <Route path="/view/:id" element={<ViewPosterPage />} />
                <Route path="/denied" element={<AccessDeniedPage />}/>
              </Route>

              <Route element={<ProtectedRoute redirectPath='/denied' isAllowed={!!user && user.role==='admin' || user.role==='parent'} />}>
                <Route path="/create-poster" element={<CreatePosterPage />} />
                <Route path="/edit/:id" element={<EditPosterPage />} />
                <Route path="/view/:id" element={<ViewPosterPage />} />
              </Route>

              <Route element={<ProtectedRoute redirectPath='/denied' isAllowed={!!user && user.role==='admin' || user.role==='babysitter'} />}>
                <Route path="/posters" element={<PosterPage />} />
              </Route>

              <Route path="/admin" element={
                <ProtectedRoute redirectPath='/denied' isAllowed={!!user && user.role==='admin'}>
                  <AdminPage />
                </ProtectedRoute>
              } />

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

