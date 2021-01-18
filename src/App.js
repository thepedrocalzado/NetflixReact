import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import NavBarTop from "./components/Navbar/NavbarTop";
import Intro from "./components/Intro/Intro";
import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <div className="w-full bg-black text-white">

        <IntroPage />
        <NavBar />

    </div>
  );
}

export default App;
