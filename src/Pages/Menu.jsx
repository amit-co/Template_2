import img1 from "/New/bgn.png";
import { useNavigate } from 'react-router-dom';
import back from "/buttons/Group 146.png";
import m1 from "/Menu/ird.png";
import m2 from "/Menu/bar.png";
import m3 from "/Menu/cafe.png";
import m4 from "/Menu/kitchen.png";
import c1 from "/Menu/camera.png";


export default function Menu() {
    const navigate = useNavigate();
    

    return (
        <div className="bg-cover pb-10 pt-28" style={{ backgroundImage: `url(${img1})` }}>
            
            <div className="flex flex-row mr-8">
                <button
                    className="self-start text-black text-2xl font-bold mt-10 ml-10"
                    onClick={() => navigate('/')}
                >
                    <img src={back} alt="backward" className="w-10 h-10 object-contain" />
                </button>
                <h1 className="text-customBrown3 text-6xl font-bold mx-auto tracking-widest mt-10 mb-4">MENU</h1>
            </div>
            <div className="flex flex-col  space-y-10 ">
                <div className="flex flex-col  sm:flex-row sm:space-x-10 sm:space-y-0 space-y-10 mx-6 lg:mx-auto  justify-center">
                    <div className="flex flex-col bg-customSalmon bg-opacity-50 rounded-lg mt-4 sm:mt-0  w-[330px] lg:w-[439px] h-[300px] ">
                        <h1 className=" text-2xl text-customBrown3 font-bold tracking-widest mx-auto mt-2">In Room Dining</h1>
                        
                        <div className="relative w-full lg:w-[398px] h-[243px] mx-auto">
                            <img src={m1} className="w-full h-full" />
                            <img src={c1} className="absolute w-[41px] h-[42px] bottom-0 right-0 mb-2 ml-2" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-customSalmon bg-opacity-50 w-[330px] lg:w-[439px] rounded-lg  h-[300px]">
                        <h1 className=" text-2xl text-customBrown3 font-bold tracking-widest mx-auto mt-2">Bar Menu</h1>
                        <div className="relative w-full lg:w-[398px] h-[243px] mx-auto">
                            <img src={m2} className="w-full h-full" />
                            <img src={c1} className="absolute w-[41px] h-[42px] bottom-0 right-0 mb-2 ml-2" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  sm:flex-row sm:space-x-10 sm:space-y-0 space-y-10  mx-6 lg:mx-auto justify-center">
                    <div className="flex flex-col bg-customSalmon bg-opacity-50 w-[330px] lg:w-[439px] h-[300px] rounded-lg">
                        <h1 className=" text-2xl text-customBrown3 font-bold text-customBrown3 font-bold tracking-widest mx-auto mt-2">Cafe</h1>
                        <div className="relative w-full lg:w-[398px] h-[243px] mx-auto">
                            <img src={m3} className="w-[398px] h-[243px] mx-auto" />
                            <img src={c1} className="absolute w-[41px] h-[42px] bottom-0 right-0 mb-2 ml-2" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-customSalmon bg-opacity-50 w-[330px] lg:w-[439px] h-[300px] rounded-lg">
                        <h1 className=" text-2xl text-customBrown3 font-bold tracking-widest mx-auto mt-2">Kitchen Menu</h1>
                        <div className="relative w-full lg:w-[398px] h-[243px] mx-auto">
                        <img src={m4} className="w-[398px] h-[243px] mx-auto" />
                        <img src={c1} className="absolute w-[41px] h-[42px] bottom-0 right-0 mb-2 ml-2" />
                    </div>
                    </div>
                </div>
             </div>
                
        </div>
    );
}
