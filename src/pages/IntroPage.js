import '../App.css';
import '../index.css';
import NavBarTop from "../components/Navbar/NavbarTop";
import Intro from "../components/Intro/Intro";
import intro from "../img/intro/intro.png";


function IntroPage() {
    return (
        <div className={"relative"}>
            <img className=" mx-auto w-full" src={intro}/>

            <div className={"absolute top-0 w-full"}>
                <NavBarTop />
            </div>

            <div className={"absolute bottom-0 w-full"}>
                <Intro />
            </div>

        </div>


    );
}

export default IntroPage;