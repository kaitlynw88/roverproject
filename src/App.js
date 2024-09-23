import { Routes, Route } from 'react-router-dom';
//Components
import Header from './components/Header';
import Footer from './components/Footer';
//Pages
import HomePage from "./pages/MainPage"
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
//Stylesheet
import "./styles/App.css";

function App() {
  
  
  return (
      <div className="App">
          <div className="wrapper">
              <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
              <Footer />
          </div>
      </div>
  );
}

export default App;
