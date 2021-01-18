import '../../App.css';
import '../../index.css';
import '../../assets/style.css';
import TvPhoto from "./TvPhoto";




function MyTv() {
    return (
        <div className="mt-6">
            <p className="font-bold ml-3 text-xl mb-2">Series TV</p>
            <div className={"flex flex-no-wrap overflow-x-scroll overflow-hidden scrolling-touch justify-left"}>
               <TvPhoto />
                <TvPhoto />
                <TvPhoto />
                <TvPhoto />
                <TvPhoto />
            </div>
        </div>



    );
}

export default MyTv;