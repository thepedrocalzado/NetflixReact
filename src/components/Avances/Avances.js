import '../../App.css';
import '../../index.css';
import avance1 from "../../img/avances/avance1.png";
import AvancePhoto from "./AvancePhoto";




function Avances() {
    return (
        <div className="mt-6">
            <p className="font-bold ml-3 text-xl mb-2">Avances</p>
            <div className={"flex flex-no-wrap overflow-x-scroll overflow-hidden scrolling-touch justify-left"}>
                <AvancePhoto />
                <AvancePhoto />
                <AvancePhoto />
                <AvancePhoto />
                <AvancePhoto />
            </div>
        </div>

    );
}

export default Avances;