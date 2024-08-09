import b1 from "/New/Rectangle 58.png";
import b3 from "/New/Rectangle 60.png";
import b4 from "/New/Rectangle 61.png";
import menu from "/New/Group 108.png";
import img10 from "/New/gallery1.png";

export function Menus() {
    
    return (
        <>
            <div className="flex flex-col  items-center mb-10">
                
                    <img src={menu} className="relative mt-20 w-1/2 sm:w-auto -mb-10" />
                    
                <div className="flex flex-col sm:flex-row items-center mx-10 xl:space-x-10 space-y-4 sm:space-y-0">
                    <div className="flex flex-col w-full mt-10 ">
                        <p className="text-lg lg:text-2xl text-center font-medium text-gray-900">
                            OXBO Is A Destination For The Local Community, As Well As those visiting the city. Our sociable staff help to create a communal feel, building relationships with regulars and welcoming new customers. Our menus are designed
                            with groups in mind - sharing platters and pitchers celebrate the union of delicious food and great conversation.
                        </p>    
                        <p className="hidden lg:block text-lg lg:text-2xl text-center font-medium text-gray-900    ">
                            Our spaces are designed to be sociable. They are Multi-purpose all day dining and drinking environments that can be used in different ways,
                            as the occasion dictates or as the mood changes from breakfast to late. Our spaces are large enough to accommodate gatherings and groups, with clever partitions or sliding panels that can be used to create smaller areas with a cozier feel. Seating arrangements reflect and respect single diners and drinkers too.
                        </p>
                    </div>
                    <div className="flex hidden sm:block ml-6 w-[70%] h-[70%] sm:w-full sm:h-full ">
                        <img src={img10} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full mx-auto space-x-1 mx-1 lg:space-x-36 h-full">
                <img src={b3} className="w-4/12  lg:w-1/4 mx-auto rounded-lg" />
                <img src={b1} className="w-4/12 lg:w-1/4 mx-auto rounded-lg" />
                <img src={b4} className="w-4/12 lg:w-1/4 mx-auto rounded-lg" />
                
            </div>
        </>
    );
}
