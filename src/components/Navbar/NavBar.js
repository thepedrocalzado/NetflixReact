import '../../App.css';
import '../../index.css';
import home from "../../img/navbar/home.png";
import news from "../../img/navbar/proximamente.png";
import search from "../../img/navbar/lupa.png";
import download from "../../img/navbar/descargas.png";


function NavBar() {
    return (
        <div className=" grid grid-cols-4 items-center absolute bg-black sticky bottom-0 w-full pb-5">
               <div className="col-span-1 m-2 text-center">
                   <img className="h-6 mx-auto mb-1" src={home}/>
                   <p className="text-white text-xs">Inicio</p>
               </div>

            <div className="col-span-1 m-2 text-center">
                    <img className="h-6 mx-auto mb-1" src={news}/>
                    <p className="text-gray-500 text-xs">Próximamente</p>
                </div>

            <div className="col-span-1 m-2 text-center">
                    <img className="h-6 mx-auto mb-1" src={search}/>
                    <p className="text-gray-500 text-xs">Búsqueda</p>
                </div>

            <div className="col-span-1 m-2 text-center">
                    <img className="h-6 mx-auto mb-1" src={download}/>
                    <p className="text-gray-500 text-xs">Descargas</p>
                </div>
        </div>


    );
}

export default NavBar;