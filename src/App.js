import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import NavBarTop from "./components/Navbar/NavbarTop";
import Intro from "./components/Intro/Intro";
import IntroPage from "./pages/IntroPage";
import Avances from "./components/Avances/Avances";
import MyList from "./components/Mi lista/MyList";
import MyTv from "./components/SeriesTV/MyTv";

function App() {
  return (
    <div className="w-full bg-black text-white">

        <IntroPage />
        <Avances />
        <MyList />
        <MyTv />
        <NavBar />
    </div>
  );
}

export default App;
