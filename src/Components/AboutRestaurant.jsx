import { RestrauntLocation } from "./RestrauntLocation";
import { Timings } from "./Timings";

export function AboutRestaurant(){
    return(
        <div className="mediumLarge2:flex mt-10 mx-">
            <Timings />
            <RestrauntLocation />
        </div>
    )
}