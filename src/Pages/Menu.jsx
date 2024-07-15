import img1 from "/New/bgn.png";
import { useNavigate } from 'react-router-dom';
import back from "/buttons/Group 46.png";
import { Reserve } from "../Components/Reserve";
import m1 from "/Menu/ird.png";
import m2 from "/Menu/bar.png";
import m3 from "/Menu/cafe.png";
import m4 from "/Menu/kitchen.png";
import c1 from "/Menu/camera.png";
import menu from "/New/Group 108.png";
import img10 from "/New/gallery1.png";

export default function Menu() {
    const navigate = useNavigate();
    return (
        <div className="bg-cover mb-10" style={{ backgroundImage: `url(${img1})` }}>
            
            <div className="flex flex-row mr-10">
                <button
                    className="self-start text-black text-2xl font-bold mt-10 "
                    onClick={() => navigate('/')}
                >
                    <img src={back} alt="backward" className="w-10 h-10 " />
                </button>
                <h1 className="text-customBrown3 text-6xl font-bold mx-auto tracking-widest mt-10 mb-4">MENU</h1>
            </div>
            <div className="flex flex-col space-y-10 ">
                <div className="flex flex-row space-x-10 justify-center ">
                    <div className="flex flex-col bg-customSalmon bg-opacity-50 rounded-lg w-[439px] h-[300px] ">
                        <h1 className=" text-2xl text-customBrown3 font-bold tracking-widest mx-auto mt-2">In Room Dining</h1>
                        
                        <div className="relative w-[398px] h-[243px] mx-auto">
                            <img src={m1} className="w-full h-full" />
                            <img src={c1} className="absolute w-[41px] h-[42px] bottom-0 right-0 mb-2 ml-2" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-customSalmon bg-opacity-50 w-[439px] rounded-lg h-[300px]">
                        <h1 className=" text-2xl text-customBrown3 font-bold tracking-widest mx-auto mt-2">Bar Menu</h1>
                        <div className="relative w-[398px] h-[243px] mx-auto">
                            <img src={m2} className="w-full h-full" />
                            <img src={c1} className="absolute w-[41px] h-[42px] bottom-0 right-0 mb-2 ml-2" />
                        </div>
                    </div>
                </div>
            <div className="flex flex-row space-x-10 justify-center ">
                    <div className="flex flex-col bg-customSalmon bg-opacity-50 w-[439px] h-[300px] rounded-lg">
                        <h1 className=" text-2xl text-customBrown3 font-bold text-customBrown3 font-bold tracking-widest mx-auto mt-2">Cafe</h1>
                        <div className="relative w-[398px] h-[243px] mx-auto">
                            <img src={m3} className="w-[398px] h-[243px] mx-auto" />
                            <img src={c1} className="absolute w-[41px] h-[42px] bottom-0 right-0 mb-2 ml-2" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-customSalmon bg-opacity-50 w-[439px] h-[300px] rounded-lg">
                        <h1 className=" text-2xl text-customBrown3 font-bold tracking-widest mx-auto mt-2">Kitchen Menu</h1>
                        <div className="relative w-[398px] h-[243px] mx-auto">
                        <img src={m4} className="w-[398px] h-[243px] mx-auto" />
                        <img src={c1} className="absolute w-[41px] h-[42px] bottom-0 right-0 mb-2 ml-2" />
                    </div>
                    </div>
                </div>
             </div>
                
        </div>
    );
}
