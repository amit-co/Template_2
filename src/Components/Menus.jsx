import b1 from "/New/Rectangle 58.png";
import b2 from "/New/Rectangle 59.png";
import b3 from "/New/Rectangle 60.png";
import b4 from "/New/Rectangle 61.png";
import menu from "/New/Group 108.png";
import img10 from "/New/gallery1.png";

export function Menus() {
    
    return (
        <div>
            <div className="flex flex-col mt-20 items-center ">
                <img src={menu} className="w-1/2 sm:w-auto" />

                <div className="flex flex-col sm:flex-row items-center justify-center mx-auto sm:mt-[10vh] mt-10">
                    <p className="text-2xl text-center mr-10 ml-10 font-medium text-gray-900 mb-28 m:w-1/2 ">OXBO Is A Destination For The Local Community, As Well As those visiting the city.Our sociable staff help to create a communal feel,building relationships with regulars and welcomimg new customers. Our menus are designed
                        with groups in mind - sharing platters and pitchers celebrate the union of delicious food and great conversation.
                        Our spaces are designed to be sociable. They are Multi-purpose all day dinning and drinking environments that can be used in different ways,
                        as the occasion dictates or as the mood changes from breakfast to late.Our spaces are large enough to accommodate gatherings and groups , with clever partitions or sliding panels that can be used to create smaller areas with a cosier feel. Seating arrangements reflect and respect single diners and drinkers to.
                    </p>
                    <img src={img10} className="w-full sm:w-auto sm:mt-0 sm:ml-10" />
                </div>
            </div>
            <div className="flex flex-row flex-wrap  justify-center h-full">
                <img src={b3} className="w-full sm:w-1/2 lg:w-1/4 " />
                <img src={b1} className="w-full sm:w-1/2 lg:w-1/4 " />
                <img src={b4} className="w-full sm:w-1/2 lg:w-1/4 " />
                <img src={b2} className="w-full sm:w-1/2 lg:w-1/4 " />
            </div>
        </div>
    );
}
