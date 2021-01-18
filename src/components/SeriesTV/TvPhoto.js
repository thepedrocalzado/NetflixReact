import '../../App.css';
import '../../index.css';
import '../../assets/style.css';
import tv1 from "../../img/tv/tv1.jpg";
import logo from "../../img/navbartop/logo.png";




function TvPhoto() {
    return (
        <div className="">
            <div className="relative w-28 ml-3">
                <img className="text-left rounded-md ml-1 " src={tv1}/>

                <div className={"absolute top-0 left-0 ml-1 w-full"}>
                    <img className="text-left h-6 m-2 " src={logo}/>
                </div>
            </div>
        </div>



    );
}

export default TvPhoto;