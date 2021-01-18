import '../../App.css';
import '../../index.css';
import intro from "../../img/intro/intro.png";
import list from "../../img/intro/milista.png";
import info from "../../img/intro/info.png";
import logo from "../../img/navbartop/logo.png";
import arrow from "../../img/intro/flecha.png";
import Pointer from "./Pointer";



function Intro() {
    return (
        <div className={"bg-gradient-to-t from-black w-full pt-20 "}>
            <div className={"text-center bottom-0"}>
                <div className={"flex items-center justify-center"}>
                    <img className="text-left h-8 m-2 " src={logo}/>
                    <p className="uppercase font-bold text-gray-300 text-2sm">P e l í c u l a</p>
                </div>
                <p className="text-3xl font-bold"> A DESCUBIERTO</p>
                <div className={"flex items-center justify-center text-xs"}>
                    <p className="font-regular text-white">Contundente</p>
                        <Pointer />
                    <p className="font-regular text-white">De suspense</p>
                        <Pointer />
                    <p className="font-regular text-white">Emocionante</p>
                        <Pointer />
                    <p className="font-regular text-white">Ciberpunk</p>
                </div>
            </div>

            <div className=" grid grid-cols-3 items-center ">
                <div className="col-span-1 m-2 text-center">
                    <img className="h-4 mx-auto mb-1" src={list}/>
                    <p className="text-white text-xs">Mi lista</p>
                </div>

                <div className="col-span-1 m-2 text-center">
                    <a href=""
                       className="flex bg-white rounded font-bold text-black px-1 py-1 transition items-center justify-center text-sm">
                        <img className="h-4 mr-2" src={arrow}/>
                        Reproducir
                    </a>
                </div>

                <div className="col-span-1 m-2 text-center">
                    <img className="h-5 mx-auto mb-1" src={info}/>
                    <p className="text-white text-xs">Información</p>
                </div>
            </div>



        </div>

    );
}

export default Intro;