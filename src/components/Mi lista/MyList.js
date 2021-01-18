import '../../App.css';
import '../../index.css';
import '../../assets/style.css';
import lista1 from "../../img/listas/lista1.png";
import AvancePhoto from "../Avances/AvancePhoto";
import ListPhoto from "./ListPhoto";




function MyList() {
    return (
        <div className="mt-6">
        <p className="font-bold ml-3 text-xl mb-2">Mi lista</p>
        <div className={"flex flex-no-wrap overflow-x-scroll overflow-hidden scrolling-touch justify-left"}>
            <ListPhoto />
            <ListPhoto />
            <ListPhoto />
            <ListPhoto />
            <ListPhoto />

        </div>
</div>



    );
}

export default MyList;