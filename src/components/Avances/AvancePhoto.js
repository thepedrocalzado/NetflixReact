import '../../App.css';
import '../../index.css';
import '../../assets/style.css';
import avance1 from "../../img/avances/avance1.png";




function AvancesPhotos() {
    return (
        <div className="">
            <div className="relative h-32 w-32 ml-3">
                <img className="text-left rounded-full border-2 border-red-400 ml-2 " src={avance1}/>

                <div className={"absolute bottom-0 ml-1 w-full"}>
                    <p className="font-bold text-pink-400 text-xl text-center">LOCO MANÍAS</p>
                </div>
            </div>
        </div>



    );
}

export default AvancesPhotos;