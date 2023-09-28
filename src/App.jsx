import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import LoginSignUpPage from './pages/LoginSignUpPage';
import AccountPage from './pages/AccountPage';
import PosterPage from './pages/PostersPage';
import CreatePosterPage from './pages/CreatePosterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginSignUpPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/posters" element={<PosterPage />} />
              <Route path="/create-poster" element={<CreatePosterPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

