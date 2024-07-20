import Discount from "../Components/Discount";
import img2 from "/New/bgn.png";
import { useNavigate } from 'react-router-dom';
import back from "/buttons/Group 146.png";


export default function Gift() {
    const navigate = useNavigate();

    return (
        <div className="bg-cover pb-10 pt-28" style={{ backgroundImage: `url(${img2})` }}>
            <div className="flex flex-row mr-8 ">
                <button
                    className="self-start mt-10 ml-4 md:ml-10"
                    onClick={() => navigate('/')}
                >
                    <img src={back} alt="backward" className="w-10 h-10 object-contain" />
                </button>
                <h1 className="text-customBrown3 text-4xl md:text-6xl font-bold mx-auto tracking-widest mt-10 mb-4">Gift Voucher</h1>
            </div>

            <p className="text-center text-xl md:text-2xl tracking-widest mx-6 md:mx-36">Treat Your Favorite Food-Lover To One Of Our Golden Tickets - Pick Something Special And Choose From A Variety Of Restaurant
                Experiences Ranging From Champagene Afternoon Tea And Cocktail Masterclasses To Bespoke Food And Wine Dinners And Michelin-Starred Tasting Menus.</p>

            <div className="flex md:flex-row flex-col w-full justify-center md:space-x-0 lg:space-x-10 mt-8">
                <div className="flex  bg-customSalmon bg-opacity-50  w-full h-[250px] md:w-[250px] md:h-[350px] lg:w-[450px] lg:h-[500px] "></div>
                <div className="flex flex-col items-center ">
                    <h1 className="text-2xl md:text-3xl tracking-widest ml-0 md:ml-20 mt-4 font-bold">Terms And Conditions</h1>
                    <div className="flex flex-col items-center text-xl md:text-2xl tracking-widest mt-6 ml-0 mr-2 md:mr-0 md:ml-20">
                    <p >This Voucher Is Valid 48 Hours </p>
                    <p >After Purchase, For 12 Months.</p>
                    </div>
                        <Discount />
                   
                </div>
           </div>        
        </div>    
    );
}
