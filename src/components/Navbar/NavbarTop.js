import '../../App.css';
import '../../index.css';
import logo from "../../img/navbartop/logo.png";
import share from "../../img/navbartop/televisor.png";
import avatar from "../../img/navbartop/avatar.png";
import TitleNavbar from "./TitleNavbar";



function NavBarTop() {
    return (
        <div className={"items-center bg-gradient-to-b from-black w-full pb-20"}>
            <div className="grid grid-cols-7">
                <div className="col-span-1 m-2 mt-6 ">
                    <img className="text-left h-10 mx-auto mb-1 " src={logo}/>
                </div>
                <div className="col-end-7 col-span-1  text-center mr-3 mt-8">
                    <img className="h-5 mx-auto mb-1" src={share}/>
                </div>

                <div className=" col-span-1 text-center mr-3 mt-6">
                    <img className="h-8 mx-auto mb-1 rounded" src={avatar}/>
                </div>
            </div>
            <TitleNavbar />
        </div>








    );
}

export default NavBarTop;